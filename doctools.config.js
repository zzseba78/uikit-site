const uikitConf = require('/Users/jms/uikit/doctools.config.js');

const util = require('yootheme-doctools/src/util.js');
const ModuleMapper = require('yootheme-doctools/src/plugins/ModuleMapper.js');
const RuntimeAnalyzer = require('yootheme-doctools/src/plugins/RuntimeAnalyzer.js');
const ComponentExporter = require('yootheme-doctools/src/plugins/ComponentExporter.js');

const path = require('path');
const _ = require('lodash');
const {swap} = require('./utils');

const introMapping = swap(require('./intro.json').introduction.items);

module.exports = {

    ...uikitConf,

    include: [ 'src/js/@(core|mixin|components)/*', 'docs/**/*.md', 'package.json', 'README.md'],

    plugins: [
        ...uikitConf.plugins,
        {
            onGet(app, data) {

                data.routeMap = _.reduce(app.resources, (map, res) => {

                    if (res.path.includes('/intro/')) {
                        // map[res.resource] = res.name;
                        map[res.name] = res.resource;//res.resource;
                    } else if(res.type === 'UIkitComponent' || (!res.isAsset && res.path.includes('/components/') )) {
                        // map[res.resource] = 'component/' + res.name;//res.resource;
                        // map['component/' + res.name] = res.resource;//res.resource;
                    }
                    return map;
                }, {});

            }
        },
        new ComponentExporter({
            output: __dirname + '/pages/documentation',

              createLink(app, desc, data) {
                const map = swap(data.routeMap);
                return map[desc.resource] || '#';
              },

              getFileName(app, desc, data) {
                const map = swap(data.routeMap);
                const name = map[desc.resource] + '.vue';
                return name;
              },

              resources (app, data) {
                return _.mapValues(data.routeMap, res => app.resources[res]);
                // const res = _.mapValues(data.routeMap, res => app.resources[res]);
                // return _.filter(res, res => !res.path.includes('/component/'))
              },

              postProcess(app, html) {

                html = html.replace(/src="\.\//g, `src="${app.config.base}/`)

                  return `<template>
                    ${html}
                  </template>`;
              }
        })
    ],

    dev: true,

    output: {
        split: false,
        path: __dirname + '/docs.json'
    },

    // getResourceUri(desc) {
    //     return desc.fileInPackage.substr(1).replace(/\//g, '.').substr(1) || desc.name;
    // }


};

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

    menu: {
        ...require('./intro.json'),
        components : {
            path: 'components',
            items: pack => _.filter(pack.getResources(), res => {
                return util.match([
                    'src/js/core/*.js',
                    'src/js/components/*.js',
                    'src/js/mixins/*.js',
                    'docs/components/*.md'
                ], res.path, {data:res, matchBase: uikitConf.base }) && !res.isAsset;
            })

        }
    },

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
                        map['component/' + res.name] = res.resource;//res.resource;
                    }
                    return map;
                }, {});

            }
        },
        new ComponentExporter({
            output: __dirname + '/html',
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
              },
              postProcess(app, html) {
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

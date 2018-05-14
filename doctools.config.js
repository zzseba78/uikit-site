const uikitConf = require('/Users/jms/uikit/doctools.config.js');

const util = require('yootheme-doctools/src/util.js');
const ModuleMapper = require('yootheme-doctools/src/plugins/ModuleMapper.js');
const RuntimeAnalyzer = require('yootheme-doctools/src/plugins/RuntimeAnalyzer.js');
const ComponentExporter = require('yootheme-doctools/src/plugins/ComponentExporter.js');

const path = require('path');
const _ = require('lodash');
const {swap} = require('./utils');

const introMapping = swap(require('./intro.json').introduction.items);
const marked = require('./markdown');

module.exports = {

    ...uikitConf,

    include: [ 'src/js/@(core|mixin|components)/*', 'docs/**/*.md', 'package.json', 'README.md'],

    plugins: [
        ...uikitConf.plugins,
        {
            onGet(app, data) {

                data.routeMap = _.reduce(app.resources, (map, res) => {

                    if (res.path.includes('/intro/')) {
                        map[res.name] = res.resource;//res.resource;
                    } else if(res.type === 'UIkitComponent' || (!res.isAsset && res.path.includes('/components/') )) {
                        map['component/' + res.name] = res.resource;//res.resource;
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
              },

              markdown(markdown) {
                const text = marked(markdown);
                return text;
              },

              postProcess(app, html) {

                html = html.replace(/src="\.\//g, `src="${app.config.base}/`);
                html = html.replace(/src="\.\.\/docs/g,`src="${app.config.base}/docs"` );
                html = html.replace(/src="\.\.\/assets\/uikit/g,`src="${app.config.base}"` );

                  return `<template>
                    ${html}
                  </template>
                  <script>

                  import HeadlineProvider from '~/components/HeadlineProvider';

                  export default {
                      extends: HeadlineProvider
                  };

                  </script>`;
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

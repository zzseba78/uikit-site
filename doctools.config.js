const uikitConf = require('/Users/jms/uikit-doctools/doctools.config.js');

const util = require('yootheme-doctools/src/util.js');
const ModuleMapper = require('yootheme-doctools/src/plugins/ModuleMapper.js');
const RuntimeAnalyzer = require('yootheme-doctools/src/plugins/RuntimeAnalyzer.js');
const HTMLExporter = require('yootheme-doctools/src/plugins/HTMLExporter.js');
const UIkitRunner = require('yootheme-doctools/src/runnner/UIkitRunner.min.js').default;
// const UIkitRunner = require('yootheme-doctools/src/runners/UIkitRunner');

const highlight = require('highlight.js');

const path = require('path');
const _ = require('lodash');
const fs = require('fs');
const mkpath = require('mkpath');

// const introMapping = swap(require('./intro.json').introduction.items);
const marked = require('./markdown');

module.exports = {

    ...uikitConf,

    include: [ 'src/js/@(core|mixin|components)/*', 'docs/**/*.md', 'package.json', 'README.md'],

    plugins: [
        ...uikitConf.plugins,
        new HTMLExporter({
            output: __dirname + '/pages/documentation',

            runners: {
                uikit: new UIkitRunner
            },

            routeMap(app, data) {
                return _.reduce(app.resources, (map, res) => {

                    if (res.path.includes('/intro/')) {
                        map[res.name] = res.resource;//res.resource;
                    } else if(res.type === 'UIkitComponent' || (!res.isAsset && res.path.includes('/components/') )) {
                        map['component/' + res.name] = res.resource;//res.resource;
                    }
                    return map;
                }, {});
            },

            createLink(app, desc, data) {
                const map = _.invert(data.routeMap);
                return map[desc.resource] || '#';
            },

            getFileName(app, desc, data) {
                const map = _.invert(data.routeMap);
                const name = map[desc.resource] + '.vue';
                return name;
            },

            resources (app, data) {
                return _.mapValues(data.routeMap, res => app.resources[res]);
            },

            highlight(code, lang, frame) {
                const html = lang ? highlight.highlight(lang, code).value : highlight.highlightAuto(code).value;
                return frame ? `<pre><code class="language-${lang}">${html}</code></pre>` : html;

            },

            markdown(markdown) {
                // console.log('md');
                const text = marked(markdown, {
                    highlight: (code, lang) => {
                        // console.log('md-code');
                        return this.highlight(code, lang || 'html');
                    }
                });
                return text;
            },

            postProcess(app, html, desc, data) {

                html = html.replace(/src="\.\//g, `src="${app.config.base}/`);
                html = html.replace(/src="\.\.\/docs/g,`src="${app.config.base}/docs"` );
                html = html.replace(/src="\.\.\/assets\/uikit/g,`src="${app.config.base}"` );
                html = html.replace(/src="\.\.\/images\//g,`src="/images/` );
                // const escapedHtml = html.replace(/\\/g, '\\\\').replace(/`/g, `\\\``).replace(/\${/g, '\\\${');

                const htmlDataPath = path.join(this.output, this.getFileName(app, desc, data) + '.html');

                mkpath.sync(path.dirname(htmlDataPath));
                fs.writeFileSync(htmlDataPath, html);


                const quotedHtml = "''";// `\`${escapedHtml}\``

                return `<template>
                        <div @click="click" v-html="html"></div>
                </template>
                <script>

                import HeadlineProvider from '~/components/HeadlineProvider';
                import CodeUtils from '~/components/CodeUtils';
                import html from '!raw-loader!${htmlDataPath}';

                export default {
                    data:() => ({html}),
                    mixins: [HeadlineProvider, CodeUtils]
                }

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

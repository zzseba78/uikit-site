
const path = require('path');
const _ = require('lodash');
const AssetLinker = require('yootheme-doctools/src/plugins/AssetLinker.js');
const RuntimeAnalyzer = require('yootheme-doctools/src/plugins/RuntimeAnalyzer.js');
const DefaultLoader = require('yootheme-doctools/src/loaders/DefaultLoader.js');

module.exports = {

    dev: true,

    output: false,

    include: [ 'src/js/@(core|mixin|components)/*', 'docs/**/*.md', 'package.json', 'README.md'],

    exclude: [],

    server: {
        assets: {
            '/images': 'tests/images',
            '/uikit/tests/images': 'tests/images',
        }
    },

    base: __dirname + '/node_modules/uikit',

    loaders: [
        'MarkdownLoader',
        () => new DefaultLoader({
            type: 'UIkitComponent',
            include: [__dirname + '/src/js/components/*.js', __dirname + '/src/js/mixin/*.js', __dirname + '/src/js/core/*.js'],
            exclude: ['src/js/core/core.js'],
            desc: {runtime: true}
        }),
        'DefaultLoader',
        () => new DefaultLoader({
            type: 'UIkitTest',
            include: __dirname + '/tests/*.html',
            member: 'html'
        })
    ],

     /**
     * extra mapping plugins
     */
    plugins: [
        () => new RuntimeAnalyzer({serve: false}),
        () => new AssetLinker({
            getAssets(desc) {

                const assets = AssetLinker.defaultConfig.getAssets(desc);
                assets.test = path.join(__dirname, 'tests', desc.name.toLowerCase() + '.html');

                if (desc.type === 'UIkitComponent') {
                    assets.readme = path.join(__dirname, 'docs', 'components', desc.name.toLowerCase() + '.md');
                } else if (desc.type === 'markdown') {
                    assets.test = path.join(__dirname, 'tests', desc.name.toLowerCase() + '.html');

                }
                return assets;
            }
        }),
        'TypeMapper',
        'UIkitComponentMapper',
        'ComponentLinker',
        () => ({
            onSerialize(desc, data) {
                if (desc.html) {
                    data.html = desc.html;
                }
            },
            onGet(app, data) {
                data.pages = Object.values(app.resources)

                .map(res => {res._order = res.type === 'UIkitComponents' ? 2 : (res.type === 'markdown' ? 1 : 0); return res;})
                .sort((a, b) => b.name - a.name)
                .reduce((comps, res) => {
                    comps[res.name] = comps[res.name] || {};
                    comps[res.name][res.type] = res.resource;
                    return comps;
                }, {});

                [data.indexPage] = Object.keys(data.pages);
            }
        })
    ],

};
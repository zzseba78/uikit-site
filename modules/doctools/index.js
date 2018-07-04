const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const mkpath = require('mkpath');

const {DocTools, HTMLExporter, Config} = require('yootheme-doctools');


module.exports = function DocToolsModule (config) {

    //generate a list of all components
    const dir = config.path || '/doctools';

    this.writtenFiles = [];


    const writeJSON = data => {
        const publicResources = this.htmlExporter.config.resources(this.doctools, data);

        const nameMap = _.reduce(publicResources,(map,res) => {
           map[res.resource] = {name: res.name};
           return map;
        }, {});

        const rootPackage = data.resources[data.rootPackage];

        _.forEach(publicResources, (res, name) => {

            //inline assets
            res.assets = _.mapValues(res.assets, asset => data.resources[asset]);

            const dest = this.doctools.writeExport(`${name}.json`, res);

            this.writtenFiles.push(dest);

        })

        this.doctools.writeExport('_globals.json', {
            resources: nameMap,
            nodeGlobals: data.nodeGlobals,
            path: dir,
            repo: rootPackage && rootPackage.packageJson && rootPackage.packageJson.repository,
            routeMap: data.routeMap,
            types: data.types
        })
        config.onWrite && config.onWrite(this.doctools, data);
    }

    this.nuxt.hook('generate:before', generator => {

        return this.doctools.analyze().then(app => {

            const postProcess = config.postProcess;
            const data =  this.doctools.get();
            if(config.mode === 'flatten') {

                this.htmlExporter.config.postProcess = function(...args) {
                    const html = postProcess(...args);
                    return `<template>${html}</template>` + (config.component ?
                        `<script>
                        import Base from '${config.component}';
                        export default {
                            extends: Base
                        };
                        </script>` : '');
                    }

                    this.writtenFiles = this.htmlExporter.renderHTML(this.doctools, data, path.join(this.config.srcDir, 'pages', dir ) );

            } else {

                writeJSON(data);

            }

            this.htmlExporter.config.postProcess = postProcess;

            return app;

        });


    });

    this.nuxt.hook('generate:done', () => {

        // this.writtenFiles.forEach(fs.unlinkSync);

    });

    this.nuxt.hook('generate:extendRoutes', routes => {

        const data = this.doctools.get();
        Object.keys(data.routeMap).forEach(route => {
            routes.push({route: `${dir}/${route}`});
        });

    })

    this.nuxt.hook('ready', nuxt => {

        this.htmlExporter = new HTMLExporter({

            output: false,

            getFileName(app, desc, data) {
                const map = _.invert(data.routeMap);
                const name = map[desc.resource] + '.vue';
                return name;
            },

            createLink(app, desc, data) {
                const map = _.invert(data.routeMap);
                return map[desc.resource] || '#';
            },

            resources (app, data) {
                return _.mapValues(data.routeMap, res => data.resources[res]);
            },

            ..._.pick(config, ['routeMap', 'highlight', 'markdown', 'postProcess', 'markdownPreprocess'])

        });

        const conf = new Config({
            cache: {
                dir: this.options.srcDir
            }
        });

        conf.addPlugin(this.htmlExporter);

        this.doctools = new DocTools(conf);

        if (this.options.dev) {

            this.doctools.on('change', res => {

                this.doctools.analyze().then(app => {
                    writeJSON(app.get());
                });

            });

            this.doctools.emit('change');

        }

    });

    this.nuxt.hook('close', nuxt => {

        this.doctools.dispose();

    });

    this.nuxt.hook('build:extendRoutes', routes => {

        const docToolsRoute = {
            name: 'doctools',
            path: dir + '/*',
            component: config.component || (__dirname + '/page.vue')
        };

        if (routes.some(route => {

            if(route.path === dir) {
                docToolsRoute.path = '*'
                route.children = [
                    docToolsRoute
                ]
                return true;
            }
        })) {} else {

            routes.push(docToolsRoute);

        }

    });

};
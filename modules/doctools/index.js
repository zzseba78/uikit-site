const fs = require('fs');
const _ = require('lodash');
const path = require('path');

const Config = require('yootheme-doctools/src/Config');
const DocTools = require('yootheme-doctools/src/DocTools');
const HTMLExporter = require('yootheme-doctools/src/plugins/HTMLExporter.js');


module.exports = function DocToolsModule (options) {

    //generate a list of all components
    const dir = options.path || '/doctools';

    this.nuxt.hook('close', nuxt => {

        this.doctools.dispose();

    });

    this.writtenFiles = [];

    this.nuxt.hook('generate:before', generator => {

        return this.doctools.analyze().then(app => {

            const postProcess = options.postProcess;

            this.htmlExporter.config.postProcess = function(...args) {
                const html = postProcess(...args);
                return `<template>${html}</template>` + (options.component ?
                `<script>
                    import Base from '${options.component}';
                    export default {
                        extends: Base
                    };
                </script>` : '');
            }

            this.writtenFiles = this.htmlExporter.renderHTML(this.doctools, this.doctools.get(), path.join(this.options.rootDir, 'pages', dir ) );

            this.htmlExporter.config.postProcess = postProcess;

            return app;
        });
    });

    this.nuxt.hook('generate:before', () => {
        this.writtenFiles.forEach(fs.unlinkSync);
    });

    this.nuxt.hook('generate:extendRoutes', routes => {

        const data = this.doctools.get();
        Object.keys(data.routeMap).forEach(route => {
            routes.push({route: `${dir}/${route}`});
        });
    })

    this.nuxt.hook('ready', nuxt => {


        this.htmlExporter = new HTMLExporter({

            output:false,

            serve: true,

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
                return _.mapValues(data.routeMap, res => app.resources[res]);
            },

            ..._.pick(options, ['routeMap', 'highlight', 'markdown', 'postProcess'])

        });

        const config = new Config();

        config.addPlugin(this.htmlExporter);

        this.doctools = new DocTools(config);
        this.doctools.analyze();

    });

    this.nuxt.hook('build:extendRoutes', routes => {

        const docToolsRoute = {
            name: 'doctools',
            path: dir + '/*',
            component: options.component || (__dirname + '/page.vue')
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
const fs = require('fs');
const _ = require('lodash');

const Config = require('yootheme-doctools/src/Config');
const DocTools = require('yootheme-doctools/src/DocTools');
const HTMLExporter = require('yootheme-doctools/src/plugins/HTMLExporter.js');


module.exports = function DocToolsModule (options) {

    //generate a list of all components
    const path = options.path || '/doctools';

    this.nuxt.hook('close', nuxt => {

        this.doctools.dispose();

    });

    this.nuxt.hook('generate:extendRoutes', routes => {

        const data = this.doctools.get();
        Object.keys(data.routeMap).forEach(route => {
            routes.push({route: `${path}/${route}`});
        });
    })

    this.nuxt.hook('ready', nuxt => {


        const exporter = new HTMLExporter({

            output:false,

            serve: true,

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

        config.addPlugin(exporter);

        this.doctools = new DocTools(config);

    });

    this.nuxt.hook('build:extendRoutes', routes => {

        const docToolsRoute = {
            name: 'doctools',
            path: path + '/*',
            component: options.component || (__dirname + '/page.vue')
        };

        if (routes.some(route => {

            if(route.path === path) {
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
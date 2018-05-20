
<script>

    import {DocPage, DocBase} from 'yootheme-doctools/exports.es.js';
    import config from '~/doctools.nuxt.config.js';
    import Vue from 'vue';
    import {upperFirst, invert} from 'lodash-es';


    export default {

        extends: DocPage,

        head() {
            return {
                title: upperFirst(this.moduleData.name) + ' - UIkit'
            };
        },

        provide() {

            const data = this.data;
            const DocApp = Vue.extend({

                extends: DocBase,

                data() {
                    return {data}
                },

                methods: {

                    highlight: config.highlight,

                    markdown: config.markdown,

                    getUrl(resource) {
                        return `${data.path}/${invert(data.routeMap)[resource]}`;
                    }

                }

            });

            return {$doc: new DocApp()};

        },

        asyncData(context) {
            return Promise.all([
                import(`~/.doctools/_export/${context.params[0]}.json`),
                import('~/.doctools/_export/_globals.json')

            ]).then(([{default: moduleData}, {default: data}]) => ({moduleData, data}))
        }
    }

</script>
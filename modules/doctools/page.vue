
<script>

    import {DocPage, DocBase} from 'yootheme-doctools/exports.es.js';
    import config from '~/doctools.nuxt.config.js';
    import Vue from 'vue';
    import {upperFirst, invert} from 'lodash-es';
    import data from '~/.doctools/_export/_globals.json';

    const DocApp = Vue.extend({

        extends: DocBase,

        data() {
            return {data}
        },

        methods: {

            highlight: config.highlight,

            markdown: config.markdown,

            getUrl(resource) {
                return `${this.data.path}/${invert(this.data.routeMap)[resource]}`;
            }
        }

    });

    export default {

        asyncData(context) {
            return import(`~/.doctools/_export/${context.params[0]}.json`)
            .then(({default: moduleData}) => ({moduleData}))
        },

        extends: DocPage,

        head() {
            return {
                title: upperFirst(this.moduleData.name) + ' - UIkit'
            };
        },

        provide() {

            return {$doc: new DocApp()};

        }

    }

</script>

<script>

    import {DocPage, DocBase} from 'yootheme-doctools/exports.es.js';
    import config from '~/doctools.nuxt.config.js';
    import Vue from 'vue';
    import {upperFirst} from 'lodash-es';
    import data from '~/.doctools/_globals.json';

    const DocApp = Vue.extend({

        extends: DocBase,

        data() {
            return {data}
        },

        methods: {

            highlight: config.highlight,

            markdown: config.markdown

        }

    });

    export default {

        extends: DocPage,

        head() {
            return {
                title: upperFirst(this.moduleData.name)
            };
        },

        provide() {

            return {$doc: new DocApp()};

        },

        asyncData(context) {

            return import(`~/.doctools/${context.params[0]}.json`)
                .then(({default: moduleData}) => ({moduleData}));
        }
    }

</script>
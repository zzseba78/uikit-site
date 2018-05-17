

<script>

    import DocPage from 'yootheme-doctools/ui/app/DocPage.vue';
    import DocBase from '!babel-loader!yootheme-doctools/ui/app/DocBase.js';
    import config from '~/doctools.nuxt.config.js';

    import Vue from 'vue';

    const DocApp = Vue.extend({
        extends: DocBase,
        methods: {
            highlight: config.highlight,
            markdown: config.markdown
        }
    });

    export default {

        extends: DocPage,

        provide() {
            return {$doc: new DocApp()}
        },

        asyncData(context) {

            // return Promise.resolve();
            // debugger;

            return import(`~/.doctools/${context.params[0]}.json`).then(data => {

                debugger;
                return data;
            })
            // return new Promise(resolve => http.request({url}, res => resolve({html: res.text})));
        }
    }

</script>
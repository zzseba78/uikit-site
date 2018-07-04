
<script>

    import {Page, DocBase} from 'yootheme-doctools/exports.es.js';
    import {upperFirst} from 'lodash-es';
    import App from './app.js';


    export default {

        asyncData(context) {
            return import(`~/.doctools/_export/${context.params[0]}.json`)
            .then(({default: moduleData}) => ({moduleData}))
        },

        extends: Page,

        head() {
            return {
                title: upperFirst(this.moduleData.name) + ' - UIkit'
            };
        },

    }

</script>
import {DocBase} from 'yootheme-doctools/exports.es.js';
import data from '~/.doctools/_export/_globals.json';
import config from '~/doctools.nuxt.config.js';
import {invert} from 'lodash-es';

export default {

    extends: DocBase,

    data() {
        return {data};
    },

    methods: {

        highlight: config.highlight,

        markdown: config.markdown,

        markdownPreprocess: config.markdownPreprocess,

        getUrl(resource) {
            return `${this.data.path}/${invert(this.data.routeMap)[resource]}`;
        }

    },

    computed: {

    }
};
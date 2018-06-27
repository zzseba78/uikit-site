import {$$, attr} from 'uikit-util';

export default {
    inject: ['$headlineCollector'],

    mounted() {
        this.$nextTick(this.collectHeadlines, this);
    },
    updated() {
        this.$nextTick(this.collectHeadlines, this);
    },
    methods: {

        getHeadLines() {
            return $$('h2 a[href^="#"]', this.$el).reduce((ids, el) => {
                ids[el.innerText] = attr(el, 'href').substr(1);
                return ids;
            }, {});
        },

        collectHeadlines() {
            this.$headlineCollector.ids = this.getHeadLines();
        }
    }
}
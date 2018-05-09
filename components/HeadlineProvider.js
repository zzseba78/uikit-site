export default {
    inject: ['$headlineCollector'],

    mounted() {
        this.$nextTick(this.collectHeadlines, this);
    },
    updated() {
        this.$nextTick(this.collectHeadlines, this);
    },
    methods: {
        collectHeadlines() {
            const ids = UIkit.util.$$('h2 a[href^="#"]', this.$el).reduce((ids, el) => {
                ids[el.innerText] = UIkit.util.attr(el, 'href').substr(1);
                return ids;
            }, {});

            this.$headlineCollector.ids = ids;
        }
    }
}
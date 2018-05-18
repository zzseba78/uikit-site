import Vue from 'vue';

import 'yootheme-doctools/packages/uikit-ssr'; //UIkit
import ExampleRunner from 'yootheme-doctools/ui/app/ExampleRunner.vue'; //UIkit
import UIkitRunner from '!babel-loader!yootheme-doctools/src/runnner/UIkitRunner'; //UIkit

ExampleRunner.runners['uikit'] = new UIkitRunner;

import config from '../config.js';

import Navbar from '~/components/Navbar.vue';
import DocumentationSidebar from '~/components/DocumentationSidebar.vue';

Vue.component('Navbar', Navbar);
Vue.component('DocumentationSidebar', DocumentationSidebar);

Vue.mixin({

    computed: {
        $config() {
            return config;
        }
    },

    updated() {
        this.attachUIKit();

    },

    mounted() {
        this.attachUIKit();
    },

    methods: {

        attachUIKit() {
            this.$nextTick(el => {

                const uks = UIkit.util.$$('[uk]', this.$el);

                uks.forEach(el => {

                    const name = UIkit.util.attr(el, 'uk');
                    const func = UIkit.util.camelize(name);
                    const comp = UIkit[func](el);
                    if (comp) {
                        comp.$reset && comp.$reset(); //reconnect
                    }

                });
            });
        }
    }

});
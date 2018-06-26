import Vue from 'vue';

import UIkit from 'uikit-ssr';

import {Registry} from 'yootheme-doctools/exports.es.js'; //UIkit
import UIkitRunner from '../lib/UIkitRunner';

import config from '../config.js';

import Navbar from '~/components/Navbar.vue';
import DocumentationSidebar from '~/components/DocumentationSidebar.vue';

Registry.runners['uikit'] = new UIkitRunner;

if (typeof window !== 'undefined') {
    window.UIkit = UIkit;
}

if (typeof global !== 'undefined') {
    global.UIkit = UIkit;
}

Vue.component('Navbar', Navbar);
Vue.component('DocumentationSidebar', DocumentationSidebar);

Vue.mixin({

    computed: {
        $config() {
            return config;
        },

        $language() {
            return {
                '<h2>props:</h2>':

                `<h2 id="component-options" class="uk-h3 tm-heading-fragment"><a href="#component-options">Component options</a></h2>
                <p>Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. <a href="javascript#component-configuration">Learn more</a></p>`,

                '<h2>events:</h2>':

                `<h3 id="events" class="uk-h4 tm-heading-fragment"><a href="#events">Events</a></h3>
                <p>The following events will be triggered on elements with this component attached:</p>`,

                '<h2>methods:</h2>':

                `<h3 id="methods" class="uk-h4 tm-heading-fragment"><a href="#methods">Methods</a></h3>
                <p>The following methods are available for the component:</p>`,

                '<h2>$functionName:</h2>':

                `<h4 id="toggle" class="uk-h5 tm-heading-fragment"><a href="#toggle">$functionName</a></h4>`,

                '<a href="$repoLink">edit in repo</a>': (vars) => {
                    return '<a href="$repoLink"><span uk="icon" icon="pencil" uk-tooltip="edit this resource">edit this resource</span></a>';
                }
            };
        }
    },

    updated() {
        this.attachUIKit();

    },

    mounted() {
        this.attachUIKit();
    },

    methods: {

        $t(text, vars) {

            text = this.$language[text] || text;

            if (typeof text === 'function') {
                text = text(vars);
            }

            if (vars) {
                return text.replace(/\$(\w+)/g, (all, word) => vars[word] ? vars[word] : word);
            } else {
                return text;
            }
        },

        attachUIKit() {

            process.client && this.$nextTick(el => {

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
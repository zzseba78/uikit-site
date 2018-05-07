import UIkit from '../isomorphic';
import Vue from 'vue';
import _ from 'lodash';
import Code from 'vue-highlight-component';

Vue.component('Code', Code);

Vue.mixin({
    computed: {
        _() {
            return _;
        }
    },

    mounted() {

        this.$nextTick(el => {

            const uks = UIkit.util.$$('[uk]', this.$el);

            uks.forEach(el => {
                const name = UIkit.util.attr(el,'uk');

                UIkit.util.attr(el, `uk-${name}`, '');

                const func = UIkit.util.camelize(name);
                // debugger
                UIkit[func](el);

            })
        })

    }
});

if (typeof window !== 'undefined') window.UIkit = UIkit;
if (typeof global !== 'undefined') global.UIkit = UIkit;
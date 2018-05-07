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

        _.forEach(this.$refs, (el, name) => {
            if(name.indexOf('uk-') === 0) {
                const fun = UIkit.util.camelize(name.substr(3));

                if(!UIkit[fun]) debugger;

                // debugger;
                UIkit.util.attr(el, name, '');
                console.log('added', name);


                // debugger
                UIkit[fun](el);
            }
        })
    }
});

if (typeof window !== 'undefined') window.UIkit = UIkit;
if (typeof global !== 'undefined') global.UIkit = UIkit;
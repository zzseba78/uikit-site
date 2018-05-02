// import ExampleRunner from '../../../ui/app/ExampleRunner.vue';
// import runtime from '../../runtime/index';
// import vuerunner from '../../../src/runnner/VueRunner';
// import uikitrunner from '../../../src/runnner/UIkitRunner';

import Navbar from './Navbar.vue';
import Layout from './Layout.vue';

// import Pro from './Pro.vue';
// import Index from './Index.vue';
// import Changelog from './Changelog.vue';
// import UIkit from 'uikit';

// window.UIkit = UIkit;

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {

    router.addRoutes([
        // {
        //     path: '/',
        //     component: Layout,
        //     beforeEnter: (to, from, next) => {
        //         // ...
        //         debugger;
        //         if (Layout.components[to.params.component]) {
        //             next();
        //         }
        //         // debugger;
        //     }
        // },
        {
            path: '/:component?',
            component: Layout,
            beforeEnter: (to, from, next) => {
                if (!to.params.component) {
                    next('/Index');
                } else if (Layout.components[to.params.component]) {
                    next();
                }
            }
        }
    ])

    // ...apply enhancements to the app

    // ExampleRunner.runtime = runtime;
    // ExampleRunner.runners['vue'] = new vuerunner;
    // ExampleRunner.runners['uikit'] = new uikitrunner;

    // Vue.component('ExampleRunner', ExampleRunner);

    // Vue.component('Index', Index);
    // Vue.component('Changelog', Changelog);
    Vue.component('Navbar', Navbar);
    // Vue.component('Pro', Pro);

  }
import Navbar from './Navbar.vue';
import Layout from './Layout.vue';
import Index from './Index.vue';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {

    router.addRoutes([
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

    Vue.component('Navbar', Navbar);
    Vue.component('Index', Index);

  }
<template>

    <div class="uk-offcanvas-content">

                <nuxt/>

        <div id="offcanvas" uk-offcanvas="mode: push; overlay: true">
            <div class="uk-offcanvas-bar">
                <div class="uk-panel">


                    <ul class="uk-nav uk-nav-default tm-nav">
                        <li class="uk-nav-header">General</li>
                        <li><a href="/">Home</a></li>
                        <li v-for="entry in $app.config.themeConfig.nav"><a :href="entry.link">{{entry.text}}</a></li>
                    </ul>

                    <!-- <ul class="uk-nav uk-nav-default tm-nav uk-margin-top" v-for="(pages, category, index) in navigation">
                        <li class="uk-nav-header">{{category}}</li>
                        <li v-for="(p, label) in pages" exact><a :href="'./docs/'+p">{{label}}</a></li>
                    </ul> -->
                </div>
            </div>
        </div>

    </div>

</template>

<script>

import config from '../.vuepress/config.js';

import Navbar from '../components/Navbar.vue';
import Vue from 'vue';
Vue.component('Navbar', Navbar);



export default {

    data() {
        return {ready: false, config}
    },

    provide() {
        return {$app: this};
    },

    computed: {
        $app() {
            return this;
        },
        sidebar() {

            for (const path in this.$app.config.themeConfig.sidebar) {

                if (this.$route.path.indexOf(path) === 0) {
                    return this.$app.config.themeConfig.sidebar[path];
                }
            }

        }
    },


}

</script>

<style src="../less/theme.less" lang="less" ></style>


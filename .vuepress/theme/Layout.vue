<template>

    <div class="uk-offcanvas-content">

        <template >

            <template v-if="$page">


                <template v-if="sidebar">
                    <Navbar />
                    <div  v-if="sidebar" class="tm-sidebar-left uk-visible@m">
                        <h3>Documentation</h3>
                        <ul class="uk-nav uk-nav-default tm-nav" :class="{ 'uk-margin-top': index }" v-for="(group, index) in sidebar">
                            <li class="uk-nav-header">{{group.title}}</li>
                            <router-link tag="li" :to="item[0].replace('.md', '.html')" :key="item[0]" v-for="item in group.children" exact><a>{{item[1]}}</a></router-link>
                        </ul>
                    </div>
                    <div class="tm-main uk-section uk-section-default">
                        <div class="uk-container uk-container-small uk-position-relative">
                        <Content v-if="$page"/>
                        </div>
                    </div>
                </template>

                <Content v-else/>

            </template>

            <component v-else :is="$route.params.component"/>


        </template>

        <div id="offcanvas" uk-offcanvas="mode: push; overlay: true">
            <div class="uk-offcanvas-bar">
                <div class="uk-panel">


                    <ul class="uk-nav uk-nav-default tm-nav">
                        <li class="uk-nav-header">General</li>
                        <li><a href="/">Home</a></li>
                        <li v-for="entry in $site.themeConfig.nav"><a :href="entry.link">{{entry.text}}</a></li>
                    </ul>

                    <ul class="uk-nav uk-nav-default tm-nav uk-margin-top" v-for="(pages, category, index) in navigation">
                        <li class="uk-nav-header">{{category}}</li>
                        <li v-for="(p, label) in pages" exact><a :href="'./docs/'+p">{{label}}</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

// import navigation from '../../../docs/app/navigation.json';
import UIkit from '../uikit-node';

export default {

    data:() => ({ready: false}),

    computed: {
        navigation() {
            return {};
        },

        sidebar() {

            for (const path in this.$site.themeConfig.sidebar) {

                if (this.$page.path.indexOf(path) === 0) {
                    return this.$site.themeConfig.sidebar[path];
                }
            }

        }
    },


}

</script>

<style src="../less/theme.less" lang="less" ></style>


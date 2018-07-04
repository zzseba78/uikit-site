<template>
    <div>

        <Navbar/>

        <div class="tm-sidebar-left uk-visible@m">
            <h3>Documentation</h3>
            <DocumentationSidebar/>
        </div>

        <div class="tm-main uk-section uk-section-default">
            <div class="uk-container uk-container-small uk-position-relative">

                <nuxt-child ref="content"/>

                <div class="tm-sidebar-right uk-visible@l">
                    <div uk="sticky" offset="160">

                        <ul class="uk-nav uk-nav-default tm-nav uk-nav-parent-icon" uk="scrollspy-nav" closest="li" scroll="true" offset="100">
                            <li v-for="(id, subject) in ids">
                                <a :href="'#'+id">{{ subject }}</a>
                            </li>
                            <li class="uk-nav-divider"></li>
                            <li v-if="component">
                                <a :href="'/uikit/tests/' + component + '.html'" target="_blank">
                                    <span class="uk-margin-small-right" uk="icon" icon="push"></span>
                                    <span class="uk-text-middle">Open test</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/uikit/uikit/issues" target="_blank">
                                    <span class="uk-margin-small-right" uk="icon" icon="warning"></span>
                                    <span class="uk-text-middle">Report issue</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://gitter.im/uikit/uikit" target="_blank">
                                    <span class="uk-margin-small-right" uk="icon" icon="commenting"></span>
                                    <span class="uk-text-middle">Get help</span>
                                </a>
                            </li>
                            <li>
                                <a :href="repoLink" target="_blank">
                                    <span class="uk-margin-small-right" uk="icon" icon="pencil"></span>
                                    <span class="uk-text-middle">Edit this page</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>

import Vue from 'vue';
import App from '~/modules/doctools/app';


export default {

    data() {
        const DocApp = Vue.extend(App);
        const doc = new DocApp;
        return {ids:{}, doc, repoLink: '#'};
    },

    provide() {
        return {$doc: this.doc, $headlineCollector: this, $documentationLayout: this};
    },

    computed: {
        component() {
            return this.$route.path.includes('/component/') && this.$route.path.split('/').pop();
        }
    },

}
</script>
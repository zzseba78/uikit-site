<template>

    <div class="uk-offcanvas-content">

        <nuxt/>

        <div id="offcanvas" uk="offcanvas" mode="push" overlay="true">
            <div class="uk-offcanvas-bar">
                <div class="uk-panel">

                    <ul class="uk-nav uk-nav-default tm-nav">
                        <li class="uk-nav-header">General</li>
                        <li><a href="/">Home</a></li>
                        <li v-for="entry in $config.nav"><a :href="entry.link">{{entry.text}}</a></li>
                        <DocumentationSidebar class="uk-margin"/>

                    </ul>

                </div>
            </div>
        </div>

    </div>

</template>

<script>

    export default {
        // head() {
        //     return {
        //         link: [
        //             { rel: 'stylesheet', href: '/css/index.css' },
        //             { rel: 'favicon', href: 'favicon.ico' }
        //             ]
        //     }
        // }
    }

</script>

<style src="../less/theme.less" lang="less"></style>


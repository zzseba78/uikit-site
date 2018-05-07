<template>
    <div>

        <div class="uk-section-primary tm-section-texture uk-preserve-color">

            <Navbar class="uk-light" show-on-up="true" animation="uk-animation-slide-top" cls-inactive="uk-navbar-transparent" top="400"></Navbar>

            <div class="tm-sidebar-left uk-visible@m">
                <h3>Documentation</h3>
                <ul class="uk-nav uk-nav-default tm-nav" :class="{ 'uk-margin-top': index }" v-for="(group, index) in sidebar">
                    <li class="uk-nav-header">{{group.label}}</li>
                    <router-link tag="li" :to="`/${item}`" :key="item" v-for="item in group.items" exact><a>{{item.split('/').pop()}}</a></router-link>
                </ul>
            </div>

            <div class="tm-main uk-section uk-section-default">
                <div class="uk-container uk-container-small uk-position-relative">
                    <nuxt-child v-if="$route.params.page"/>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

import DocBase from '!babel-loader!yootheme-doctools/ui/app/DocBase';

import Vue from 'vue';
import docData from '../docs.json'

export default {

    provide() {
        const app = new Vue(DocBase);
        app.data = docData;
        return {$doc: app}
    },

    computed: {
        sidebar() {
            const menu = docData.menu;
            return menu;
        }
    }

}
</script>
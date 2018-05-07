<template>
    <div>
        <div class="uk-section-primary tm-section-texture uk-preserve-color">
            <Navbar class="uk-light" uk-sticky="media: 960;show-on-up: true;animation: uk-animation-slide-top;cls-inactive: uk-navbar-transparent;top: 400"></Navbar>
            <div class="tm-main uk-section uk-section-default">
                <div class="uk-container uk-container-small uk-position-relative">
                    <DocPage :moduleOverride="module" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import {DocPage, DocBase} from 'yootheme-doctools';
import Vue from 'vue';
import docData from '../docs.json'

export default {
    components: {
        DocPage
    },

    provide() {
        const app = new Vue(DocBase);
        app.data = docData;
        return {$doc: app}
    },

    computed: {
        module() {
            const mod = docData.resources[docData.rootPackage];
            return mod;
        }
    }

}
</script>
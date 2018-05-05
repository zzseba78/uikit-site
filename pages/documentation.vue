<template>
    <div>
        <div class="uk-section-primary tm-section-texture uk-preserve-color">
            <Navbar class="uk-light" uk-sticky="media: 960;show-on-up: true;animation: uk-animation-slide-top;cls-inactive: uk-navbar-transparent;top: 400"></Navbar>
            <div class="tm-main uk-section uk-section-default">
                <div class="uk-container uk-container-small uk-position-relative">
                    <DocPage/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import {DocPage, DocBase} from 'yootheme-doctools';
import Vue from 'vue';

export default {
    components: {
        DocPage
    },

    provide() {
        return {$doc: new Vue(DocBase)}
    }

}
</script>
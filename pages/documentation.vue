<template>
    <div>

        <div class="uk-section-primary tm-section-texture uk-preserve-color">

            <Navbar class="uk-light" show-on-up="true" animation="uk-animation-slide-top" cls-inactive="uk-navbar-transparent" top="400"/>

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


function getSideBar() {
    return import('../docs.json').then(docData => {
        return {sidebar: docData.menu};
    });
}

export default {

    asyncData: getSideBar,

    provide() {
        return {$doc: {}}
    },

    mounted() {
        console.log('documentation');
    }

}
</script>
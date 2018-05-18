<template>
    <div @click="click">
        <Markdown v-if="module.readme" :text="module.readme"/>
        <Assets v-if="module.assets" :assets="module.assets"/>
        <UIkitComponent v-if="module.component" :data="module"/>
    </div>
</template>

<script>

    import Page from '~/modules/doctools/page.vue';
    import HeadlineProvider from './HeadlineProvider';
    import CodeUtils from './CodeUtils';

    export default {
        extends: Page,
        mixins: [HeadlineProvider, CodeUtils]
    }

</script>
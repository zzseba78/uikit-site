<template>
    <div v-if="module" @click="click">
        <Markdown v-if="module.readme" :text="module.readme"/>
        <Assets v-if="module.assets" :assets="module.assets"/>
        <UIkitComponent v-if="module.component" :module-property="module"/>
    </div>
</template>

<script>

    import Page from '~/modules/doctools/page.vue';
    import HeadlineProvider from './HeadlineProvider';
    import CodeUtils from './CodeUtils';

    export default {
        extends: Page,
        mixins: [HeadlineProvider, CodeUtils],

    };

</script>
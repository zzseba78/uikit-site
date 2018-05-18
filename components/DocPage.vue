<template>
    <div v-if="module" @click="click">
        <Markdown v-if="module.readme" :text="module.readme"/>
        <Assets v-if="module.assets" :assets="module.assets"/>
        <UIkitComponent v-if="module.component" :data="module"/>
    </div>
</template>

<script>

    import Page from '~/modules/doctools/page.vue';
    import HeadlineProvider from './HeadlineProvider';
    import CodeUtils from './CodeUtils';
    import {forEach} from 'lodash-es';
    import {sluggify} from '~/markdown';


    export default {
        extends: Page,
        mixins: [HeadlineProvider, CodeUtils],

        created() {
            this.collectHeadlines();
        },

        methods: {
            getHeadLines() {

                const headlines = {};

                const modules = [this.module];
                forEach(this.module.assets, asset => {
                    modules.push(asset);
                });

                modules.forEach(module => {

                    forEach(module.headlines, cur => {
                        const slug = sluggify(cur);
                        headlines[cur] = slug;

                    });
                })

                return headlines;
            }
        }
    }

</script>
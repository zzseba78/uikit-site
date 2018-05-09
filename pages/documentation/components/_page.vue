
<template>
  <div >
    <div v-html="html"/>
    <component :is="module.type" :data="module"/>
  </div>
</template>

<script>

import DocPage from 'yootheme-doctools/ui/app/DocPage.vue';
import ExampleRunner from 'yootheme-doctools/ui/app/ExampleRunner.vue';
import UIkitRunner from '!babel-loader!yootheme-doctools/src/runnner/UIkitRunner';
import HeadlineProvider from '!babel-loader!~/components/HeadlineProvider';
import Vue from 'vue';


ExampleRunner.runners['uikit'] = new UIkitRunner;

function getPageData(context) {

  return Promise.all([
    import('~/docs.json'),
    import('yootheme-doctools/ui/app/utils/Markdown.vue'),
    import('marked')
    ])
  .then(([docData, Markdown, marked]) => {

    const res =  context.params.page;

    if (!res) {
      return {};
    }

    const module = docData.resources[res];

    const nodeGlobals = docData.globals;
    const types = docData.types;

    const resources = {};
    Object.keys(docData.resources).forEach(key => {
      const resource = docData.resources[key];
      resources[key] = {name: resource.name};
    });


      const data = {strippedModule:{...module, readme: null, script: null} , resources, types, nodeGlobals};

      const def = Markdown.default;
        const MDComp = Vue.extend(def);




    if (module) {

      const vm = new MDComp({propsData: {text: module.readme}});
      data.html = vm.html;
      return data;

    } else {

      return import(`!raw-loader!/Users/jms/uikit/docs/components/${res}.md`).then(readme => {
        data.strippedModule = {type: 'markdown', resource: res};

        const vm = new MDComp({propsData: {text: readme}});
        data.html = vm.html;
        return data;
      });

    }

  });
}

export default {

  asyncData: getPageData,

  extends: DocPage,

  mixins: [HeadlineProvider],

  provide() {
    return {$doc: this};
  },

  computed: {
    module() {
      return this.strippedModule;
    },
    uriPrefix() {
      return '/documentation/'
    }
  }
}

</script>
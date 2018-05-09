
<template>
  <div >
    <p>{{module.description}}</p>
    <Markdown :text="module.readme"/>
    <component :is="module.type" :data="module"/>
  </div>
</template>

<script>

import DocPage from 'yootheme-doctools/ui/app/DocPage.vue';
import ExampleRunner from 'yootheme-doctools/ui/app/ExampleRunner.vue';
import UIkitRunner from '!babel-loader!yootheme-doctools/src/runnner/UIkitRunner';
import HeadlineProvider from '!babel-loader!~/components/HeadlineProvider';

import Code from 'vue-highlight-component';
ExampleRunner.components = {
  Code
}

ExampleRunner.runners['uikit'] = new UIkitRunner;

function getPageData(context) {

  return import('~/docs.json').then(docData => {

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

    const data = {strippedModule: module, resources, types, nodeGlobals};

  if (module) {

    return data;

  } else {

    return import(`!raw-loader!/Users/jms/uikit/docs/components/${res}.md`).then(readme => {
      data.strippedModule = {readme, type: 'markdown', resource: res};
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
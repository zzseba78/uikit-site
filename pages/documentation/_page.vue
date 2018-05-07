
<template>
  <div>
    <!-- <h1>{{module.name}}</h1> -->
    <p>{{module.description}}</p>
    <Markdown :text="module.readme"/>
    <component :is="module.type" :data="module"/>
    <!-- <Code language="js">{{module.script}}</Code> -->
  </div>
</template>

<script>

import DocPage from 'yootheme-doctools/ui/app/DocPage.vue';
import ExampleRunner from 'yootheme-doctools/ui/app/ExampleRunner.vue';
import UIkitRunner from '!babel-loader!yootheme-doctools/src/runnner/UIkitRunner';

import Code from 'vue-highlight-component';
ExampleRunner.components = {
  Code
}

ExampleRunner.runners['uikit'] = new UIkitRunner;

function getPageData(context) {
  return import('../../docs.json').then(docData => {

    const res = 'documentation/' + context.params.page;

    const resources = {};
    Object.keys(docData.resources).forEach(key => {
      const resource = docData.resources[key];
      resources[key] = {name: resource.name};
    });

    const module = docData.resources[res];
    const nodeGlobals = docData.globals;
    const types = docData.types;

    return {strippedModule: module, resources, types, nodeGlobals};

  });
}

export default {
  asyncData: getPageData,
  extends: DocPage,
  provide() {
    return {$doc: this};
  },
  computed: {
    module() {
      return this.strippedModule;
    }
  }
}

</script>

<style>

</style>

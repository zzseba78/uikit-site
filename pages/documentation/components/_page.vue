
<template>
  <div>
    <div v-html="html"/>
    <UIkitComponent v-if="module" :data="module"/>
  </div>
</template>

<script>

// import DocPage from 'yootheme-doctools/ui/app/DocPage.vue';
// import ExampleRunner from 'yootheme-doctools/ui/app/ExampleRunner.vue';
// import UIkitRunner from '!babel-loader!yootheme-doctools/src/runnner/UIkitRunner';
import HeadlineProvider from '!babel-loader!~/components/HeadlineProvider';
import UIkitComponent from 'yootheme-doctools/ui/app/types/Component.vue';
import Vue from 'vue';

import index from '~/docs/_menu.json';
import {swap} from '~/utils';

const map = swap(index.components.items);

function getPageData(context) {

  const resource = map[context.params.page];

  // debugger;

  return Promise.all([
    import(`~/docs/${resource}.json`),
    import('~/asyncLoaders/Markdown.js'),
    import('marked'),
    import('!babel-loader!yootheme-doctools/src/runnner/UIkitRunner'),
    import('yootheme-doctools/ui/app/ExampleRunner.vue')
    ])
  .then(([module, Markdown, marked, UIkitRunner, ExampleRunner]) => {

    const res =  context.params.page;

    ExampleRunner.default.runners['uikit'] = new UIkitRunner.default;

    if (!res) {
      return {};
    }

    // const module = docData.resources[res];

    const nodeGlobals = docData.globals;
    const types = docData.types;

    const resources = {};
    Object.keys(docData.resources).forEach(key => {
      const resource = docData.resources[key];
      resources[key] = {name: resource.name};
    });

      const data = { resources, types, nodeGlobals};

      const def = Markdown.default;
        const MDComp = Vue.extend(def);

    if (module) {

      data.strippedModule = {...module, readme: null, script: null};
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

  components: {
    UIkitComponent
  },

  asyncData: getPageData,

  // extends: DocPage,

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
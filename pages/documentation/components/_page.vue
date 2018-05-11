
<template>
  <div>
    <div v-html="html"/>
    <UIkitComponent v-if="module && module.component" :data="module"/>
  </div>
</template>

<script>

// import DocPage from 'yootheme-doctools/ui/app/DocPage.vue';
// import ExampleRunner from 'yootheme-doctools/ui/app/ExampleRunner.vue';
// import UIkitRunner from '!babel-loader!yootheme-doctools/src/runnner/UIkitRunner';
import HeadlineProvider from '!babel-loader!~/components/HeadlineProvider';
import UIkitComponent from 'yootheme-doctools/ui/app/types/Component.vue';
import Vue from 'vue';
import find from 'lodash/find';

// import index from '~/docs/_menu.json';
import {swap} from '~/utils';

// const map = swap(index.components.items);

function getPageData(context) {

  // const resource = map[context.params.page];

  // debugger;

  return Promise.all([
    import(`~/docs.json`),
    import('~/asyncLoaders/Markdown.js'),
    import('!babel-loader!yootheme-doctools/src/runnner/UIkitRunner'),
    import('yootheme-doctools/ui/app/ExampleRunner.vue')
    ])
  .then(([docData, Markdown, UIkitRunner, ExampleRunner]) => {


    const res =  context.params.page;

    if (!context.params.page) {
      console.log('miss');

      return {html:''};
    }

    const index = swap(docData.menu.components.items);

    const module = docData.resources[index[context.params.page]];

    const nodeGlobals = docData.nodeGlobals;
    const types = docData.types;

    const resources = {};
      Object.keys(docData.resources).forEach(key => {
      const resource = docData.resources[key];
      resources[key] = {name: resource.name};
    });

      const data = { resources, types, nodeGlobals};

      const def = Markdown.default;

    if (module.assets && module.assets.readme) {

      const readme = docData.resources[module.assets.readme];

      data.strippedModule = module;
      data.html = Markdown.default(readme.readme);

      return data;

    } else if (module.isAsset) {

      data.strippedModule = module;
      data.html = Markdown.default(module.readme);

    } else {

      return {html: ''};
      // debugger;

      // return import(`!raw-loader!/Users/jms/uikit/docs/components/${res}.md`).then(readme => {
      //   data.strippedModule = {type: 'markdown', resource: res};

      //   data.html = Markdown.default(readme);
      //   return data;
      // });

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

<template>
<div>
  <!-- <h1>{{module.name}}</h1> -->
  <p>{{module.description}}</p>
  <Markdown :text="module.readme"/>
  <UIkitComponent v-if="module.component" :data="module"/>
  <Module v-else/>
  <Code language="js">{{module.script}}</Code>
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

export default {
  extends: DocPage,
  computed: {
    module() {
      const res = 'documentation/' + this.$route.params.page;
      return this.$doc.resources[res];
    }
  }
}

</script>

<style>

</style>

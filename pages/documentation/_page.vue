
<template>
  <div v-html="html">
  </div>
</template>

<script>

import HeadlineProvider from '!babel-loader!~/components/HeadlineProvider';
import Vue from 'vue';
import {swap} from '~/utils';

function getPageData(context) {

    return context.params.page && Promise.all([
      import(`~/docs/docs.intro.${context.params.page}.md.json`),
      import(`~/docs/_index.json`),
      import('~/asyncLoaders/Markdown.js'),
      import('uikit/package.json')])
      .then(([readme, resources, Markdown, pack]) => {


        readme = readme.readme
        .replace(/(\w*).md/g, function(file ,name ) {
            // debugger;
            const resource = swap(resources)[name];
            if(resource) {
              // console.log('link to resource');
              return name;
            } else {
              return name
            }
        })
        .replace(/\[uikit-version\]/g, pack.version);

        const def = Markdown.default;
        const MDComp = Vue.extend(def);
        const vm = new MDComp({propsData: {text: readme}});

        const html = vm.html;

        return {html}
    });

}

export default {

  asyncData: getPageData,

  mixins: [HeadlineProvider],

}

</script>
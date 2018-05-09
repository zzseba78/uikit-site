
<template>
  <div v-html="html">
  </div>
</template>

<script>

import HeadlineProvider from '!babel-loader!~/components/HeadlineProvider';
import Vue from 'vue';

function getPageData(context) {

    return Promise.all([
      import(`!raw-loader!/Users/jms/uikit/docs/intro/${context.params.page}.md`),
      import(`~/docs.json`),
      import('yootheme-doctools/ui/app/utils/Markdown.vue'),
      import('uikit/package.json')])
      .then(([readme, docs, Markdown, pack]) => {

        readme = readme
        .replace(/(\w*).md/g, function(file ,name ) {
            const resource = docs.resources[name];
            if(resource) {
              // debugger;
              console.log('link to resource');
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
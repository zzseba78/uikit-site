
<template>
  <div>
    <Markdown :text="readme"/>
  </div>
</template>

<script>

import Markdown from 'yootheme-doctools/ui/app/utils/Markdown.vue';
import pack from 'uikit/package.json'

function getPageData(context) {
    return import(`!raw-loader!/Users/jms/uikit/docs/intro/${context.params.page}.md`).then(readme => {
      return import(`../../docs.json`).then(docs => {

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

         return {readme};
      })

    });

}

export default {
  components: {
    Markdown
  },
  asyncData: getPageData,
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
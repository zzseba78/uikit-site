
<template>
  <div v-html="html">
  </div>
</template>

<script>

import HeadlineProvider from '!babel-loader!~/components/HeadlineProvider';
import Vue from 'vue';
import {swap} from '~/utils';

function getPageData(context) {

    function getResName(name) {
      return `docs.intro.${name}.md`;
    }
    return Promise.all([
      import(`~/docs.json`),
      import('~/asyncLoaders/Markdown.js'),
      import('uikit/package.json')])
      .then(([docs, Markdown, pack]) => {

        // debugger
        const resource = docs.resources[getResName(context.params.page)];

        const readme = resource.readme
        .replace(/(\w*).md/g, function(file ,name ) {
            // debugger;
            const resource = docs.resources[getResName(name)];
            if(resource) {
              // console.log('link to resource');
              return name;
            } else {
              return name
            }
        })
        .replace(/\[uikit-version\]/g, pack.version);


        const html = Markdown.default(readme);

        // const html = vm.html || '';

        return {html}
    });

}

export default {

  asyncData: getPageData,

  mixins: [HeadlineProvider],

}

</script>
const components = require('./components.json');
const menu = require('./intro.json');
// const {swap} = require('./utils');

function swap(json) {
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

export default {

    routes: {
      download: '/download'
    },

    nav: [
      { text: 'Pro', link: '/pro'},
      { text: 'Documentation', link: '/documentation/introduction' },
      { text: 'Changelog', link: '/changelog' }
    ],

    sidebar: [
      {
        ...menu.introduction,
        items: swap(menu.introduction.items)
      },
      {
          label: 'Components',
          path: 'component',
          items: components
      }
  ]
}
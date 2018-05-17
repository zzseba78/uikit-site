const components = require('./components.json');
const menu = require('./intro.json');
const _ = require('lodash');

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
        items: _.invert(menu.introduction.items)
      },
      {
          label: 'Components',
          path: 'component',
          items: components
      }
  ]
}
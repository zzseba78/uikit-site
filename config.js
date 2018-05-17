const components = require('./components.json');
const menu = require('./intro.json');


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
        items: (menu.introduction.items)
      },
      {
          label: 'Components',
          path: 'component',
          items: components
      }
  ]
}
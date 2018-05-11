const components = require('./components.json');
const menu = require('./docs/_menu.json');

module.exports = {

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
          items: require('./utils').swap(menu.introduction.items)
        },
        {
            path: 'components',
            label: 'Components',
            items: components
        }
    ]
  }
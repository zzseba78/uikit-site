import components from './.doctools/_export/_components.json';
import menu from'./intro.json';
import {invert} from 'lodash-es';

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
        items: invert(menu.introduction.items)
      },
      {
          label: 'Components',
          path: 'component',
          items: components
      }
  ]
}
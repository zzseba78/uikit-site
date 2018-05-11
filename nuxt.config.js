// const {DoctoolsWebpack} = require('yootheme-doctools');

const fs = require('fs');

//generate a list of all components
const allComponents = fs.readdirSync('/Users/jms/uikit/docs/components')
                .filter(name => ~name.indexOf('.md'))
                .map(name => name.replace('.md', ''))
                .reduce((prev, curr) => {
                  const interlacedCamel = curr.replace(/(-[a-z])/, res => " " + res[1].toUpperCase());
                  const interlacesPascal = interlacedCamel.substr(0, 1).toUpperCase() + interlacedCamel.substr(1);
                  prev[curr] = interlacesPascal;  //fs.readFileSync(`/Users/jms/uikit/docs/components/${curr}.md`, 'utf8');
                  return prev;
                }, {});

                // debugger
fs.writeFileSync('components.json', JSON.stringify(allComponents, null, 2));

const {sidebar} = require('./config');

const routes = sidebar.reduce((prev, val) => {
    return prev.concat(Object.keys(val.items).map(route => '/documentation/' + (val.path && (val.path + '/' + route) || route )));
}, []);



module.exports = {

  build: {
    extend(config, context) {

      if (context.isClient) {
        config.externals = {
          'uikit': 'UIkit'
        }
      }

    },
    extractCSS: true,

    analyze: true,

    vendor: [
      'yootheme-doctools',
      // 'lodash-es'
    ]

  },

  plugins: [
    '~/plugins/boot'
  ],

  // render: {
  //   static:
  // },

  generate: {
    routes,
    // dir: '/Applications/MAMP/htdocs/dist',

  },

  head: {
      script: [
        { src: '/uikit.min.js', type: 'text/javascript', charset: 'utf-8'},
        { src: '/uikit-icons.min.js', type: 'text/javascript', charset: 'utf-8'}
      ]
    },

  css: [
    '~/less/theme.less'
  ]


}
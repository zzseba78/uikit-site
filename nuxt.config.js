// const {DoctoolsWebpack} = require('yootheme-doctools');

const fs = require('fs');
const _ = require('lodash');

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

const sidebar = require('./docs.json').menu;

const routes = _.reduce(sidebar, (prev, val) => {
    return prev.concat(Object.values(val.items).map(route => '/documentation/' + (val.path && (val.path + '/' + route) || route )));
}, []);


module.exports = {

  build: {
    extend(config, context) {

      if (context.isClient) {

        config.externals = {
          'uikit': 'UIkit'
        }

        if (!context.isDev) {
          config.externals = (context, request, callback) => {
            // console.log(request);
            if(
            [/yootheme-doctools.*(vue|lodash.js|prismjs).*/].some(matcher => matcher.exec(request)) ||
              ['uikit-icons', 'docs.json', 'highlight.js', 'marked'].some(name => request.includes(name)) ||
              ['uikit'].some(name => name === request)) {
                console.log('skip dep:', request);
              return callback(null, 'null');
            }

            callback()

          }
        }
      }

    },
    extractCSS: true,

    analyze: true,

    vendor: [
      'yootheme-doctools',
      // 'vue'
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
    // routes: ['/documentation/components/accordion', '/documentation/introduction']
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
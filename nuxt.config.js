const {DoctoolsWebpack} = require('yootheme-doctools');
const routes = Object.keys(require('./docs.json').resources).map(res => `/${res}`);

const fs = require('fs');

const allComponents = fs.readdirSync('/Users/jms/uikit/docs/components')
                .filter(name => ~name.indexOf('.md'))
                .map(name => name.replace('.md', ''))
                .reduce((prev, curr) => {
                  prev[curr] = fs.readFileSync(`/Users/jms/uikit/docs/components/${curr}.md`, 'utf8');
                  return prev;
                }, {});

                // debugger
fs.writeFileSync('components.json', JSON.stringify(allComponents, null, 2));


module.exports = {

  build: {

    vendor: ['uikit'],

    plugins: [
      // new DoctoolsWebpack()
    ]
  },
  plugins: [
    '~/plugins/uikit.js'
  ],

  modules:[
    '~/modules/navigation.js'
  ],

  generate: {
    routes
    // dir: '/Applications/MAMP/htdocs/dist'
  },

  allComponents

}
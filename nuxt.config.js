const {DoctoolsWebpack} = require('yootheme-doctools');
const routes = Object.keys(require('./docs.json').resources).map(res => `/${res}`);
// debugger;
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

  generate: {
    routes
    // dir: '/Applications/MAMP/htdocs/dist'
  }

}
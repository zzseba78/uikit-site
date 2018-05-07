const {DoctoolsWebpack} = require('yootheme-doctools');

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
    dir: '/Applications/MAMP/htdocs/dist'
  }

}
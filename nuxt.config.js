const {DoctoolsWebpack} = require('yootheme-doctools');

module.exports = {

  build: {
    plugins: [
      // new DoctoolsWebpack()
    ]
  },
  plugins: [
    '~/plugins/Doctools.js'
  ],

  modules: [
      '~/modules/Doctools.js'
  ]
}
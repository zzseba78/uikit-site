const components = require('./components.json');

const intro = {

    "Introduction": "introduction",
    "Installation": "installation",
    "Less": "less",
    "Sass": "sass",
    "JavaScript": "javascript",
    "Webpack": "webpack",
    "Custom icons": "custom-icons",
    "Avoiding conflicts": "avoiding-conflicts",
    "RTL support": "rtl",
    "Migration": "migration"

};

function swap(json) {
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

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
            label: 'Getting Started',
            items: swap(intro)
        },
        {
            path: 'components',
            label: 'Components',
            items: components
        }
    ]
  }
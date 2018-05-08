


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


export default {

      routes: {
        download: '/download'
      },
      nav: [
        { text: 'Pro', link: '/pro'},
        { text: 'Documentation', link: '/documentation/introduction' },
        { text: 'Changelog', link: '/changelog' }
      ],
      intro: swap(intro)
  }



const gettingStarted = {

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

const sidebar = [
  {
    title: "Introduction",
    children: Object.keys(gettingStarted).map(name => {
      const value = gettingStarted[name];
        return [`/doc/${value}.md`, name];
    })
  },
  ...require('../examples/sidebar.json')
];

module.exports = {

    configureWebpack(config, isServer) {

        config.module.rules.push({
            test: /\.raw$/,
            use: 'raw-loader'
        });

    },

    dest: '/Applications/MAMP/htdocs/dist',

    title: 'UIkit',
    description: 'UIkit site',
    editLinks: false,
    themeConfig: {
      repo: 'uikit/uikit',
      routes: {
        download: '/download.html'
      },
      nav: [
        { text: 'pro', link: '/pro.html', comp: true},
        { text: 'documentation', link: '/doc/' },
        { text: 'changelog', link: '/changelog.html' },
      ],
      sidebar: {
        '/api/': sidebar,
        '/doc/': sidebar
      },

    },
    markdown: {
        config: md => {
          md.use(require('markdown-it-highlightjs'))
        }
      }
  }
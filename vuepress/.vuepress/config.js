

module.exports = {

    configureWebpack(config, isServer) {

        config.module.rules.push({
            test: /\.raw$/,
            use: 'raw-loader'
        });

    },
    title: 'UIkit',
    description: 'UIkit site',
    editLinks: false,

    themeConfig: {
      repo: 'uikit/uikit',
      nav: [
        { text: 'pro', link: '/Pro', comp: true},
        { text: 'documentation', link: '/examples/' },
        { text: 'changelog', link: '/Changelog' },
      ],
      sidebar: {
        '/examples/': require('../examples/sidebar.json')
      },

    },
    markdown: {
        config: md => {
          md.use(require('markdown-it-highlightjs'))
        }
      }
  }
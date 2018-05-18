import doctoolsConf from './doctools.nuxt.config';

export default {

	build: {

		extend(config, context) {

			if (context.isClient) {
				config.externals = {
					'uikit': 'UIkit'
				}
			}

		},

		// cache: true,

		// parallel: true,

		extractCSS: true,

		analyze: true

	},

	loading: {
		color: 'white'
	},

	plugins: [
		'~/plugins/boot'
	],

	modules: [
		['~/modules/doctools', doctoolsConf],
		['@nuxtjs/google-analytics', { id: 'UA-42150424-1' }]
	],

	// render: {
	// 	bundleRenderer: {
	// 	  shouldPreload: (file, type) => {
	// 		// console.log('preload?:', file);
	// 		return ['script', 'style', 'font'].includes(type)
	// 	  }
	// 	}
	//   },

	head: {
		title: 'UIkit',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content:'width=device-width, initial-scale=1'},
			{name: 'twitter:card', content:'summary_large_image'},
			{name: 'twitter:site', content:'@getuikit'},
			{name: 'twitter:image', content:'https://getuikit.com/images/uikit-meta.png'},
			{name: 'og:locale', content:'en_GB'},
			{name: 'og:type', content:'website'},
			{name: 'og:title', content:'UIkit'},
			{name: 'og:description', content:'UIkit, a lightweight and modular front-end framework for developing fast and powerful web interfaces.'},
			{name: 'og:url', content:'https://getuikit.com/'},
			{name: 'og:site_name', content:'UIkit'},
			{name: 'og:image', content:'https://getuikit.com/images/uikit-meta.png'}
		],
		link: [
			{rel: 'preload', type: 'font/woff2', as: 'font', crossorigin: '', href: '/fonts/ProximaNova-Reg-webfont.woff2'},
			{rel: 'preload', type: 'font/woff2', as: 'font', crossorigin: '', href: '/fonts/ProximaNova-Light-webfont.woff2'},
			{rel: 'shortcut icon', type: 'image/png', href: '/images/favicon.png'},
			{rel: 'apple-touch-icon-precomposed', type: 'image/png', href: '/images/apple-touch-icon.png'}
		],
		script: [
			{src: '/js/uikit.min.js', defer: true},
			{src: '/js/uikit-icons.min.js', defer: true}
		]
	},

	// css: [
	// 	'~/less/theme.less'
	// ]

}
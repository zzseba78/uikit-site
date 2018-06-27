import doctoolsConf from './doctools.nuxt.config';

const empty = require.resolve(__dirname + '/empty.js');
export default {

	build: {

		extend(config, context) {

			config.module.rules[0].options.compilerOptions = {
				preserveWhitespace: false
			}

			if (context.isClient) {

				config.resolve.alias['got'] = empty;
				config.externals = {
					'uikit': 'UIkit',
					'uikit-util': 'UIkit.util',
				}

			} else {

				config.externals = [];
				config.resolve.alias['uikit-util'] = empty;
				config.resolve.alias['uikit$'] = empty;

			}

		},

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
			{src: '/uikit/dist/js/uikit.min.js'},
			{src: '/uikit/dist/js/uikit-icons.min.js', defer: ''}
		]
	},

	// css: [
	// 	'~/less/theme.less'
	// ]

}
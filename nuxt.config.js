import doctoolsConf from './doctools.nuxt.config';

export default {

	build: {

		extend(config, context) {

			config.module.rules[0].options.compilerOptions = {
				preserveWhitespace: false
			}
			if (context.isClient) {
				config.externals = {
					'uikit': 'UIkit'
				}
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
		'@nuxtjs/pwa',
		['@nuxtjs/google-analytics', { id: 'UA-42150424-1' }]
	],

	manifest: {
		name: 'UIkit',
		lang: 'de'
	},

	workbox: {
		runtimeCaching: [
		{
		  // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
		  urlPattern: '/.*',
		  // Defaults to `networkFirst` if omitted
		  handler: 'cacheFirst',
		  // Defaults to `GET` if omitted
		  method: 'GET'
		}
	  ]
  },

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
			{src: '/uikit/dist/js/uikit.min.js', defer: true},
			{src: '/uikit/dist/js/uikit-icons.min.js', defer: true}
		]
	},

	// css: [
	// 	'~/less/theme.less'
	// ]

}
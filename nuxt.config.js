import UIkitRunner from 'yootheme-doctools/src/runnner/UIkitRunner.min.js';
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

		cache: true,
		parallel: true,

		extractCSS: true

	},

	// loading: {
	// 	color: 'white'
	// },

	plugins: [
		'~/plugins/boot'
	],

	modules: [
		// ['~/modules/test']
		['~/modules/doctools', doctoolsConf]
		// ['@nuxtjs/google-analytics', { id: 'UA-42150424-1' }],
	],

	head: {
		meta: [

		],
		link: [
			{ rel: 'shortcut icon', type: 'image/png', href: '/images/favicon.png' },
			{ rel: 'apple-touch-icon-precomposed', type: 'image/png', href: '/images/apple-touch-icon.png' }
		],
		script: [
			{ src: '/js/uikit.min.js', type: 'text/javascript', charset: 'utf-8' },
			{ src: '/js/uikit-icons.min.js', type: 'text/javascript', charset: 'utf-8' }
		]
	},

	css: [
		'~/less/theme.less'
	]

}
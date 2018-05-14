module.exports = {

	build: {
    extend(config, context) {

			if (context.isClient) {

				config.externals = {
					'uikit': 'UIkit'
				}

			}

		},

		analyze: true,

	},

	plugins: [

		'~/plugins/boot'

	],

	head: {

		script: [

			{ src: '/uikit.min.js', type: 'text/javascript', charset: 'utf-8' },
			{ src: '/uikit-icons.min.js', type: 'text/javascript', charset: 'utf-8' }

		]

	},

	css: [

		'~/less/theme.less'

	]

}
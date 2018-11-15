import { css } from 'docz-plugin-css'
import merge from 'webpack-merge'

export default {
	title: 'My Cool Project',
	description: 'This is my awesome documentation',
	files: 'src/**/*.{md,markdown,mdx}',

	modifyBundlerConfig: config =>
		merge(config, {
			resolve: {
				alias: {
					'@': `${__dirname}/src`
				}
			}
		}),
	plugins: [
		css({
			preprocessor: 'postcss',
			cssmodules: true,
			loaderOpts: {
				/* whatever your preprocessor loader accept */
			}
		})
	]
}

import { css } from 'docz-plugin-css'
import merge from 'webpack-merge'
import path from 'path'
import postcssConfig from './postcss.config'

export default {
	title: 'My Cool Project',
	description: 'This is my awesome documentation',
	files: 'src/**/*.{md,markdown,mdx}',

	modifyBundlerConfig: config =>
		merge(config, {
			module: {
				rules: [
					{
						test: /\.css$/,
						include: path.resolve(__dirname, '/src/'),
						use: [
							'style-loader',
							{ loader: 'css-loader', options: { importLoaders: 1 } },
							'postcss-loader'
						]
					}
				]
			},
			resolve: {
				alias: {
					'@': `${__dirname}/src`
				}
			}
		}),
	plugins: [
		css({
			preprocessor: 'postcss',
			loaderOpts: postcssConfig
		})
	]
}

const path = require('path')

const config = {
	module: {
		rules: [
			{
				test: /\.css$/,
				include: path.resolve(__dirname, '../'),
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'postcss-loader'
				]
			},
			{
				test: /\.eot(\?v=\d+.\d+.\d+)?$/,
				use: 'file-loader?&name=fonts/[name].[ext]'
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use:
					'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
			},
			{
				test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
				use:
					'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
			},
			{
				test: /\.(jpg|png|jpeg)$/,
				loader: 'file',
				include: path.resolve(__dirname, '../static/')
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: require.resolve('svg-sprite-loader')
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src')
		}
	}
}

module.exports = config

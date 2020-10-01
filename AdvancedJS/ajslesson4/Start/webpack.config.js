
const minify = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = (env = { mode: 'development' }) => {
	const isProduction = env.mode === 'production';
	return {
		mode: env.mode,
		entry: "./src/index.js",
		output: {
			path: __dirname + "/dist",
			filename: "bundle.js"
		},
		optimization: {
			minimizer: [
				new minify({})
			],
		},

		plugins: [new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new MiniCssExtractPlugin(),
		],

		devServer: {
			contentBase: path.join(__dirname, 'src'),
			compress: true,
			port: 9000
		},
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				},
				{
					test: /\.css$/,
					use: ['MiniCssExtractPlugin.loader', 'css-loader']
				},
				{
					test: /\.s[ac]ss$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				},
			]
		}
	}
}
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry:  __dirname + "/src/js/main.js",
	output: {
		path: __dirname,
		filename: "./static/js/demo.min.js"
	},
	devtool: 'eval',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: ['babel-loader'],
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'})
			},
			{
	　　　　　　test: /\.(png|jpg)$/,
	　　　　　　loader: 'url-loader?limit=8192&name=/static/devbind/img/[hash:8].[name].[ext]'
	　　　　　}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false,
			},
			compress: {
				warnings: false
			}
		}),
		new ExtractTextPlugin('./static/css/demo.min.css'),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: "./",//本地服务器所加载的页面所在的目录
		inline: true,//实时刷新,
		hot: true,
		port: 9093
	}
}

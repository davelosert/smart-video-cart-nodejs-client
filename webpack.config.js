const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/web-client/index.ts",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		loaders: [
			{test: /\.ts?$/, loader: "ts-loader"}
		]
	},
	devServer: {
		port: 9090,
		host: 'localhost',
		historyApiFallback: true,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': "true"
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/web-client/index.html',
			chunksSortMode: 'dependency',
			inject: 'head'
		})
	]
};
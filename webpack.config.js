var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var frame = '/redux';
var APP_DIR = path.resolve(__dirname, 'ux/public'+frame);
var BUILD_DIR = path.resolve(__dirname, 'ux/public/build'+frame);

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(APP_DIR , '/index.html'),
  filename: 'index.html',
  inject: 'body'
});

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		 {
		 	test: /\.(js|jsx)$/,
		 	include: APP_DIR,
		 	loader: 'babel-loader'
		 }
		]
	},
	plugins: [HTMLWebpackPluginConfig]
};

module.exports = config;




/* setup from tutorial 
https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
*/

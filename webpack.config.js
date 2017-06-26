var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'ux/public/flux');
var BUILD_DIR = path.resolve(__dirname, 'ux/public/build/flux');

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
	}
};

module.exports = config;




/* setup from tutorial 
https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
*/

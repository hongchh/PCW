var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = [path.resolve(__dirname, './dev-client')].concat(baseWebpackConfig.entry[name])
})

var devWebpackConfig = {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
}

// 将各应用编译后的js inject到其相应的HTML模板文件
for (var i = 0; i < config.entry.length; ++i) {
  devWebpackConfig.plugins.push(new HtmlWebpackPlugin({
    filename: config.entry[i].appName + '.html',
    template: config.entry[i].htmlTemplate,
    chunks: [config.entry[i].appName],
    inject: true
  }))
}

module.exports = merge(baseWebpackConfig,  devWebpackConfig)

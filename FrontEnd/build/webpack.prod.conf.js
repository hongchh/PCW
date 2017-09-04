var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

var env = config.build.env
var prodWebpackConfig = {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // 配置中所指明的公共库都抽取到vendor
        if (module.resource && /\.js$/.test(module.resource)) {
          for (let i = 0; i < config.build.commonLibs.length; ++i) {
            if (module.resource.indexOf(path.join(__dirname, '../../node_modules/', config.build.commonLibs[i] + '/')) === 0) {
              return true
            }
          }
        }
        return false
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../data'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
}

// 提取UI库
for (let i = 0; i < config.entry.length; ++i) {
  if (!config.entry[i].uiLib) continue
  let chunkPath = path.join(__dirname, '../../node_modules/', config.entry[i].uiLib + '/')
  prodWebpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: config.entry[i].uiLib,
    chunks: [config.entry[i].appName], // 指明从应用对应的chunk里面提取UI库
    minChunks: function (module, count) {
      return (
        module.resource && /\.js$/.test(module.resource) &&
        module.resource.indexOf(chunkPath) === 0
      )
    }
  }))
}

// 将提取后的manifest、vendor、UI库inject到相应的HTML文件中
for (let i = 0; i < config.entry.length; ++i) {
  prodWebpackConfig.plugins.push(new HtmlWebpackPlugin({
    filename: config.entry[i].appName + '.html',
    template: config.entry[i].htmlTemplate,
    chunks: ['manifest', 'vendor', config.entry[i].uiLib, config.entry[i].appName],
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
    chunksSortMode: 'dependency'
  }))
}

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  prodWebpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  prodWebpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = merge(baseWebpackConfig, prodWebpackConfig)

// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../../Server/public'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    // 所有应用的公共库
    commonLibs: ['vue', 'axios', 'vue-router']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'data',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },
  // 应用入口描述
  // appName: 应用名
  // entryPath: 入口文件
  // htmlTemplate: 用于最后inject的HTML模板
  // uiLib: 应用使用的UI库，配置后可以单独抽取UI库
  entry: [{
    appName: 'main',
    entryPath: path.join(__dirname, '../src/main/index.js'),
    htmlTemplate: path.join(__dirname, '../src/main/index.html'),
    uiLib: 'element-ui'
  }, {
    appName: 'management',
    entryPath: path.join(__dirname, '../src/management/index.js'),
    htmlTemplate: path.join(__dirname, '../src/management/index.html'),
    uiLib: 'vue-material'
  }]
}

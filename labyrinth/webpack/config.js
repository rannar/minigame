// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, '../build/web/www/index.html'),
    assetsRoot: path.resolve(__dirname, '../build/web/www'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true
  },
  dev: {
    assetsRoot: path.resolve(__dirname, '../build/web/www'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    port: 6060,
    proxyTable: {}
  }
}

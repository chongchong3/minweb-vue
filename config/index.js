
'use strict'
// Template version: 1.1.3
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  build: {
    testEnv: require('./test.env'),
    simEnv: require('./sim.env'),
    prodEnv: require('./prod.env'),
    envEnv: require('./env.env'),
    // env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 9696,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
    	 '/designer/getDesignerByUid': {
        // target: 'http://120.27.215.62:8420/',
        target: 'http://192.168.14.175:8420/', //赵玉
        changeOrigin: true,
      
      },
      '/minisite/getDesignerCase': {
        // target: 'http://120.27.215.62:8420/',
        target: 'http://192.168.14.175:8420/', //赵玉
        changeOrigin: true,
      
      },
      '/designer/listDesigners': {
        // target: 'http://120.27.215.62:8420/',
        target: 'http://192.168.14.175:8420/', //赵玉
        changeOrigin: true,
      
      },
      '/designerCase/showAllWithOutDelete': {
        target: 'http://192.168.14.175:8420/',
        changeOrigin: true,
      
      },
      '/sendMessage': {
        target: 'http://192.168.14.175:8420/',
        changeOrigin: true,
      
      },
      '/login/miniSiteRegister': {
        target: 'http://192.168.14.175:8420/',
        changeOrigin: true,
      
      },
      '/Designer/miniSiteAppoints': {
        target: 'http://192.168.14.175:8420/',
        changeOrigin: true,
      
      }, //
      '/login/miniSiteCheckLoginStatus': {
        target: 'http://192.168.14.175:8420/',
        changeOrigin: true,
      
      },
      '/minisite/getDesignerCaseDetail': {
        target: 'http://192.168.14.175:8420/',
        changeOrigin: true,
      
      },
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}

// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
        .use('px2rem')
          .loader('px2rem-loader')
          .options({
            remUnit: 75
          })
  },
  //配置开发服务中的代理
  devServer: {
    proxy: {
      // 请求地址以/api开头
      '/api': {
        target:'http://m.you.163.com', // 转发的目录地址
        changeOrigin: true, // 支持跨域
        ws: true,
         pathRewrite: { // 重写路径: 让代理服务在转发请求, 对路径进行特定修改
           '^/api': '', // 去掉路径中的/api
         },
      },
      
    },
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, 
  }
//   devServer: {

//     // Paths
//     assetsSubDirectory: 'static',
//     assetsPublicPath: '/',
//     proxyTable: {
//       '/api': { // 匹配所有以 '/api'开头的请求路径
//         target: 'http://m.you.163.com', // 代理目标的基础路径
//         changeOrigin: true, // 支持跨域
//         pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
//           '^/api': ''
//         }
//       }
//     },
//     // Various Dev Server settings
//     host: 'localhost', // can be overwritten by process.env.HOST
//     port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
//     autoOpenBrowser: true,
//     errorOverlay: true,
//     notifyOnErrors: true,
//     poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

//     // Use Eslint Loader?
//     // If true, your code will be linted during bundling and
//     // linting errors and warnings will be shown in the console.
//     useEslint: true,
//     // If true, eslint errors and warnings will also be shown in the error overlay
//     // in the browser.
//     showEslintErrorsInOverlay: false,

//     /**
//      * Source Maps
//      */

//     // https://webpack.js.org/configuration/devtool/#development
//     devtool: 'cheap-module-eval-source-map',

//     // If you have problems debugging vue-files in devtools,
//     // set this to false - it *may* help
//     // https://vue-loader.vuejs.org/en/options.html#cachebusting
//     cacheBusting: true,

//     cssSourceMap: true
//   },
}

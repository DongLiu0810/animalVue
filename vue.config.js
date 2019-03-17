// const path = require('path')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
var proxyTable;

try {
  proxyTable = require('./config/proxy.local');
} catch (error) {
  console.log('根目录下config复制文件，配置自己的代理，具体操作看proxy.tpl.js');
  proxyTable = {
    '/api': {
      target: 'http://localhost:8081',
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/api': ''
      }
      //转发的配置
    },
  }
}

module.exports = {
  lintOnSave: false,
  // baseUrl: '/web/',
  devServer: {
    port: '8080',
    //静态服务器的端口地址
    // host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // clientLogLevel: 'none',
    disableHostCheck: true,
    hot: true,
    proxy: proxyTable,
  },
  chainWebpack: config => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use("i18n")
      .loader("@kazupon/vue-i18n-loader")
      .end();
  },
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@$', resolve('src'))
  //     .set('assets', resolve('src/assets'))
  //     .set('components', resolve('src/components'))
  //     .set('views', resolve('src/views'))

  //   if (process.env.NODE_ENV === 'production') {
  //     config.externals({
  //       __bl: '__bl', //arms
  //       _hmt: '_hmt'
  //     })
  //   }
  // },

  // rules: [
  //   // ... 其它规则省略
  //   {
  //     test: /\.less$/,
  //     use: [
  //       'vue-style-loader',
  //       {
  //         loader: 'css-loader',
  //         options: {
  //           // 开启 CSS Modules
  //           modules: true,
  //           // 自定义生成的类名
  //           localIdentName: '[local]_[hash:base64:8]'
  //         }
  //       },
  //       'less-loader'
  //     ]
  //   }
  // ],

  configureWebpack: config => {
    devtool: process.env.ENV === 'production' ? '' : 'eval-source-map'
  },
  outputDir: process.env.OUTPUT_DIR,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: process.env.ENV === 'test' ? true : false,
  parallel: true,
  // css: undefined,

  //  css: {
  //   // 是否使用css分离插件 ExtractTextPlugin
  //   // extract: true,
  //   // 开启 CSS source maps?
  //   sourceMap: false,
  //   // // css预设器配置项
  //   // loaderOptions: {},
  //   // 启用 CSS modules for all css / pre-processor files.
  //   modules: true
  //  }
}
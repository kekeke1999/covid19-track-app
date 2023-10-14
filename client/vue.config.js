module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/ncov_main/" : "/",
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: 8081,
  },
  configureWebpack: {
    // 把原本需要写在webpack.config.js中的配置代码 写在这里 会自动合并
    externals: {
     'jquery' : '$',
     'echarts': 'echarts',
     'axios' : 'axios'
    }
  }
};

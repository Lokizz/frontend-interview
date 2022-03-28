const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: {  // 配置跨域
      '/api': {
        target: 'https://imissu.herokuapp.com/api/',
        pathRewrite: {'^/api': ''},
        // ! 开启代理
        changeOrigin: true
      }
    }
  }
}
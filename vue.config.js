const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://room.localhost',
    // compress: true,
    // disableHostCheck: true,
  }
})

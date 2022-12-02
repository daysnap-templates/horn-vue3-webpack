const { defineConfig } = require('@vue/cli-service')
// const postCssPxToRem = require('postcss-pxtorem')
const defineOptions = require('unplugin-vue-define-options/webpack')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
  transpileDependencies: [
    /[/\\]node_modules[/\\][@\\]daysnap[/\\]/
    // /[/\\]node_modules[/\\][@\\]test2[/\\]test3[/\\]/
    // '@daysnap/horn-ui'
  ],

  configureWebpack: {
    plugins: [
      defineOptions(),

      // https://vant-ui.github.io/vant/#/zh-CN/quickstart
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  }
})

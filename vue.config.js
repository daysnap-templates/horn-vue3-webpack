const { defineConfig } = require('@vue/cli-service')
const defineOptions = require('unplugin-vue-define-options/webpack')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const Components = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
  transpileDependencies: [
    /[/\\]node_modules[/\\][@\\]daysnap[/\\]/
  ],

  configureWebpack: {
    plugins: [
      defineOptions(),

      Components({
        dts: 'typings/components.d.ts',
        extensions: ['ts', 'jsx', 'tsx', 'js', 'vue'],
        resolvers: [
          // https://vant-ui.github.io/vant/#/zh-CN/quickstart
          VantResolver(),
          (componentName) => {
            if (componentName.startsWith('Hor')) { return { name: componentName, from: '@daysnap/horn-ui' } }
          }
        ]
      })
    ]
  }
})

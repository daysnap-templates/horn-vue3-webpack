const DefineOptions = require('unplugin-vue-define-options/webpack')
const AutoImport = require('unplugin-auto-import/webpack')
const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const Components = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
  transpileDependencies: [
    /[/\\]node_modules[/\\][@\\]daysnap[/\\]/
  ],

  configureWebpack: {
    plugins: [
      // https://github.com/sxzz/unplugin-vue-macros/blob/main/packages/define-options/README-zh-CN.md
      DefineOptions({
        include: [/\.vue$/, /\.vue\?vue/]
      }),

      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'typings/auto-imports.d.ts',
        resolvers: [VantResolver()]
      }),

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

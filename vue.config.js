const DefineOptions = require('unplugin-vue-define-options/webpack')
const AutoImport = require('unplugin-auto-import/webpack')
const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const Components = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
  publicPath: './',

  // fix defineOptions is not defined
  // https://github.com/sxzz/unplugin-vue-macros/issues/23
  parallel: false,

  transpileDependencies: [
    /[/\\]node_modules[/\\][@\\]daysnap[/\\]/
  ],

  configureWebpack: {
    plugins: [
      // https://github.com/sxzz/unplugin-vue-macros/blob/main/packages/define-options/README-zh-CN.md
      DefineOptions({
        include: [/\.vue$/, /\.vue\?vue/]
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'typings/auto-imports.d.ts',
        resolvers: [VantResolver()]
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dts: 'typings/components.d.ts',
        extensions: ['ts', 'jsx', 'tsx', 'js', 'vue'],
        resolvers: [
          // https://vant-ui.github.io/vant/#/zh-CN/quickstart
          VantResolver(),
          (componentName) => {
            if (componentName.startsWith('Hor')) { return { name: componentName, from: '@daysnap/horn-ui' } }
          }
        ],
        include: [
          /\.vue$/,
          /\.vue\?vue/,
          /[/\\]node_modules[/\\][@\\]daysnap[/\\]/
        ],
        exclude: []
      })
    ]
  }
})

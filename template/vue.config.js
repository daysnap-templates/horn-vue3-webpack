const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const DefineOptions = require('unplugin-vue-define-options/webpack')
const AutoImport = require('unplugin-auto-import/webpack')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const Components = require('unplugin-vue-components/webpack')

const resolve = (...dirs) => path.resolve(__dirname, ...dirs)

module.exports = defineConfig({
  publicPath: './',

  devServer: {
    port: 8080,
    allowedHosts: 'all',

    // history route support
    historyApiFallback: true,
  },

  // fix defineOptions is not defined
  // https://github.com/sxzz/unplugin-vue-macros/issues/23
  parallel: false,

  // 需要格式化
  transpileDependencies: [/[/\\]node_modules[/\\][@\\]daysnap[/\\]/],

  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        src: resolve('src'),
      },
      extensions: ['vue', 'ts', 'js'],
    },
    plugins: [
      // https://github.com/sxzz/unplugin-vue-macros/blob/main/packages/define-options/README-zh-CN.md
      DefineOptions({
        include: [/\.vue$/, /\.vue\?vue/],
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'typings/auto-imports.d.ts',
        resolvers: [VantResolver()],
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dts: 'typings/components.d.ts',
        extensions: ['ts', 'jsx', 'tsx', 'js', 'vue'],
        resolvers: [
          // https://vant-ui.github.io/vant/#/zh-CN/quickstart
          VantResolver(),
          (componentName) => {
            if (componentName.startsWith('Hor')) {
              return { name: componentName, from: '@daysnap/horn-ui' }
            }
          },
        ],
        importPathTransform: (v) => {
          if (v.endsWith('.ts')) {
            v = v.substring(0, v.lastIndexOf('.ts'))
          }
          return v
        },
        include: [
          /\.vue$/,
          /\.vue\?vue/,
          /[/\\]node_modules[/\\][@\\]daysnap[/\\]/,
        ],
        exclude: [],
      }),
    ],
  },
})

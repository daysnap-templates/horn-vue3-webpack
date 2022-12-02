const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true,
  transpileDependencies: [
    // /[/\\]node_modules[/\\][@\\]daysnap[/\\]horn-ui[/\\]/,
    // /[/\\]node_modules[/\\][@\\]daysnap[/\\]define-sass[/\\]/,

    // /[/\\]node_modules[/\\][@\\]test2[/\\]test3[/\\]/

    '@daysnap/horn-ui'
  ],

  configureWebpack: {
    plugins: [
      require('unplugin-vue-define-options/webpack')()
    ]
  }
})

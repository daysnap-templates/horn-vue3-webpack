import { Plugin } from 'vue'
import { Toast, setToastDefaultOptions } from 'vant'

import 'vant/es/toast/style'
import 'vant/es/dialog/style'

export default {
  install(app) {
    setToastDefaultOptions({
      forbidClick: true,
    })

    app.use(Toast)
  },
} as Plugin

import type { Plugin } from 'vue'
import { createPinia } from 'pinia'

// pinia docs https://pinia.vuejs.org/zh/
export default {
  install(app) {
    app.use(createPinia())
  },
} as Plugin

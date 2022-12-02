import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

;(s => s.keys().forEach(k => s(k).default && app.use(s(k).default)))(require.context('./plugins', true, /\.(t)s$/))

app.use(store).use(router).mount('#app')

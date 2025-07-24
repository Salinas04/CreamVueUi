import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import Cream Vue UI
import CreamVueUI from 'cream-vue-ui'
import 'cream-vue-ui/style'

// Import router
import router from './router'

// Create app and use plugins
const app = createApp(App)
app.use(CreamVueUI)
app.use(router)
app.mount('#app')

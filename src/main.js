import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import getVant from './plugins'

const app = createApp(App)
app.use(store)
app.use(router)
getVant(app)
app.mount('#app')

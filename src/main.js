import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import SvgIvon from '@/icons/index'
import '@/router/permission'

const app = createApp(App)
SvgIvon(app)
app.use(store).use(router).mount('#app')

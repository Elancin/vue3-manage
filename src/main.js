import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import SvgIvon from '@/icons/index'
import '@/router/permission'
import i18n from '@/i18n'

const app = createApp(App)
SvgIvon(app)
app.use(store).use(router).use(i18n).mount('#app')

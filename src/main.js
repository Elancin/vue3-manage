import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import '@/router/permission'
import i18n from '@/i18n'
import filters from './utils/filters'

const app = createApp(App)
filters(app)
app.use(store).use(router).use(i18n).mount('#app')

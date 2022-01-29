import { createApp, isVNode } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/index.css'


let app = createApp(App)
app.use(store).use(router).mount('#app')


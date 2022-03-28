import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from './http'

const app = createApp(App)
// ? 全局挂载 axios
app.provide('axios', axios)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

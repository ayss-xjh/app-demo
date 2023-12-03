// import './assets/main.css'

// 引入vue实例方法
import { createApp } from 'vue'
// 引入pinia
import { createPinia } from 'pinia'
// 引入路由
import router from './router/index.js'
// 引入请求API
import api from './api/index.js'
// 引入App组件
import App from './App.vue'

// 创建pinia实例
const pinia = createPinia()

// 创建app实例
const app = createApp(App)

// 安装路由
app.use(router)
// 挂载pinia
app.use(pinia)
// 把请求API注册到全局
// app.config.globalProperties.$api = api
app.provide('$api',api)

// 挂载到app元素
app.mount('#app')
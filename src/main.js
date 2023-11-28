// import './assets/main.css'

// 引入vue实例方法
import { createApp } from 'vue'
// 引入路由
import router from './router/index.js'
// 引入App组件
import App from './App.vue'

// 创建app实例
const app = createApp(App)

// 安装路由
app.use(router)

// 挂载到app元素
app.mount('#app')
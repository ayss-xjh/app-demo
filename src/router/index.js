// 引入vue-router
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// 引入路由配置
import routes from './routes.js'

const router = createRouter({
    // 配置路由模式
    history: createWebHistory(),
    // 路由的配置选项
    routes
})

// 导出路由
export default router
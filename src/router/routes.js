// 路由配置
const routes = [
    {
        // 路由路径
        path: '/',
        // 重定向
        redirect: '/login'
    },
    {
        path: '/login',
        // 显示的组件
        component: () => import('../views/login.vue')
    }
]

// 导出路由配置
export default routes
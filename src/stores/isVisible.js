// 引入pinia
import { defineStore } from 'pinia'

// 创建全局Stores isVisible(控制登录/注册对话框显示)
export const useIsVisibleStores = defineStore('isVisible',{
    // 状态(值)
    state: () => ({isVisible: false}),
    // 操作值的方法
    actions: {
        conversion() {
            this.isVisible = !this.isVisible
        }
    }
})
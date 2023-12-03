import { defineStore } from 'pinia'

export const useIsVisibleStores = defineStore('isVisible',{
    state: () => ({isVisible: false}),
    actions: {
        conversion() {
            this.isVisible = !this.isVisible
        }
    }
})
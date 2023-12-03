<script setup>
    import { inject } from 'vue'
    const $api = inject('$api')
    console.log('$api',$api)
    $api.test().then((resolve, reject)=>{
        console.log('resolve',resolve)
    })
</script>

<template>
    <!-- 挂载路由组件 -->
    <router-view></router-view>
</template>

<style scoped>

</style>

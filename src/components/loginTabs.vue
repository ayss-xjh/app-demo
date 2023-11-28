<script setup>
    import { ref } from "vue";
    const activeName = ref('login')
</script>

<template>
    <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="登录" name="login">
            <!-- 登录表单插槽 -->
            <slot name="login"></slot>
        </el-tab-pane>
        <el-tab-pane label="注册" name="enroll">
            <!-- 注册表单插槽 -->
            <slot name="enroll"></slot>
        </el-tab-pane>
    </el-tabs>
</template>

<style scoped>
:deep(.el-tabs__nav) {
  width: 100%;
  justify-content: space-evenly;
}
:deep(.el-tabs__item) {
    font-size: 18px;
    padding: 0;
}
</style>
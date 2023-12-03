<script setup>
import { useIsVisibleStores } from "../stores/isVisible.js"
import loginTabs from "../components/loginTabs.vue"
import loginForm from "../components/loginForm.vue"
import enrollForm from "../components/enrollForm.vue"
const isVisibleStores = useIsVisibleStores()
</script>

<template>
  <!-- 登录对话框 -->
  <el-dialog v-model="isVisibleStores.isVisible" width="480px" top="25vh">
    <!-- 登录/注册标签页 -->
    <loginTabs>
      <template #login>
        <!-- 登录表单 -->
        <loginForm></loginForm>
      </template>
      <template #enroll>
        <!-- 注册表单 -->
        <enrollForm></enrollForm>
      </template>
    </loginTabs>
  </el-dialog>
</template>

<style scoped></style>
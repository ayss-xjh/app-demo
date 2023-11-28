<script setup>
    import { ref } from 'vue';
    import loginTabs from '../components/loginTabs.vue'
    import loginForm from '../components/loginForm.vue'
    import enrollForm from '../components/enrollForm.vue';
    const centerDialogVisible = ref(true)
</script>

<template>
    <!-- 登录对话框 -->
    <el-dialog v-model="centerDialogVisible"  width="480px" top="22vh">
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

<style scoped>

</style>
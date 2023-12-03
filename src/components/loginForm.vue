<script setup>
    import { reactive, inject } from 'vue';
    // 表单数据
    const fromModel = reactive({
        userPhone: '',
        passWord: ''
    })
    // 请求API
    const $api = inject('$api')
    // 表单提交回调函数
    const  formSubmit = async () => {
        // 表单输入框格式验证
        if(!(/^1[3-9][0-9]{9}$/.test(fromModel.userPhone))) {
            return ElMessage({
                message: '手机号格式错误',
                type: 'warning',
            })
        }
        // 发送登录请求
        const data  = await $api.login(fromModel)
        if(data.code === 200) {
            window.localStorage.setItem('token',data.token)
            return ElMessage({
                message: '登录成功',
                type: 'success'
            })
        } else {
            return ElMessage({
                message: data.msg,
                type: 'warning'
            })
        }
    }
    // 按钮是否禁用
    const btnDisabled = () => {
        // 当有输入框没有值的时候禁用
        return !fromModel.userPhone || !fromModel.passWord
    }
</script>

<template>
    <el-form :model="fromModel" >
        <el-form-item>
            <el-input class="input-wh" v-model="fromModel.userPhone" placeholder="手机号" />
        </el-form-item>
        <el-form-item>
            <el-input class="input-wh" type="password" show-password v-model="fromModel.passWord" placeholder="密码" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="formSubmit" :disabled="btnDisabled()" round class="input-wh">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<style scoped>
.input-wh {
    width: 80%;
    height: 40px;
}
:deep(.el-form-item__content) {
    justify-content: center;
}
</style>
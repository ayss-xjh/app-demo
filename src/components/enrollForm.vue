<script setup>
    import { reactive } from 'vue';
    // 表单数据
    const fromModel = reactive({
        userPhone: '',
        passWord: '',
        passWordTwo: ''
    })
    // 表单提交回调函数
    const formSubmit = () => {
        // 表单验证
        if(!(/^1[3-9][0-9]{9}$/.test(fromModel.userPhone))) {
            return ElMessage({
                message: '手机号格式错误',
                type: 'warning',
            })
        } else if(fromModel.passWord.length < 6) {
            return ElMessage({
                message: '密码不能少于六位',
                type: 'warning',
            })
        } else if(fromModel.passWord !== fromModel.passWordTwo) {
            return ElMessage({
                message: '两次密码不一致',
                type: 'warning',
            })
        }
    }
    // 按钮是否禁用
    const btnDisabled = () => {
        // 当有输入框没有值的时候禁用
        return !fromModel.userPhone || !fromModel.passWord || !fromModel.passWordTwo
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
            <el-input class="input-wh" type="password" show-password v-model="fromModel.passWordTwo" placeholder="确认密码" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="formSubmit" :disabled="btnDisabled()" round class="input-wh">注册</el-button>
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
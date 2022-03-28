<template>
  <el-form
    ref="registerForm" 
    :model="registerUser" 
    :rules="registerRules" 
    label-width="120px"
    class="registerForm sign-up-form"
  >
  <el-form-item label="用户名" prop="name">
    <el-input 
      v-model="registerUser.name"
      placeholder="输入用户名"
    />
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input
      v-model="registerUser.email"
      placeholder="输入邮箱"
    />
  </el-form-item>
  <el-form-item label="确认密码" prop="password">
    <el-input
      v-model="registerUser.password"
      type="password"
      placeholder="输入密码"
    />
  </el-form-item>
  <el-form-item label="密码" prop="password2">
    <el-input
      v-model="registerUser.password2"
      type="password"
      placeholder="再次输入密码"
    />
  </el-form-item>
  <el-form-item label="身份">
    <el-select v-model="registerUser.role" placeholder="请选择身份">
      <el-option label="用户" value="user">用户</el-option>
      <el-option label="游客" value="visitor">游客</el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <!-- 提交前进行校验 -->
    <el-button @click="handleRegister(registerForm)" type="primary" class="submit-btn"
      >注册</el-button>
  </el-form-item>
</el-form>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'


const axios = inject('axios')
const router = useRouter()
const props = defineProps({
  registerUser: {
    type: Object,
    required: true
  },
  registerRules: {
    type: Object,
    required: true
  }
})

// ? 获取 registerForm 的 DOM 元素
let registerForm = ref()
const handleRegister = (formEl: any):void => {
  formEl.validate((valid:boolean) => {
    if (valid) {
      // @ts-ignore
      axios.post('/api/v1/auth/register', props.registerUser)  // 已使用代理转换 /api 地址
      .then((res: any) => {
        // ? 注册成功
        alert('注册成功')
        // ? 路由跳转
        router.push('/')
      })
      formEl.resetFields()
    } else {
      console.log('提交的格式有误，请重新提交')
      return false
    }
  })
}
</script>

<style scoped>

</style>
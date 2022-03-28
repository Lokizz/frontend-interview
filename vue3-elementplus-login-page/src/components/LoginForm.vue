<template>
  <!-- model 在校验以及重置输入的时候必填 -->
  <el-form
    ref="loginForm" 
    :model="loginUser" 
    :rules="rules" 
    label-width="120px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input 
        v-model="loginUser.email"
        placeholder="输入邮箱"
      />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="输入密码"
      />
    </el-form-item>
    <el-form-item>
      <!-- 提交前进行校验 -->
      <el-button @click="handleLogin(loginForm)" type="primary" class="submit-btn"
        >登陆</el-button>
    </el-form-item>
    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <button @click.prevent="handleForgot">立即找回</button></p>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

let axios = inject('axios')
let router = useRouter()
// ? setup 中使用 defineProps 来获取父组件传递的值
const props = defineProps({
  loginUser: {
    type: Object,
    required: true
  },
  rules: {
    type: Object,
    required: true
  }
})

// ? 获取 DOM 元素
let loginForm = ref()
// ? 触发登陆方法
const handleLogin = (formEl: any):void => {
  formEl.validate((valid:boolean) => {
    if (valid) {
      // @ts-ignore
      axios.post('/api/v1/auth/login', props.loginUser)  // 已使用代理转换 /api 地址
      .then((res: any) => {
        console.log(res.data)
        // ? 登陆成功，存储 token 到 LS 中
        const {token} = res.data
        localStorage.setItem('msToken', token)

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

const handleForgot = () => {
  // ? 跳转路由
  router.push('/forgotpassword')
}
</script>

<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p button {
  color: #409eff;
  background-color: #fff;
  border: inherit;
  cursor: pointer;
}

</style>
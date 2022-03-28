<template>
  <el-form
    label-width="120px"
    class="container"
  >
    <el-form-item label="邮箱">
      <el-input 
        type="email"
        v-model="email"
        placeholder="输入邮箱"
      />
    </el-form-item>
    <el-form-item>
      <!-- 提交前进行校验 -->
      <el-button @click="handleForgotPassword" type="primary" class="submit-btn"
        >发送邮件</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const axios = inject('axios')
const email = ref<string>('')
const handleForgotPassword = () => {
  // @ts-ignore
  axios.post('/api/v1/auth/forgotpassword', {email: email.value})
  .then((res: any):void => {
    console.log(res.data)
  }).catch((err: any) => {
    console.log(err);
    
  })
}
</script>

<style scoped>
.container {
  width: 50%;
  margin: 200px auto;
}
.submit-btn {
  width: 100%;
}
</style>
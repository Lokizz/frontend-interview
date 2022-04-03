<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form" :rules="rules" class="login-form">
      <div class="title-container">
        <h3 class="title">用户登陆</h3>
      </div>
      <el-form-item prop="username">
        <svg-icon icon="user" class="svg-container"></svg-icon>
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item prop="password">
        <svg-icon icon="password" class="svg-container"></svg-icon>
        <el-input v-model="form.password" :type="passwordType" />
        <svg-icon
          :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
          @click="changeType"
        ></svg-icon>
      </el-form-item>
      <el-button type="primary" class="login-button" @click="handleLogin"
        >登陆</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const form = reactive({
  username: 'admin',
  password: '123456'
})

// ? 表单的校验规则
// 只需为 el-form 的 rules 属性传入约定的验证规则，
// 并将 form-item 的 prop 属性设置为需要验证的特殊键值
const rules = reactive({
  name: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur'
    }
  ]
})

const formRef = ref(null)
const handleLogin = () => {
  formRef.value.validate(async (valid) => {
    // return boolean
    if (valid) {
      store.dispatch('app/login', form)
    } else {
      return false
    }
  })
}

const passwordType = ref('password')
const changeType = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    :deep(.el-input) {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0;
        -webkit-appearance: none;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .login-button {
      width: 100%;
      box-sizing: border-box;
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    :deep(.lang-select) {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    // position: absolute;
    // right: 10px;
    // top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>

<template>
  <el-container>
    <el-main>
      <el-row justify="center" align="middle">
        <el-col :span="16">
          <div class="container">
            <div class="banner" style="padding: 1rem;">
              normal banner
            </div>
            <div class="banner">
            <img src="@/assets/img/demonstrate.svg" alt="展示Demo">
            <h2>登陆组件展示 Demo</h2>
            <el-button @click="handleClick" class="mt-2" type="primary">登陆页面</el-button>
            </div>
            <h3>使用技术栈：</h3>
            <div class="features">
              <ul class="feature-group">
                <li class="feature-item">
                  <img src="@/assets/img/Vue.svg" alt="">
                  <p>Vue3</p>
                </li>
                <li class="feature-item">
                  <img src="@/assets/img/element-plus-logo.svg" alt="">
                  <p>Element Plus</p>
                </li>
                <li class="feature-item">
                  <img src="@/assets/img/typescript.svg" alt="">
                  <p>TypeScript</p>
                </li>
                <li class="feature-item">
                  <img src="@/assets/img/router.svg" alt="">
                  <p>Vue Router</p>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = ():void => {
  router.push('/login')
}
</script>

<style scoped>
.container {
  margin-bottom: 2rem;
  height: 100%;
  text-align: center;
}

.container >>> .banner {
  border: 1px solid red;
}
.banner {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.banner img {
  width: 6rem;
  height: 6rem;
}

.banner h2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: #409eff;
}

.features {
  display: flex;
  justify-content: center;
}

h3 {
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.feature-group {
  width: 100%;
  display: flex;
  justify-content: space-around;
  list-style: none;
}

.feature-item {
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.feature-item img {
  height: 2rem;
}
</style>
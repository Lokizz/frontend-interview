<template>
  <router-view />
</template>

<script>
// ? provide 和 inject 用于深度嵌套之间的依赖传递
import { provide } from "vue";
import * as echarts from "echarts";
import axios from "axios";

// ? 设置基准路径
// ? 设置了 baseURL 以后就无需重复设定具体的 URL
axios.defaults.baseURL = "http://localhost:8888";
// ? 直接使用本地地址，而非模拟的后端地址
// axios.defaults.baseURL = "../api/mock";
export default {
  // ? 在组件创建之前运行
  setup() {
    provide("echarts", echarts);
    provide("axios", axios);
    return {};
  },
};
</script>

<style lang="less">
body {
  height: 100vh;
  overflow-x: hidden;
  background: url("@/assets/bg1.jpg") center center no-repeat;
  background-size: 100% 100%;
  backdrop-filter: blur(6px);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  &::before {
    box-sizing: border-box;
  }

  &::after {
    box-sizing: border-box;
  }
}
</style>

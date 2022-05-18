const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  // ? 判断当前是否处于生产环境
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  transpileDependencies: true,
});

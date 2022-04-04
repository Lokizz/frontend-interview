module.exports = {
  // ? 表示当前目录即为根目录，ESLint 规则将被限制到该目录下
  root: true,
  // ? env 表示启用 ESLint 检测的环境
  env: {
    // ? 在 node 环境下启动 ESLint 检测
    node: true
  },
  // ? ESLint 中基础配置需要继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // ? 启用规则及各自的错误级别
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off'
  }
}

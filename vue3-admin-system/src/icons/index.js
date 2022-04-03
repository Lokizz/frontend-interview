import SvgIcon from '@/components/SvgIcon'

// ? 使用 webpack 的创建上下文函数获取某个文件夹内所有符合正则式的文件
const svgRequired = require.context('./svg', false, /\.svg$/)
svgRequired.keys().forEach(item => svgRequired(item))

export default app => {
  // ? 注册一个全局组件
  app.component('svg-icon', SvgIcon)
}

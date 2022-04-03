import axios from 'axios'
import {
  ElMessage
} from 'element-plus'

const service = axios.create({
  // ? 根据不同的环境使用不同的基础地址
  // process.env - nodejs 用于返回一个包含用户环境的对象
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// ? 请求拦截
service.interceptors.request.use(config => {
  config.headers.Authorization = localStorage.getItem('token')
  return config
}, err => {
  return Promise.reject(new Error(err))
})

// ? 响应拦截
service.interceptors.response.use(response => {
  const {
    data,
    meta
  } = response.data
  if (meta.status === 200 || meta.status === 201) {
    return data
  } else {
    ElMessage.error(meta.msg)
    return Promise.reject(new Error(meta.msg))
  }
}, error => {
  error.response && ElMessage.error(error.response.data)
  return Promise.reject(new Error(error.response.data))
})

export default service

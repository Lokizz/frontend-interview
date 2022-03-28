import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
// 以服务的方式来调用 Loading 加载
import { ElLoading } from 'element-plus'

let loading: any
const startLoading = () => {
  interface Options {
    lock: boolean;
    text: string;
    background: string;
  }
  const options: Options = {
    lock: true,
    text: '加载中...',
    background: 'rgba(0,0,0,0.7)'
  }
  loading = ElLoading.service(options)
}

const endLoading = () => {
  loading.close()
}

// * 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  // ? 加载
  startLoading()
  return config
})

// * 响应拦截
axios.interceptors.response.use((response:AxiosResponse) => {
  // ? 结束 loading
  endLoading()
  return response
}, err => {
  endLoading()
  // ? 错误提醒
  return Promise.reject(err)
})

export default axios
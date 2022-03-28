import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component:  () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component:  () => import('@/views/LoginRegister.vue')
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component:  () => import('@/views/ForgotPassword.vue')
  },
  {
    path: '/resetpassword/:id',
    name: 'ResetPassword',
    component:  () => import('@/views/ResetPassword.vue')
  },
  {
    path: '/:catchAll(.*)',  // 找不到的页面
    name: '/404',
    component:  () => import('@/views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/homePage.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/testPage.vue')
  },
  {
    // ? 将根目录默认映射到 homePage.vue
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  // ? 使用定义的对象生成路由
  routes
})

export default router

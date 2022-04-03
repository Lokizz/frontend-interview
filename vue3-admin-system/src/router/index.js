import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  },
  {
    path: '/',
    name: '/',
    component: () => import('../layout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

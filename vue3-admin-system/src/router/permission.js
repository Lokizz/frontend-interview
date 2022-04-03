import router from '@/router'
import store from '@/store'

const whiteList = ['/login']
// ? 在路由进行前添加一个路由守卫
router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

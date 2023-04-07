import { userinfoStorage } from '@/utils/storage'
import type { Router } from 'vue-router'

export function setupGuards(router: Router) {
  // 鉴定权限
  router.beforeEach((to) => {
    // 是否需要授权，1 需要授权、-1 不需要登录、0 登录、不登录都可以
    const requiresAuth = to.meta.requiresAuth ?? 0
    const userinfo = userinfoStorage.getItem()

    // 已登录进入到不需要登录的页面，直接跳转回首页
    if (userinfo && requiresAuth === -1) {
      return { path: '/' }
    }

    // 未登录进入到需要登录的页面，直接跳转取登录
    if (!userinfo && requiresAuth === 1) {
      return {
        path: '/login',
        query: { redirect: to.fullPath },
      }
    }
  })

  // 设置标题
  router.afterEach((to) => {
    window.document.title = to.meta.title ?? ''
  })
}

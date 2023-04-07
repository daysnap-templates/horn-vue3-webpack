import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string // 标题
    requiresAuth?: 1 | 0 | -1 // 是否需要授权，1 需要授权、-1 不需要登录、0 登录、不登陆都可以

    // tabbar icon
    iconSelected?: string
    icon?: string
  }
}

// 全局 API
declare global {
  // fix eruda
  const eruda: any
}

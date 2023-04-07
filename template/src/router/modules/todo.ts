import type { RouteRecordRaw } from 'vue-router'

// 模板范例
export default [
  {
    path: '/todo',
    name: 'todo',
    meta: {
      title: 'TODO 列表',
      requiresAuth: 1, // 需要登录
    },
  },
  {
    path: '/todo/details',
    name: 'todoDetails',
    meta: {
      title: 'TDDO 详情',
      requiresAuth: 1,
    },
  },
] as RouteRecordRaw[]

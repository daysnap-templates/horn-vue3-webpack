import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'main',
    redirect: '/home',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', icon: 'wap-home-o', iconSelected: 'wap-home' },
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine/index.vue'),
        meta: { title: '我的', icon: 'manager-o', iconSelected: 'manager' },
      },
    ],
  },
  // 404
  // https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html
  { path: '/:pathMatch(.*)*', name: '404', redirect: '/' },
] as RouteRecordRaw[]

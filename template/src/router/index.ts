import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('src/views/main/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('src/views/home/index.vue'),
        meta: { title: '首页' },
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('src/views/mine/index.vue'),
        meta: { title: '我的' },
      },
    ],
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('src/views/setting/index.vue'),
    meta: { title: '设置' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  window.document.title = (to.meta?.title ?? 'Horn') as string
})

export default router

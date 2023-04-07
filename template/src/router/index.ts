import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router'
import { setupGuards } from './guards'

const routes = ((s) =>
  s
    .keys()
    .reduce<RouteRecordRaw[]>(
      (res, k) => [...res, ...(s(k).default || [])],
      [],
    ))(require.context('./modules', true, /\.(t)s$/))

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

// 设置路由守卫
setupGuards(router)

export default router

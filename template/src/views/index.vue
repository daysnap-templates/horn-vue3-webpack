<template>
  <div class="view-wrap">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <van-tabbar fixed route placeholder v-model="current" class="main-tab-bar">
      <van-tabbar-item
        v-for="(item, index) in computedTabBars"
        :key="item.path"
        replace
        :to="{ path: item.path, query: $route.query }"
        :icon="index === current ? item.meta?.iconSelected : item.meta?.icon"
      >
        {{ item.meta?.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
const computedTabBars = computed(() => {
  const { options } = router
  const { routes } = options
  const tabBarRoutes = routes.find((item) => item.path === '/')
  const { children = [], path = '' } = tabBarRoutes || {}
  return (
    children
      ?.filter((item) => !item?.path?.includes('components'))
      .map((item) => {
        const { path: itemPath } = item
        return Object.assign({}, item, {
          path: itemPath.startsWith('/')
            ? itemPath
            : `${path}${path.endsWith('/') ? '' : '/'}${itemPath}`,
        })
      }) ?? []
  )
})
const current = ref(
  computedTabBars.value.findIndex((item) => item.path === route.path),
)
</script>

<style lang="scss">
.view-wrap {
  background-color: #f2f2f2;
}
</style>

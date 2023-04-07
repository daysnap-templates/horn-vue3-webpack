<template>
  <div class="c-view-wrap main-view">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <van-tabbar fixed route placeholder v-model="current">
      <van-tabbar-item
        v-for="(item, index) in computedTabbars"
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

const computedTabbars = computed(() => {
  const routes = router.getRoutes()
  const tabbarRoute = routes.find((item) => item.path === '/')
  return tabbarRoute?.children ?? []
})
const current = ref(
  computedTabbars.value.findIndex((item) => item.path === route.path),
)
</script>

<style lang="scss" scoped>
@import '@/assets/scss/define.scss';
.main-view {
  @extend %df;
  @extend %fdc;
  height: 100vh;

  > .c-view-wrap {
    @extend %df1;
    min-height: auto;
    height: 500px;
    background-color: red;
  }
}
</style>

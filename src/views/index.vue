<template>
  <hor-view title="2">
    <hor-avatar></hor-avatar>
    <van-nav-bar title="22"></van-nav-bar>
    <p>1</p>
    <h2 class="title">标题标题</h2>
    <text-com></text-com>
  </hor-view>
</template>

<script setup lang="ts">
import { HorView } from '@daysnap/horn-ui'
defineOptions({
  name: 'Home1'
})
</script>

<style lang="scss">
@import "src/assets/scss/define";
.title{
  font-size: 24px;
}
</style>

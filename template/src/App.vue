<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { useTransitionNameByPosition } from '@daysnap/horn-use'

const transitionName = useTransitionNameByPosition({
  enterClass: 'slide-left',
  leaveClass: 'slide-right',
})
</script>

<style lang="scss">
@import 'src/assets/scss/common.scss';
</style>

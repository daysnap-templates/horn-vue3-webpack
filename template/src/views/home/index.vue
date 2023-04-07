<template>
  <hor-view>
    <hor-icon name="hor-version" />
    <hor-cell @click="handleTest" label="你好" value="hello world"></hor-cell>
    <hor-cascade-popup ref="horCascadePopupInstance" />
    <p>11</p>
  </hor-view>
</template>

<script lang="ts" setup>
import { HorCascadePopupInstance } from '@daysnap/horn-ui'

const horCascadePopupInstance = ref<HorCascadePopupInstance>()
const handleTest = () => {
  console.log(1)
  horCascadePopupInstance.value?.show({})
}
</script>

<style lang="scss" scoped>
// @import '@/assets/scss/define.scss';
.c-view-wrap {
  background-color: red;
}
</style>

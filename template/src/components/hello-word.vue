<template>
  <div class="hell-word">
    <p>hell-word</p>
    <hello-word v-if="useChildren"></hello-word>
  </div>
</template>

<script setup lang="ts">
defineProps({
  useChildren: {
    type: Boolean,
    value: false,
  },
})
</script>

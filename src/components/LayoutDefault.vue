<template>
  <div class="app-wrap">
    <TheHeader />
    <RouterView class="app-wrap__content" />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { useWindowSize } from '@vueuse/core'

const { height: viewportHeight } = useWindowSize()
const viewportHeightInPx = computed(() => `${viewportHeight.value}px`)
</script>

<style scoped lang="scss">
.app-wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: v-bind(viewportHeightInPx);

  // .app-wrap__content
  &__content {
    flex-grow: 1;
  }
}
</style>

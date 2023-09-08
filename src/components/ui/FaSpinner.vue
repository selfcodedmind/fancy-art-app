<template>
  <IconSpinner class="spinner" />
</template>

<script setup lang="ts">
import IconSpinner from '@/components/icons/IconSpinner.vue'
</script>
<style lang="scss" scoped>
.spinner {
  transform-origin: center;
  animation: rotate-spinner 0.75s infinite linear;
}

@keyframes rotate-spinner {
  100% {
    transform: rotate(360deg);
  }
}
</style>

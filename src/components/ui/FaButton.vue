<template>
  <button class="button">
    <FaSpinner v-if="isLoading" />
    <slot v-if="!isLoading" />
  </button>
</template>

<script lang="ts" setup>
import FaSpinner from '@/components/ui/FaSpinner.vue'

defineProps<{ isLoading?: boolean }>()
</script>

<style scoped lang="scss">
.button {
  @include font-primary;
  text-transform: uppercase;
  border-radius: 10px;
  border: 1px solid var(--color-dark);
  background: var(--color-white);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 8px 10px;
  cursor: pointer;
  transition: 0.1s;
  text-align: center;
  white-space: nowrap;

  @media (hover: hover) {
    &:hover {
      color: var(--color-white);
      background: var(--color-dark);
    }
  }
}
</style>

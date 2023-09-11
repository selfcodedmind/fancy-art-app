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

  padding: 8px 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  background: var(--color-white);
  border: 1px solid var(--color-dark);
  border-radius: 10px;
  transition: 0.1s;

  @media (hover: hover) {
    &:hover {
      color: var(--color-white);
      background: var(--color-dark);
    }
  }
}
</style>

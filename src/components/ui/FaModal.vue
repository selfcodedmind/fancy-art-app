<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    maxWidth: number
  }>(),
  {
    maxWidth: 800
  }
)

defineEmits<{
  (e: 'close'): void
}>()

const maxWidthInPx = computed(() => `${props.maxWidth}px`)
</script>

<template>
  <teleport to="body">
    <div class="modal">
      <div class="modal__overlay" @click="$emit('close')"></div>
      <div class="modal__wrap">
        <h3>
          <slot name="title" />
        </h3>
        <slot name="content" />
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 40px 0;
  // .modal__overlay
  &__overlay {
    background: rgba(0, 0, 0, 50%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  // .modal__wrap
  &__wrap {
    border-radius: 4px;
    position: relative;
    background: white;
    overflow-y: auto;
    max-height: calc(100%);
    max-width: v-bind(maxWidthInPx);
  }
}
</style>

<template>
  <div class="text-input">
    <input
      class="text-input__field"
      type="text"
      v-bind="inputFieldAttributes"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <div class="text-input__icon-wrap">
      <slot name="icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: string
  inputFieldAttributes: Record<string, string>
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<style scoped lang="scss">
.text-input {
  position: relative;
  display: block;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    background: black;
    height: 2px;
    opacity: 0;
    transition: 0.3s;
  }
  &:focus-within {
    outline: none;
    &::after {
      opacity: 1;
    }
  }
  // .text-input__field
  &__field {
    padding: 8px 32px 8px 0;
    border: none;
    border-bottom: 1px solid var(--color-dark);
    height: 40px;
    font-size: 18px;
    width: 100%;
    outline: none;
    ::placeholder {
      opacity: 0.5;
    }
  }

  // .text-input__icon-wrap
  &__icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    max-width: 24px;
    max-height: 24px;
    > * {
      max-width: 100%;
      max-height: 100%;
      display: block;
    }
  }
}
</style>

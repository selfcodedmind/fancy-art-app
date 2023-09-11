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
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    content: '';
    background: black;
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
    width: 100%;
    height: 40px;
    padding: 8px 32px 8px 0;
    font-size: 18px;
    border: none;
    border-bottom: 1px solid var(--color-dark);
    outline: none;

    ::placeholder {
      opacity: 0.5;
    }
  }

  // .text-input__icon-wrap
  &__icon-wrap {
    position: absolute;
    top: 50%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 24px;
    max-height: 24px;
    padding: 2px;
    transform: translateY(-50%);

    > * {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>

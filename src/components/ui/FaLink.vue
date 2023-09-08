<template>
  <component
    :is="linkType === 'internal' ? 'RouterLink' : 'a'"
    :to="to"
    :href="linkType === 'external' ? to : ''"
    class="link"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router'

withDefaults(
  defineProps<
    {
      linkType?: 'internal' | 'external'
    } & RouterLinkProps
  >(),
  {
    linkType: 'internal'
  }
)
</script>

<style scoped lang="scss">
.link {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--color-dark);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
  }
  @media (hover: hover) {
    &:hover:after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }
}
</style>

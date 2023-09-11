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

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    content: '';
    background-color: var(--color-dark);
    transition: transform 0.3s;
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  @media (hover: hover) {
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
}
</style>

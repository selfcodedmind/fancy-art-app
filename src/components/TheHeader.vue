<template>
  <header class="header">
    <FaContainer>
      <div class="header__inner">
        <router-link class="header__logo" to="/"> Fancy Art </router-link>

        <nav class="header__nav">
          <FaLink to="/"> HOME </FaLink>
          <FaLink to="/about" link-type="external"> ABOUT </FaLink>
        </nav>
      </div>
    </FaContainer>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FaContainer from '@/components/ui/FaContainer.vue'
import FaLink from '@/components/ui/FaLink.vue'
</script>

<style lang="scss" scoped>
.header {
  // .header__inner
  &__inner {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;

    @include breakpoint(mobile) {
      display: grid;
    }
  }

  // .header__logo
  &__logo {
    @include font-secondary;
    font-size: 28px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
  }

  // .header__nav
  &__nav {
    display: flex;
    gap: 20px;
  }
}
</style>

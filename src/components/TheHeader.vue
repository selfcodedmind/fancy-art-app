<template>
  <header class="header">
    <router-link class="header__logo" to="/"> fancy-art-app </router-link>

    <nav class="header__nav">
      <RouterLink to="/"> Home </RouterLink>
      <RouterLink to="/about"> About </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  border-bottom: 1px solid black;

  // .header__logo
  &__logo {
    font-size: 24px;
    font-weight: 700;
  }

  // .header__nav
  &__nav {
    display: flex;
    gap: 20px;
  }
}
</style>

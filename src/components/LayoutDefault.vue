<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="app-wrap">
    <TheHeader />
    <RouterView />
  </div>
</template>

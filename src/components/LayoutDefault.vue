<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="app-wrap">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

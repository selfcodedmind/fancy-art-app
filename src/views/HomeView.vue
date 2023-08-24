<script setup lang="ts">
import ArtworksSearch from '@/components/ArtworksSearch.vue'
import ArtworksImages from '@/components/ArtworksImages.vue'
</script>

<template>
  <main class="artworks">
    <ArtworksSearch class="artworks__search" />
    <ArtworksImages />
  </main>
</template>

<style scoped lang="scss">
.artworks {
  padding: 40px;
  // .artworks__search
  &__search {
    margin-bottom: 40px;
  }
}
</style>

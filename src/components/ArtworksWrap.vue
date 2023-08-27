<script setup lang="ts">
import ArtworksSearch from '@/components/ArtworksSearch.vue'
import ArtworksImages from '@/components/ArtworksImages.vue'
import ArtworksPagination from '@/components/ArtworksPagination.vue'
</script>

<template>
  <main class="artworks">
    <div class="artworks__header">
      <ArtworksSearch class="artworks__search" />
      <ArtworksPagination />
    </div>
    <ArtworksImages />
  </main>
</template>

<style scoped lang="scss">
.artworks {
  padding: 40px;

  // .artworks__header
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  // .artworks__search
  &__search {
    margin-bottom: 40px;
  }
}
</style>

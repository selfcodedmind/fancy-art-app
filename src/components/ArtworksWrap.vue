<script setup lang="ts">
import ArtworksSearch from '@/components/ArtworksSearch.vue'
import ArtworksImages from '@/components/ArtworksImages.vue'
import ArtworksPagination from '@/components/ArtworksPagination.vue'
import ArtworksEntertainment from '@/components/ArtworksEntertainment.vue'
import FaContainer from '@/components/ui/FaContainer.vue'
</script>

<template>
  <main class="artworks">
    <FaContainer>
      <h1 class="artworks__title">COLLECTION</h1>
      <div class="artworks__header">
        <ArtworksSearch class="artworks__search" />
        <ArtworksEntertainment />
      </div>
      <ArtworksPagination />
      <ArtworksImages />
    </FaContainer>
  </main>
</template>

<style scoped lang="scss">
.artworks {
  // .artworks__title
  &__title {
    text-align: center;
    padding-top: 80px;
    margin-bottom: 120px;
    font-size: 120px;
    font-style: normal;
    font-weight: 400;
    line-height: 140px;
    letter-spacing: -4px;
    text-transform: uppercase;
  }

  // .artworks__header
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  // .artworks__search
  &__search {
    flex: 0 1 640px;
    margin-right: 30px;
  }
}
</style>

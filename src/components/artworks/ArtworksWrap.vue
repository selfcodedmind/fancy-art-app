<script setup lang="ts">
import ArtworksSearch from '@/components/artworks/ArtworksSearch.vue'
import ArtworksImages from '@/components/artworks/ArtworksList.vue'
import ArtworksPagination from '@/components/artworks/ArtworksPagination.vue'
import FaContainer from '@/components/ui/FaContainer.vue'
import ArtworksLoadMore from '@/components/artworks/ArtworksLoadMore.vue'
import { useArtworksStore } from '@/stores/artworksStore'

const artworksStore = useArtworksStore()
</script>

<template>
  <main class="artworks">
    <FaContainer>
      <h1 class="artworks__title">COLLECTION</h1>
      <div class="artworks__header">
        <ArtworksSearch class="artworks__search" />
      </div>
      <ArtworksPagination class="artworks__pagination" />
      <ArtworksImages />
      <ArtworksLoadMore v-if="artworksStore.artworks.length" />
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

    @include breakpoint(tablet-portrait) {
      font-size: 64px;
      letter-spacing: normal;
      padding-top: 60px;
      margin-bottom: 60px;
      line-height: 150%;
    }

    @include breakpoint(mobile) {
      font-size: 36px;
      padding-top: 20px;
      margin-bottom: 20px;
    }
  }

  // .artworks__header
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;

    @include breakpoint(tablet-portrait) {
      display: grid;
      justify-content: stretch;
    }
  }

  // .artworks__search
  &__search {
    flex: 1 1 640px;
  }

  // .artworks__pagination
  &__pagination {
    margin-bottom: 20px;
  }
}
</style>

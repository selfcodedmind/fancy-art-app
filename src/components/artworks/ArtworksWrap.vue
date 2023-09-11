<script setup lang="ts">
import ArtworksSearch from '@/components/artworks/ArtworksSearch.vue'
import ArtworksList from '@/components/artworks/ArtworksList.vue'
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
      <ArtworksList />
      <ArtworksLoadMore v-if="artworksStore.artworks.length" />
    </FaContainer>
  </main>
</template>

<style scoped lang="scss">
.artworks {
  // .artworks__title
  &__title {
    padding-top: 80px;
    margin-bottom: 120px;
    font-size: 120px;
    font-style: normal;
    font-weight: 400;
    line-height: 140px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: -4px;

    @include breakpoint(tablet-portrait) {
      padding-top: 60px;
      margin-bottom: 60px;
      font-size: 64px;
      line-height: 150%;
      letter-spacing: normal;
    }

    @include breakpoint(mobile) {
      padding-top: 20px;
      margin-bottom: 20px;
      font-size: 36px;
    }
  }

  // .artworks__header
  &__header {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
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

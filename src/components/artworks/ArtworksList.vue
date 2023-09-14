<script setup lang="ts">
import { useArtworksStore } from '@/stores/artworksStore'
import ArtworksListItem from '@/components/artworks/ArtworksListItem.vue'
import ArtworksNoResultsFound from '@/components/artworks/ArtworksNoResultsFound.vue'
const artworksStore = useArtworksStore()
</script>

<template>
  <div>
    <ul v-if="artworksStore.artworks.length" class="list">
      <ArtworksListItem
        v-for="(artwork, index) in artworksStore.artworks"
        :key="artwork.image_id"
        :index="index"
        :artwork="artwork"
      />
    </ul>
    <ArtworksNoResultsFound v-if="!artworksStore.artworks.length && artworksStore.noResultsFound" />
  </div>
</template>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px 40px;
  padding: 0;
  list-style: none;

  @include breakpoint(tablet-landscape) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include breakpoint(tablet-portrait) {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup lang="ts">
import { useArtworksStore } from '@/stores/artworksStore'
import ArtworksImagesItem from '@/components/artworks/ArtworksListItem.vue'
const artworksStore = useArtworksStore()
</script>

<template>
  <ul class="list">
    <ArtworksImagesItem
      v-for="(artwork, index) in artworksStore.artworks"
      :key="artwork.image_id"
      :index="index"
      :artwork="artwork"
    />
  </ul>
</template>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 60px;
  list-style: none;
  padding: 0;
}
</style>

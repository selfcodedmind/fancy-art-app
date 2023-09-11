<script setup lang="ts">
import { useArtworksStore } from '@/stores/artworksStore'
import ArtworksListItem from '@/components/artworks/ArtworksListItem.vue'
const artworksStore = useArtworksStore()
</script>

<template>
  <ul class="list">
    <ArtworksListItem
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
  grid-gap: 60px 40px;
  padding: 0;
  list-style: none;
}
</style>

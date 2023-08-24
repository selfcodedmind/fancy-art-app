<script setup lang="ts">
import { useArtworksStore } from '@/stores/artworksStore'
import ArtworksImagesItem from '@/components/ArtworksImagesItem.vue'
const artworksStore = useArtworksStore()
</script>

<template>
  <ul class="list">
    <ArtworksImagesItem
      v-for="({ id, image_id }, index) in artworksStore.images"
      :key="id"
      :index="index"
      :image-id="image_id"
    />
  </ul>
</template>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  padding: 0;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import ArtworksVizualizeDominantColorModal from '@/components/artworks/ArtworksVizualizeDominantColorModal.vue'
import FaButton from '@/components/ui/FaButton.vue'

const isVizualizationModalOpen = ref(false)
</script>

<template>
  <div class="entertainment">
    <div class="entertainment__title">Entertain yourself:</div>
    <ul class="entertainment__list">
      <li>
        <FaButton @click="isVizualizationModalOpen = true"> Vizualize dominant colors </FaButton>
      </li>
      <li>
        <FaButton> Slideshow </FaButton>
      </li>
    </ul>

    <ArtworksVizualizeDominantColorModal
      v-if="isVizualizationModalOpen"
      @close="isVizualizationModalOpen = false"
    />
  </div>
</template>

<style lang="scss" scoped>
.entertainment {
  display: flex;
  align-items: center;
  gap: 10px;

  @include breakpoint(tablet-portrait) {
    flex-direction: column;
    align-items: flex-start;
  }
  // .entertainment__title
  &__title {
    margin-right: 16px;
    white-space: nowrap;
  }

  // .entertainment__list
  &__list {
    display: flex;
    gap: 12px;

    @include breakpoint(tablet-portrait) {
      flex-wrap: wrap;
    }
  }
}
</style>

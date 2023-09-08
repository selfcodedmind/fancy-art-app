<script setup lang="ts">
import { ref } from 'vue'
import ArtworksVizualizeDominantColorModal from '@/components/ArtworksVizualizeDominantColorModal.vue'

const isVizualizationModalOpen = ref(false)
</script>

<template>
  <div class="entertainment">
    <h2>Entertain yourself:</h2>
    <ul>
      <li>
        <button @click="isVizualizationModalOpen = true">Vizualize dominant colors</button>
      </li>
      <li>
        <button>Slideshow</button>
      </li>
    </ul>

    <ArtworksVizualizeDominantColorModal
      v-if="isVizualizationModalOpen"
      @close="isVizualizationModalOpen = false"
    />
  </div>
</template>

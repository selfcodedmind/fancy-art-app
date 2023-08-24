import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TArtworksSearchResponse } from '@/types/artworksTypes'

export const useArtworksStore = defineStore('artworks', () => {
  const images = ref<TArtworksSearchResponse['data']>([])

  return {
    images
  }
})

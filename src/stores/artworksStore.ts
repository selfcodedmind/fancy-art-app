import { defineStore } from 'pinia'

export const useArtworksStore = defineStore('artworks', () => {
  const images = []

  return {
    images
  }
})

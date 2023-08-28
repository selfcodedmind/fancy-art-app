import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { TArtworksSearchResponse } from '@/types/artworksTypes'
import type { TViewBy } from '@/types/artworksTypes'
import { artworksService } from '@/services/artworksService'

export const useArtworksStore = defineStore('artworks', () => {
  const pagination = ref<TArtworksSearchResponse['pagination']>()
  const images = ref<TArtworksSearchResponse['data']>([])

  const viewBy = ref<TViewBy>(50)
  const currentSearchQuery = ref('')
  const currentPageResetTrigger = ref(0)

  const resetCurrentPageToFirst = () => {
    currentPageResetTrigger.value++
  }

  const searchArtworks = async (
    searchQuery: string = currentSearchQuery.value,
    page: number = 1
  ) => {
    if (!searchQuery) return

    const response = await artworksService.searchArtworks(searchQuery, viewBy.value, page)
    if (!response) return

    pagination.value = response.data.pagination
    images.value = response.data.data

    const isNewSearch = searchQuery !== currentSearchQuery.value
    if (isNewSearch) {
      currentSearchQuery.value = searchQuery
      resetCurrentPageToFirst()
    }
  }

  watch(viewBy, async () => {
    await searchArtworks()
  })

  return {
    pagination,
    images,
    viewBy,
    searchArtworks,
    currentSearchQuery,
    currentPageResetTrigger
  }
})

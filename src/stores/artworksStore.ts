import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { TArtworksSearchResponse } from '@/types/artworksTypes'
import type { TViewBy } from '@/types/artworksTypes'
import { artworksService } from '@/services/artworksService'

export const useArtworksStore = defineStore('artworks', () => {
  const pagination = ref<TArtworksSearchResponse['pagination']>()
  const artworks = ref<TArtworksSearchResponse['data']>([])

  const currentPage = ref(1)
  const loadBy = ref<TViewBy>(18)
  const currentSearchQuery = ref('')

  const searchArtworks = async (
    searchQuery: string = currentSearchQuery.value,
    page: number = 1
  ) => {
    if (!searchQuery) return

    const response = await artworksService.searchArtworks(searchQuery, loadBy.value, page)
    if (!response) return

    pagination.value = response.data.pagination

    const loadedArtworks = response.data.data
    if (!loadedArtworks?.length) {
      artworks.value = []
    }

    const isNewSearch = searchQuery !== currentSearchQuery.value
    if (isNewSearch) {
      currentSearchQuery.value = searchQuery
      currentPage.value = 1
      artworks.value = loadedArtworks
    } else {
      artworks.value = [...artworks.value, ...loadedArtworks]
    }
  }

  const loadMore = async () => {
    currentPage.value++
    await searchArtworks(currentSearchQuery.value, currentPage.value)
  }

  watch(loadBy, async () => {
    await searchArtworks()
  })

  return {
    pagination,
    artworks,
    viewBy: loadBy,
    searchArtworks,
    currentSearchQuery,
    loadMore
  }
})

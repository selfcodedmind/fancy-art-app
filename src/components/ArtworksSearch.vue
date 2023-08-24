<script setup lang="ts">
import { ref } from 'vue'
import { artworksService } from '@/services/artworksService'
import { watchDebounced } from '@vueuse/core'
import { useArtworksStore } from '@/stores/artworksStore'

const searchQuery = ref('')
const artworksStore = useArtworksStore()
const handleSearch = async (searchQuery: string) => {
  if (!searchQuery) return

  const response = await artworksService.searchArtworks(searchQuery)
  if (!response) return

  artworksStore.images = response.data.data
}

watchDebounced(
  searchQuery,
  () => {
    handleSearch(searchQuery.value)
  },
  { debounce: 500 }
)
</script>

<template>
  <label class="search">
    <span class="search__label-text"> Artwork search </span>
    <input v-model="searchQuery" class="search__input" type="text" placeholder="fancy artwork" />
  </label>
</template>

<style lang="scss" scoped>
.search {
  display: block;
  // .search__label-text
  &__label-text {
    display: block;
  }

  // .search__input
  &__input {
  }
}
</style>

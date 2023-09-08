<script setup lang="ts">
import { ref } from 'vue'
import { watchDebounced } from '@vueuse/core'
import { useArtworksStore } from '@/stores/artworksStore'
import FaInputText from '@/components/ui/FaInputText.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

const searchQuery = ref('')
const artworksStore = useArtworksStore()

watchDebounced(
  searchQuery,
  () => {
    artworksStore.searchArtworks(searchQuery.value)
  },
  { debounce: 500 }
)
</script>

<template>
  <FaInputText
    v-model="searchQuery"
    :input-field-attributes="{
      placeholder: 'Search artworks, artists'
    }"
  >
    <template #icon><IconSearch /></template>
  </FaInputText>
</template>

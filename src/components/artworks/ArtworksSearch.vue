<script setup lang="ts">
import { ref } from 'vue'
import { watchDebounced } from '@vueuse/core'
import { useArtworksStore } from '@/stores/artworksStore'
import FaInputText from '@/components/ui/FaInputText.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import FaSpinner from '@/components/ui/FaSpinner.vue'

const searchQuery = ref('')
const artworksStore = useArtworksStore()

const isLoading = ref(false)
watchDebounced(
  searchQuery,
  async () => {
    isLoading.value = true
    await artworksStore.searchArtworks(searchQuery.value)
    isLoading.value = false
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
    <template #icon>
      <IconSearch v-if="!isLoading" />
      <FaSpinner v-if="isLoading" />
    </template>
  </FaInputText>
</template>

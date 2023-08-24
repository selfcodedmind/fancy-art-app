<script setup lang="ts">
import { artworksService } from '@/services/artworksService'
import { ref } from 'vue'
import { watchDebounced } from '@vueuse/core'

const searchQuery = ref('')
const images = ref([])
const handleSearch = async (searchQuery: string) => {
  const response = await artworksService.searchArtworks(searchQuery)
  if (!response) return
  images.value = response.data.data
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
  <main class="main">
    <input v-model="searchQuery" type="text" />
    <ul class="list">
      <li v-for="{ id, image_id } in images" :key="id" class="list__item">
        <img
          class="list__img"
          :src="`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`"
          alt=""
        />
      </li>
    </ul>
  </main>
</template>

<style scoped lang="scss">
.main {
  padding: 40px;
}

.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  // .list__item
  &__item {
  }

  // .list__img
  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}
</style>

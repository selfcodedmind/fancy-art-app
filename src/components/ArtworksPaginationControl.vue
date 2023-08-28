<script setup lang="ts">
import { useArtworksStore } from '@/stores/artworksStore'
import { computed, watch } from 'vue'
import { useOffsetPagination } from '@vueuse/core'

const artworksStore = useArtworksStore()
const pagination = computed(() => artworksStore.pagination)
const viewBy = computed(() => artworksStore.viewBy)

const onPageChange = ({ currentPage }: { currentPage: number }) => {
  artworksStore.searchArtworks(artworksStore.currentSearchQuery, currentPage)
}

const { currentPage, prev, next } = useOffsetPagination({
  total: pagination.value?.total,
  page: 1,
  pageSize: viewBy.value,
  onPageChange
})

watch(
  () => artworksStore.currentPageResetTrigger,
  () => {
    currentPage.value = 1
    console.log(currentPage.value)
  }
)
</script>

<template>
  <ul v-if="pagination?.total_pages" class="pagination-control">
    <li>
      <button @click="prev">prev</button>
    </li>

    <li v-if="currentPage > 4" @click="currentPage = 1">{{ 1 }}</li>

    <template v-if="currentPage <= 4">
      <li v-if="currentPage > 3" @click="currentPage -= 3">{{ currentPage - 3 }}</li>
      <li v-if="currentPage > 2" @click="currentPage -= 2">{{ currentPage - 2 }}</li>
    </template>

    <li v-if="currentPage > 4">...</li>

    <li v-if="currentPage > 1" @click="currentPage--">{{ currentPage - 1 }}</li>

    <li class="pagination-control__item">
      <strong> {{ currentPage }} </strong>
    </li>

    <template v-if="currentPage !== pagination.total_pages">
      <li v-if="currentPage < pagination.total_pages - 1" @click="currentPage++">
        {{ currentPage + 1 }}
      </li>

      <li v-if="pagination.total_pages - currentPage > 3">...</li>

      <li v-if="currentPage === pagination.total_pages - 2" @click="currentPage += 2">
        {{ currentPage + 2 }}
      </li>

      <li @click="currentPage = pagination.total_pages">
        {{ pagination?.total_pages }}
      </li>
    </template>

    <li>
      <button @click="next">next</button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.pagination-control {
  display: flex;
  gap: 10px;
  align-items: center;
  list-style: none;
}
</style>

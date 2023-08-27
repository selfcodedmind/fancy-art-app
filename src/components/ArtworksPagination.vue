<script setup lang="ts">
import { useArtworksStore } from '@/stores/artworksStore'
import { computed } from 'vue'
import { useOffsetPagination } from '@vueuse/core'

const artworksStore = useArtworksStore()
const pagination = computed(() => artworksStore.pagination)
const viewBy = computed(() => artworksStore.viewBy)

const viewByOptions = [20, 50, 100]

const fromPageCount = computed(() => {
  if (!pagination.value) return
  return (pagination.value.current_page - 1) * viewBy.value + 1
})

const toPageCount = computed(() => {
  if (!pagination.value) return

  const isOnLastPage = pagination.value.current_page === pagination.value.total_pages

  return isOnLastPage ? pagination.value?.total : pagination.value?.current_page * viewBy.value
})

const handleViewByChange = (value: 20 | 50 | 100) => {
  artworksStore.viewBy = value
}

function changePage({ currentPage }: { currentPage: number }) {
  artworksStore.searchArtworks(artworksStore.currentSearchQuery, currentPage)
}

const { currentPage, currentPageSize, pageCount, isFirstPage, isLastPage, prev, next } =
  useOffsetPagination({
    total: pagination.value?.total,
    page: 1,
    pageSize: viewBy.value,
    onPageChange: changePage
  })
</script>

<template>
  <div class="pagination">
    <div v-if="pagination?.total" class="pagination__range">
      {{ fromPageCount }} - {{ toPageCount }} from
      {{ pagination?.total }}
    </div>
    <div class="">
      <label for="">
        Show by
        <select
          name="view-by"
          :disabled="!pagination?.total || pagination?.total <= artworksStore.viewBy"
          @change="
            handleViewByChange(Number(($event.target as HTMLSelectElement).value) as 20 | 50 | 100)
          "
        >
          <option
            v-for="option in viewByOptions"
            :key="option"
            :value="option"
            :selected="artworksStore.viewBy === option"
          >
            {{ option }}
          </option>
        </select>
      </label>
    </div>
    <div class="">
      <ul>
        <li>
          <button @click="prev">prev</button>
        </li>
        <li>current page: {{ currentPage }}</li>
        <li>
          <button @click="next">next</button>
        </li>
      </ul>
    </div>
  </div>
</template>

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

type TPageControlItem = number | '...'

const paginationControlList = computed(() => {
  const result: TPageControlItem[] = []

  if (!pagination.value) return result

  if (currentPage.value > 4) result.push(1)
  if (currentPage.value > 3 && currentPage.value <= 4) result.push(currentPage.value - 3)
  if (currentPage.value > 2 && currentPage.value <= 4) result.push(currentPage.value - 2)
  if (currentPage.value > 4) result.push('...')
  if (currentPage.value > 1) result.push(currentPage.value - 1)
  result.push(currentPage.value)

  if (currentPage.value === pagination.value?.total_pages) return result

  if (currentPage.value < pagination.value.total_pages - 1) result.push(currentPage.value + 1)
  if (pagination.value.total_pages - currentPage.value > 3) result.push('...')
  if (currentPage.value === pagination.value.total_pages - 2) result.push(currentPage.value + 2)
  if (currentPage.value === pagination.value.total_pages - 2) result.push(currentPage.value + 2)
  result.push(pagination.value.total_pages)

  return result
})

const handlePageClick = (targetPage: TPageControlItem) => {
  if (typeof targetPage === 'number') {
    currentPage.value = targetPage
  }
}
</script>

<template>
  <ul v-if="pagination?.total_pages" class="pagination-control">
    <li class="pagination-control__item">
      <button @click="prev">prev</button>
    </li>

    <li
      v-for="(page, index) in paginationControlList"
      :key="index"
      class="pagination-control__item"
      :class="{
        'pagination-control__item--current': currentPage === page
      }"
    >
      <button v-if="typeof page === 'number'" @click="handlePageClick(page)">
        {{ page }}
      </button>

      <span v-else>
        {{ page }}
      </span>
    </li>

    <li class="pagination-control__item">
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

  // .pagination-control__item
  &__item {
    // .pagination-control__item--current
    &--current button {
      font-weight: 700;
    }
  }
}
</style>

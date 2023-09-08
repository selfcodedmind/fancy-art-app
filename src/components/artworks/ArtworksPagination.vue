<script setup lang="ts">
import { useArtworksStore } from '@/stores/artworksStore'
import { computed } from 'vue'

const artworksStore = useArtworksStore()
const pagination = computed(() => artworksStore.pagination)
const viewBy = computed(() => artworksStore.viewBy)

const viewByOptions = [18, 54, 108]

const toPageCount = computed(() => {
  if (!pagination.value) return

  const isOnLastPage = pagination.value.current_page === pagination.value.total_pages

  return isOnLastPage ? pagination.value?.total : pagination.value?.current_page * viewBy.value
})

const handleViewByChange = (value: 18 | 54 | 108) => {
  artworksStore.viewBy = value
}
</script>

<template>
  <div class="pagination">
    <div v-if="pagination?.total" class="pagination__range">
      1 - {{ toPageCount }} from
      {{ pagination?.total }}
    </div>
    <div class="">
      <label class="view-by">
        Load by
        <select
          name="view-by"
          :disabled="!pagination?.total || pagination?.total <= artworksStore.viewBy"
          @change="
            handleViewByChange(Number(($event.target as HTMLSelectElement).value) as 18 | 54 | 108)
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
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;

  @include breakpoint(tablet-portrait) {
    justify-content: flex-start;
  }

  // .pagination__range
  &__range {
    white-space: nowrap;
  }
}

.view-by {
  white-space: nowrap;
}
</style>

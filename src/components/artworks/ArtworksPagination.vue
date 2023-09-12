<script setup lang="ts">
import { useArtworksStore } from '@/stores/artworksStore'
import { computed } from 'vue'
import type { TLoadBy } from '@/types/artworksTypes'
import Multiselect from '@vueform/multiselect'

const artworksStore = useArtworksStore()
const pagination = computed(() => artworksStore.pagination)

const loadByOptions: TLoadBy[] = [18, 36, 54]
const loadBy = computed({
  get: () => {
    return artworksStore.loadBy
  },
  set: (selectedLoadBy) => {
    return (artworksStore.loadBy = selectedLoadBy)
  }
})
</script>

<template>
  <div class="pagination">
    <div v-if="pagination?.total" class="pagination__range">
      1 - {{ artworksStore.artworks.length }} from
      {{ pagination?.total }}
    </div>
    <div class="">
      <label class="load-by">
        <span class="load-by__label-text"> Load by </span>
        <Multiselect
          v-model="loadBy"
          class="load-by__select"
          :options="loadByOptions"
          :can-clear="false"
        />
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

.load-by {
  display: flex;
  align-items: center;

  // .load-by__label-text
  &__label-text {
    margin-right: 20px;
    white-space: nowrap;
  }

  // .load-by__select
  &__select {
    min-width: 100px;
  }
}
</style>

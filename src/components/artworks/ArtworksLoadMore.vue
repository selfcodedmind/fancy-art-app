<template>
  <div class="load-more">
    <div class="load-more__text">You've viewed {{ viewedArtworks }} of {{ pagination?.total }}</div>
    <div class="load-more__button-wrap">
      <FaButton class="load-more__button" :is-loading="isLoading" @click="loadMore">
        LOAD MORE
      </FaButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import FaButton from '@/components/ui/FaButton.vue'
import { useArtworksStore } from '@/stores/artworksStore'
import { computed, ref } from 'vue'

const artworksStore = useArtworksStore()
const pagination = computed(() => artworksStore.pagination)
const viewBy = computed(() => artworksStore.viewBy)

const viewedArtworks = computed(() => {
  if (!pagination.value) return

  const isOnLastPage = pagination.value.current_page === pagination.value.total_pages

  return isOnLastPage ? pagination.value?.total : pagination.value?.current_page * viewBy.value
})

const isLoading = ref(false)
const loadMore = async () => {
  isLoading.value = true
  await artworksStore.loadMore()
  isLoading.value = false
}
</script>

<style scoped lang="scss">
.load-more {
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  text-align: center;

  // .load-more__text
  &__text {
    margin-bottom: 12px;
    color: var(--color-grey);
  }

  // .load-more__button
  &__button {
    width: 100%;
  }
}
</style>

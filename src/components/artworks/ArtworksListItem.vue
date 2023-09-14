<script setup lang="ts">
import { ref } from 'vue'
import type { TArtwork } from '@/types/artworksTypes'

const props = defineProps<{
  index: number
  artwork: TArtwork
}>()

import { computed } from 'vue'

const backgroundColor = computed(() => {
  if (!props.artwork.color) return 'hsl(100, 20%, 90%)'

  return `hsl(${props.artwork.color.h}, ${props.artwork.color.s}%, 95%)`
})

const notFound = ref(false)
</script>

<template>
  <li class="artwork">
    <div
      class="artwork__img-wrap"
      :class="{
        'artwork__img-wrap--not-found': notFound
      }"
    >
      <img
        class="artwork__img"
        :src="`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`"
        :alt="artwork.title"
        @error="notFound = true"
      />
    </div>

    <h2 class="artwork__title">{{ artwork.title }}</h2>

    <div class="artwork__description">
      <span class="artwork__author">{{ artwork.artist_title ?? 'Unknown author' }}</span>
      •
      <span class="artwork__date">{{ artwork.date_end }}</span>
    </div>
  </li>
</template>

<style scoped lang="scss">
.artwork {
  // .artwork__img-wrap
  &__img-wrap {
    position: relative;
    height: 480px;
    padding: 60px;
    margin-bottom: 16px;
    background: v-bind(backgroundColor);

    // .artwork__img-wrap--not-found
    &--not-found {
      &::after {
        position: absolute;
        inset: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 18px;
        text-align: center;
        content: 'Image not found';
        background: var(--color-white);
        border-radius: 8px;
      }
    }
  }

  // .artwork__img
  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  // .artwork__title
  &__title {
    margin-bottom: 4px;
    font-size: 22px;
    font-weight: 400;
    text-transform: uppercase;
  }

  // .artwork__description
  &__description {
    @include font-secondary;

    font-size: 18px;
    font-style: italic;
  }
}
</style>

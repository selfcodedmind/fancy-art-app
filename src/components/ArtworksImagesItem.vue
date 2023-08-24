<script setup lang="ts">
defineProps<{
  index: number
  imageId: string
}>()
</script>

<template>
  <li>
    <img
      v-motion
      class="img"
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :delay="index * 100"
      :src="`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`"
      alt=""
    />
  </li>
</template>

<style scoped lang="scss">
.img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
</style>

<template>
  <div class="no-results">
    <div class="no-results__title">sorry, no results found.</div>
    <div class="no-results__description">Please, try again with a different keyword or phrase.</div>
  </div>
</template>

<style scoped lang="scss">
.no-results {
  // .no-results__title
  &__title {
    margin-bottom: 12px;
    font-size: 22px;
    text-transform: uppercase;
  }

  // .no-results__description
  &__description {
    opacity: 0.4;
  }
}
</style>

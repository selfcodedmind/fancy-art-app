<template>
  <div class="not-found">
    <div class="not-found__code">404</div>
    <h1 class="not-found__title">
      The link you clicked may be broken or the page may have been removed.
    </h1>
    <div class="not-found__subtitle">Visit the homepage or contact me about the problem.</div>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  text-align: center;

  // .not-found__code
  &__code {
    font-size: 430px;
    line-height: 430px;
    letter-spacing: -4px;

    @include breakpoint(tablet-portrait) {
      font-size: 56px;
      line-height: normal;
      letter-spacing: normal;
    }
  }

  // .not-found__title
  &__title {
    font-size: 22px;
    font-weight: 400;
    line-height: 24px;
    text-transform: uppercase;
  }

  // .not-found__subtitle
  &__subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    opacity: 0.4;
  }
}
</style>

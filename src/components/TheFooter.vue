<template>
  <div class="footer">
    <div class="footer__wrap">
      <FaContainer>
        <div class="footer__inner">
          <span class="footer__author">Developed by roman popov</span>

          <div class="footer__links">
            <FaLink to="https://t.me/fingersdaggers" link-type="external"> TELEGRAM </FaLink>
          </div>
        </div>
      </FaContainer>
    </div>
  </div>
</template>
<script setup lang="ts">
import FaContainer from '@/components/ui/FaContainer.vue'
import FaLink from '@/components/ui/FaLink.vue'
</script>

<style scoped lang="scss">
.footer {
  padding-top: 40px;

  // .footer__wrap
  &__wrap {
    padding: 16px 0;
    border-top: 1px solid rgb(34 34 34 / 15%);
  }

  // .footer__inner
  &__inner {
    display: flex;
    gap: 30px;
    justify-content: space-between;
  }

  // .footer__author
  &__author {
    text-transform: uppercase;
  }
}
</style>

<template>
  <main class="about">
    <FaContainer>
      <h1>About</h1>
      <div>
        <p>This is Roman Popov pet project.</p>
        <p>You can contact me with:</p>
        <ul>
          <li>
            Email:
            <FaLink to="mailto:romanpopov.webdev@gmail.com">romanpopov.webdev@gmail.com</FaLink>
          </li>
          <li>Telegram: <FaLink to="https://t.me/fingersdaggers">@fingersdaggers</FaLink></li>
        </ul>
      </div>
    </FaContainer>
  </main>
</template>

<script setup lang="ts">
import FaContainer from '@/components/ui/FaContainer.vue'
import FaLink from '@/components/ui/FaLink.vue'
</script>
<style>
.about {
  padding: 100px 0;
}
</style>

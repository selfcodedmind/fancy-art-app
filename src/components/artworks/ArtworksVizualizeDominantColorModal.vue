<script setup lang="ts">
import FaaModal from '@/components/ui/FaModal.vue'

defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <FaaModal @close="$emit('close')">
    <template #title>Artworks dominant colors</template>
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi atque deserunt
      distinctio ea illo incidunt ipsa iste, itaque maiores quae quisquam vel. Amet architecto
      consequatur deleniti dolores ea enim explicabo ipsam iste magnam neque nesciunt nulla
      obcaecati, odit optio, porro praesentium quaerat quam qui quis recusandae reiciendis repellat
      reprehenderit soluta tempora temporibus tenetur, voluptatum. Alias consequatur debitis
      dignissimos doloribus et ex, ipsa minima, modi molestiae, necessitatibus nihil nisi nostrum
      optio unde ut. Architecto consequatur consequuntur dolor illum, minima nisi nulla officiis
      placeat quis repellendus rerum suscipit, veniam vitae! Ad asperiores, consequatur consequuntur
      deleniti eum illo laboriosam laudantium maiores molestias nisi non quaerat recusandae sapiente
      sint, suscipit, unde voluptas. Dignissimos dolorem est magni vero! Ab amet animi assumenda
      ducimus iste natus, nemo pariatur quae quibusdam quidem sequi similique voluptatem voluptates!
      Accusamus alias aliquam aut commodi consequuntur cum distinctio dolores dolorum ea eaque eos
      est eum facilis id magni mollitia nam natus nihil nostrum numquam perferendis provident,
      quaerat quidem quis quisquam sed similique sint soluta, veniam vero vitae voluptate voluptatem
      voluptatibus. Accusantium beatae dignissimos dolore magni modi nam nesciunt nihil nobis quae
      repellendus, sint vel vero? Adipisci commodi consectetur cupiditate enim eos et eum, fuga, hic
      illum iure, nam necessitatibus nemo nisi provident quas quis repellendus repudiandae soluta
      vitae voluptas. Aliquid corporis, deserunt dolorem eaque laboriosam libero maxime nesciunt
      nihil perspiciatis, quibusdam rem voluptas voluptates! A ad deleniti dolor dolorum earum,
      eligendi est et exercitationem iure libero natus nihil nostrum obcaecati odio officiis placeat
      quam quisquam similique, sint sunt tenetur unde veritatis. Ab amet blanditiis consectetur
      dicta doloremque ex incidunt nisi placeat quas voluptas. Autem consequatur distinctio
      doloremque eveniet, expedita fugit hic laudantium maxime, minus optio quis sapiente sequi
      soluta tempore tenetur totam, voluptatem. Accusantium amet atque dolor doloremque eligendi
      esse inventore maxime, minima optio quaerat quas, sapiente, unde voluptas! Ad animi cumque ea
      eos expedita facere maiores maxime, molestias non nostrum numquam odio recusandae rem suscipit
      tempora temporibus totam! Adipisci aliquid amet animi aspernatur commodi consequuntur cum
      dignissimos dolorem, dolores doloribus fugiat fugit harum impedit, incidunt ipsa ipsum iste
      necessitatibus quidem quisquam quo recusandae soluta vel veniam. Architecto cum distinctio
      harum, laboriosam magnam maxime, molestias mollitia nobis qui quod similique suscipit, velit
      voluptas voluptate voluptates? Amet asperiores at consequuntur corporis culpa deserunt
      distinctio enim et excepturi impedit ipsam laudantium magni modi odio officiis pariatur
      praesentium quae quam, quod rem sapiente, unde velit voluptatem. Aperiam aut autem hic libero
      nam nisi praesentium quisquam sunt, velit voluptates! Debitis eius esse, fugiat molestiae quo
      totam voluptatibus. A accusamus accusantium alias, at cum, deserunt earum eos error expedita
      explicabo ipsam ipsum iste laboriosam minus molestias mollitia nostrum quae qui quidem
    </template>
  </FaaModal>
</template>

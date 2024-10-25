<template>
  <section>
    <h1>{{ comic?.title }}</h1>
    <img
      :src="`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`"
      :alt="`${comic?.title}`"
    />
    <ul>
      <li v-for="(variant, index) in comic?.variants" :key="index">
        <a :href="`${variant.resourceURI}`">{{ variant.name }}</a>
      </li>
    </ul>
  </section>
  <pre>{{ comic }}</pre>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Result as resultDetalle } from '@/interfaces/DetailComicResponse'
import { detailComic } from '@/common/utils.functions'

const comic = ref<resultDetalle>()

const props = defineProps({
  id: { type: String, required: true },
})

onMounted(async () => {
  comic.value = await detailComic(props.id)
})
</script>

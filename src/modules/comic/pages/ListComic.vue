<template>
  <div>
    <h1>COMICS</h1>
    <div v-if="isLoading" class="loader"></div>
    <div v-else class="flex flex-col">
      <ComicCard :comics="comics" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ComicInterface } from '@/interfaces/ComicInterface'
import { arrayComics } from '@/common/utils.functions'
import ComicCard from '@/modules/comic/components/ComicCard.vue'

const isLoading = ref(true)
const comics = ref<ComicInterface[]>([])

onMounted(async () => {
  const arrayNew = await arrayComics()
  comics.value = arrayNew
  isLoading.value = comics.value.length < 0
})
</script>

<style scoped></style>

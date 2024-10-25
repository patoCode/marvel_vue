<template>
  <li
    v-for="comic in props.comics"
    :key="comic.id"
    class="flex flex-row justify-between items-center rounded-lg bg-white m-4 h-96 p-4"
  >
    <img
      :src="comic.thumb"
      alt=""
      class="flex w-64 rounded-lg h-full shadow-lg"
    />
    <div class="flex flex-col text-slate-500 p-2 h-full justify-start">
      <span class="flex items-center text-[16px] font-bold uppercase mb-4">{{
        comic.name
      }}</span>
      <div class="flex flex-col justify-between flex-1">
        <p class="text-[12px] uppercase">
          {{ comic.abstract?.substring(0, 50) }}
        </p>
        <RouterLink
          :to="{ name: 'detail', params: { id: comic.id } }"
          class="items-center rounded-lg p-2 bg-red-100 text-red-950 font-bold uppercase text-[10px] text-center hover:bg-red-950 hover:text-white"
          >Ver m&aacute;s</RouterLink
        >
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { ComicInterface } from '@/interfaces/ComicInterface'
const props = defineProps({
  comics: { type: Array<ComicInterface>, required: true },
})
</script>

<style scoped></style>

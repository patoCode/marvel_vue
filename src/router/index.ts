import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/modules/home/LayoutHome.vue'),
    },
    {
      path: '/comics',
      name: 'comics',
      component: () => import('@/modules/comic/ComicLayout.vue'),
      children: [
        {
          path: '/comics/',
          name: 'list-comic',
          component: () => import('@/modules/comic/pages/ListComic.vue'),
          props: true,
        },
        {
          path: '/comics/detail/:id',
          name: 'detail',
          component: () => import('@/modules/comic/pages/DetailComic.vue'),
          props: true,
        },
      ],
    },
  ],
})

import type { RouteRecordRaw } from 'vue-router';

export const HOME_ROUTES: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home',
    component: () => import('./views/HomeView.vue'),
  },
];

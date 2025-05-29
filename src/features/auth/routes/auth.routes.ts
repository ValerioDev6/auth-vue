import type { RouteRecordRaw } from 'vue-router';

export const AUTH_ROUTES: RouteRecordRaw[] = [
  {
    path: '',
    redirect: 'login',
  },
  {
    path: 'login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: 'register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
  },
];

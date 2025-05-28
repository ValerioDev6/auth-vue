import type { RouteRecordRaw } from 'vue-router';
export const AUTH_ROUTES: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  component: () => import('@/features/auth/layouts/AuthLayout.vue'),
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/features/auth/views/LoginView.vue'),
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('@/features/auth/views/RegisterView.vue'),
    },
  ],
};

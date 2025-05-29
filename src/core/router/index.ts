import { ADMIN_ROUTES } from '@/features/admin/router/admin.routes';
import isAuthenticatedGuard from '@/features/auth/guard/is-authenticated.guard';
import isnotAuthenticatedGuard from '@/features/auth/guard/is-not-authenticated.guard';
import { AUTH_ROUTES } from '@/features/auth/routes/auth.routes';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  routes: [
    {
      path: '/',
      redirect: '/auth/login',
    },
    {
      path: '/auth',
      beforeEnter: [isnotAuthenticatedGuard],
      component: () => import('@/features/auth/layouts/AuthLayout.vue'),
      children: AUTH_ROUTES,
    },
    {
      path: '/admin',
      beforeEnter: [isAuthenticatedGuard],
      component: () => import('@/features/admin/layouts/AdminLayout.vue'),
      children: ADMIN_ROUTES,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/auth/login',
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;

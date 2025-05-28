import { LAYOUT_ROUTES } from '@/features/admin/router/admin.routes';
import { AUTH_ROUTES } from '@/features/auth/routes/auth.routes';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  routes: [
    LAYOUT_ROUTES,
    AUTH_ROUTES,
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'login' },
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;

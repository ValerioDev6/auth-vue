import { getAdminModuleRoutes } from '@/features/admin/router/admin-features.routes';
import type { RouteRecordRaw } from 'vue-router';

export const LAYOUT_ROUTES: RouteRecordRaw = {
  path: '/admin',
  name: 'admin',
  component: () => import('@/features/admin/layouts/AdminLayout.vue'),
  children: [
    {
      path: '',
      redirect: { name: 'admin-dashboard' },
    },
    {
      path: 'dashboard',
      name: 'admin-dashboard',
      component: () => import('@/features/home/views/HomeView.vue'),
    },
    // Cargar dinámicamente todas las rutas de los módulos
    ...getAdminModuleRoutes(),
  ],
};
// {
//   path: 'usuarios',
//   // meta: { requiresAuth: true, roles: ['ADMIN'] }, // Para guards después
//   children: () => import('@/features/users/user.route').then((m) => m.USER_ROUTES),
// },

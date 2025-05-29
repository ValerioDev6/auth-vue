import { USER_ROUTES } from '@/features/users/routes/user.routes';
import type { RouteRecordRaw } from 'vue-router';

export const ADMIN_ROUTES: RouteRecordRaw[] = [
  {
    path: '',
    redirect: 'dashboard',
  },
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () => import('@/features/home/views/HomeView.vue'),
  },
  {
    path: 'usuarios',
    // meta: {
    //   requiresAuth: true,
    //   roles: ['ADMIN', 'USER_MANAGER'],
    // },
    children: USER_ROUTES, // ✅ Esto SÍ funciona
  },
];
// {
//   path: 'usuarios',
//   // meta: { requiresAuth: true, roles: ['ADMIN'] }, // Para guards después
//   children: () => import('@/features/users/user.route').then((m) => m.USER_ROUTES),
// },

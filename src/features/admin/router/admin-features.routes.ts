import { USERS_ROUTES } from '@/features/users/user.route';
import type { RouteRecordRaw } from 'vue-router';

export const getAdminModuleRoutes = (): RouteRecordRaw[] => {
  return [
    ...USERS_ROUTES,
    // ...PRODUCTS_ROUTES,
    // ...ORDERS_ROUTES,
    // Aquí puedes seguir agregando más módulos
  ];
};

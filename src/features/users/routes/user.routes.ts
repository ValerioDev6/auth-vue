import type { RouteRecordRaw } from 'vue-router';

export const USER_ROUTES: RouteRecordRaw[] = [
  {
    path: '',
    redirect: 'listado',
  },
  {
    path: 'listado',
    name: 'users-list',
    component: () => import('../views/UsersListView.vue'),
    // meta: {
    //   permissions: ['users.read'],
    // },
  },
  {
    path: 'crear',
    name: 'users-create',
    component: () => import('../views/UserCreateView.vue'),
    // meta: {
    //   permissions: ['users.create'],
    // },
  },
  // {
  //   path: ':id/editar',
  //   name: 'users-edit',
  //   component: () => import('../pages/UserEditPage.vue'),
  //   meta: {
  //     permissions: ['users.update'],
  //   },
  // },
  // {
  //   path: ':id',
  //   name: 'users-detail',
  //   component: () => import('../pages/UserDetailPage.vue'),
  //   meta: {
  //     permissions: ['users.read'],
  //   },
  // },
];

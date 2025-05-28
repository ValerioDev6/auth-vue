import type { RouteRecordRaw } from 'vue-router';

export const USERS_ROUTES: RouteRecordRaw[] = [
  {
    path: 'users',
    name: 'users-dashboard',
    component: () => import('./views/UsersListView.vue'),
  },
  {
    path: 'users/create',
    name: 'users-create',
    component: () => import('./views/UserCreateView.vue'),
  },
  // {
  //   path: 'users/:id/edit',
  //   name: 'users-edit',
  //   component: () => import('../views/UserEditView.vue'),
  // },
  // {
  //   path: 'users/:id',
  //   name: 'users-detail',
  //   component: () => import('../views/UserDetailView.vue'),
  // },
];

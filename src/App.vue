<template>
  <notifications />
  <RouterView />
</template>

<script setup lang="ts">
import { useAuthStore } from '@/features/auth/stores/auth.store';
import { RouterView, useRoute, useRouter } from 'vue-router';
import { AuthStatus } from './features/auth/interfaces/auth-status.enum';

const router = useRouter();
const route = useRoute();

const authStore = useAuthStore();

authStore.$subscribe((_, state) => {
  if (state.authStatus === AuthStatus.Checking) {
    authStore.checkAuthStatus();
    return;
  }

  // if (route.path.includes('/auth') && state.authStatus === AuthStatus.Authenticated) {
  //   router.replace('/admin/dashboard');
  //   return;
  // }
});
</script>

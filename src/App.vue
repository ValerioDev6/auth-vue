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

  // ✅ Si está en /auth y se autentica -> ir al dashboard
  // if (route.path.includes('/auth') && state.authStatus === AuthStatus.Authenticated) {
  //   router.replace('/admin/dashboard');
  //   return;
  // }

  // ✅ Si hace logout -> ir al login
  if (state.authStatus === AuthStatus.UnAuthenticated && !route.path.includes('/auth')) {
    router.replace('/auth/login');
    return;
  }
});
</script>

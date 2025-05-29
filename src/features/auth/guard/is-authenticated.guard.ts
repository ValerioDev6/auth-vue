import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { useAuthStore } from '../stores/auth.store';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();

  try {
    await authStore.checkAuthStatus();

    // Si NO está autenticado, redirigir al login
    if (authStore.authStatus === AuthStatus.UnAuthenticated) {
      next({ path: '/auth/login' }); // ✅ CORREGIDO: Redirigir al login
    } else {
      next(); // Permitir acceso al admin
    }
  } catch (error) {
    console.error('Error in isAuthenticated guard:', error);
    next({ path: '/auth/login' }); // En caso de error, redirigir al login
  }
};

export default isAuthenticatedGuard;

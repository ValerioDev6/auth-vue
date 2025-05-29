import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { useAuthStore } from '../stores/auth.store';

const isNotAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();

  try {
    await authStore.checkAuthStatus();

    // Si está autenticado, redirigir al dashboard
    if (authStore.authStatus === AuthStatus.Authenticated) {
      next({ path: '/admin/dashboard' });
    } else {
      // Si NO está autenticado, permitir acceso a login
      next();
    }
  } catch (error) {
    console.error('Error in isNotAuthenticated guard:', error);
    next(); // Permitir acceso en caso de error
  }
};

export default isNotAuthenticatedGuard;

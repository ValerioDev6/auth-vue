import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { User } from '../interfaces/auth-response.interface';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { AuthService } from '../services/auth.service';

export const useAuthStore = defineStore('auth-store', () => {
  const authService = new AuthService();

  const authStatus = ref<AuthStatus>(AuthStatus.Checking);
  const user = ref<User | undefined>();
  const token = ref(useLocalStorage('token', ''));

  const login = async (email: string, password: string) => {
    try {
      const loginResp = await authService.login(email, password);
      if (!loginResp.ok) {
        return false;
      }

      user.value = loginResp.user;
      token.value = loginResp.token;
      authStatus.value = AuthStatus.Authenticated;

      return true;
    } catch (error) {
      console.log(error);
      return logout();
    }
  };

  const register = async (email: string, password: string, roleId: string) => {
    try {
      const registerResp = await authService.register(email, password, roleId);
      if (!registerResp.ok) {
        logout();
        return { ok: false, message: registerResp.message };
      }
      user.value = registerResp.user;
      token.value = registerResp.token;
      authStatus.value = AuthStatus.Authenticated;

      return { ok: true, message: 'Usuario Creado exitosamente' };
    } catch (error) {
      console.log(error);
      return { ok: false, message: 'Error al registar el usuario' };
    }
  };

  const logout = () => {
    authStatus.value = AuthStatus.UnAuthenticated;
    (user.value = undefined), (token.value = '');
    return false;
  };

  const checkAuthStatus = async (): Promise<boolean> => {
    try {
      const statusResp = await authService.checkAuthStatus();
      if (!statusResp.ok) {
        logout();
        return false;
      }
      authStatus.value = AuthStatus.Authenticated;
      user.value = statusResp.user;
      token.value = statusResp.token;

      return true;
    } catch {
      logout();
      return false;
    }
  };

  return {
    user,
    token,
    authStatus,

    // getters
    isCheking: computed(() => authStatus.value === AuthStatus.Checking),
    isAuhtenticared: computed(() => authStatus.value === AuthStatus.Authenticated),
    username: computed(() => user.value?.email),

    // actions
    login,
    register,
    checkAuthStatus,
  };
});

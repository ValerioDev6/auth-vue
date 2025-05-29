import { readonly, ref } from 'vue';
import type { Info, User } from '../interfaces/users-response.interface';
import { UsersService } from '../services/users.service';

export const userUsersComposable = () => {
  const userService = new UsersService();

  // State local (no se comparte entre componentes)
  const users = ref<User[]>([]);
  const paginationInfo = ref<Info | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // actions

  const fetchUsers = async (page: number = 1, limit: number = 10) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await userService.getAllUsers(page, limit);
      if (response.ok) {
        users.value = response.data.users;
        paginationInfo.value = response.data.info;
      } else {
        error.value = response.message;
      }
    } catch {
      error.value = 'Error inesperado al cargar usaurios';
    } finally {
      loading.value = false;
    }
  };

  return {
    // state
    users: readonly(users),
    // actions
    fetchUsers,
  };
};

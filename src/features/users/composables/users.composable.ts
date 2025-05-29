// composables/useUsers.ts
import { ref } from 'vue';
import type { Info, User } from '../interfaces/users-response.interface';
import { UsersService } from '../services/users.service';

export const useUsers = () => {
  const userService = new UsersService();

  // Estado simple
  const users = ref<User[]>([]);
  const paginationInfo = ref<Info | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Solo una función para cargar usuarios
  const fetchUsers = async (page: number = 1, limit: number = 1, search: string = '') => {
    loading.value = true;
    error.value = null;

    try {
      const response = await userService.getAllUsers(page, limit, search);

      if (response.ok) {
        users.value = response.data.users;
        paginationInfo.value = response.data.info;
      } else {
        error.value = response.message;
      }
    } catch (err) {
      error.value = `Error al cargar usuarios: ${err}`;
    } finally {
      loading.value = false;
    }
  };

  return {
    users,
    paginationInfo,
    loading,
    error,
    fetchUsers,
  };
};

import { NEST_API } from '@/core/api/axios';
import { isAxiosError } from 'axios';
import type { IUsersResponse } from '../interfaces/users-response.interface';

interface GetUserError {
  ok: false;
  message: string;
}

interface GetUserSucces {
  ok: true;
  data: IUsersResponse;
}

export class UsersService {
  async getAllUsers(page: number, limit: number): Promise<GetUserError | GetUserSucces> {
    try {
      const { data } = await NEST_API.get<IUsersResponse>(`/user?page=${page}&limit=${limit}`);
      return {
        ok: true,
        data,
      };
    } catch (error) {
      if (isAxiosError(error)) {
        return {
          ok: false,
          message: 'Error al obtener usuarios',
        };
      }
      return {
        ok: false,
        message: 'Error inesperado',
      };
    }
  }
}

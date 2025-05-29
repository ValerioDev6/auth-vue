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
  async getAllUsers(
    page: number,
    limit: number,
    search: string = '',
  ): Promise<GetUserError | GetUserSucces> {
    try {
      const { data } = await NEST_API.get<IUsersResponse>('/user', {
        params: {
          page,
          limit,
          search,
        },
      });
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
  async createUser(data: any) {
    try {
      const resp = await NEST_API.post('/user', data);

      return {
        data: resp.data,
      };
    } catch (error) {
      console.log(error);
    }
  }
}

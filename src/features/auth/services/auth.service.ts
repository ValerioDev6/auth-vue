import { NEST_API } from '@/core/api/axios';
import { isAxiosError } from 'axios';
import type { IAuthResponse, User } from '../interfaces/auth-response.interface';
interface LoginError {
  ok: false;
  message: string;
}

interface LoginSuccess {
  ok: true;
  user: User;
  token: string;
}

interface RegisterError {
  ok: false;
  message: string;
}

interface RegisterSuccess {
  ok: true;
  user: User;
  token: string;
}

interface CheckError {
  ok: false;
  message?: string;
}

interface CheckSucces {
  ok: true;
  user: User;
  token: string;
}

export class AuthService {
  async login(email: string, password: string): Promise<LoginError | LoginSuccess> {
    try {
      const { data } = await NEST_API.post<IAuthResponse>('/auth/login', {
        email,
        password,
      });

      return {
        ok: true,
        user: data.user,
        token: data.access_token,
      };
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 401) {
          return {
            ok: false,
            message: 'Usuario o contraseña incorrecta',
          };
        }
        throw new Error('No se pudo realizar la petición');
      }
    }

    return {
      ok: false,
      message: 'Error inesperado',
    };
  }

  async register(
    email: string,
    password: string,
    roleId: string,
  ): Promise<RegisterError | RegisterSuccess> {
    try {
      const { data } = await NEST_API.post<IAuthResponse>('/auth/register', {
        email,
        password,
        roleId: parseInt(roleId),
      });

      return {
        ok: true,
        user: data.user,
        token: data.access_token,
      };
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        message: 'No se puede encontra al usauiro',
      };
    }
  }
  async checkAuthStatus(): Promise<CheckError | CheckSucces> {
    try {
      const localToken = localStorage.getItem('token');
      if (!localToken || localToken.trim().length === 0) {
        return { ok: false };
      }
      const { data } = await NEST_API.get<IAuthResponse>('/auth/check-auth-status');

      return {
        ok: true,
        user: data.user,
        token: data.access_token,
      };
    } catch (error) {
      console.log(error);
      return { ok: false };
    }
  }
}

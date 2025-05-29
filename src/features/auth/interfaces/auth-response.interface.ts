export interface IAuthResponse {
  user: User;
  access_token: string;
}

export interface User {
  id: number;
  email: string;
  avatar: null;
  roles: Roles;
}

export interface Roles {
  name: string;
  role_permissions: RolePermission[];
}

export interface RolePermission {
  permissions: Permissions;
}

export interface Permissions {
  action: string;
  objects: Objects;
}

export interface Objects {
  name: string;
}

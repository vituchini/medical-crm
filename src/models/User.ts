import { ACCESS, Roles } from '../common/constants/roles';
import { LocalStorage, SessionStorage } from '../utils/storage';

import { PATHS } from '../common/constants/routes';
import UrlPattern from 'url-pattern';
import { authService } from '../services';

export default class User {
  _id!: string;
  email!: string;
  username!: string;
  firstname?: string;
  lastname?: string;
  prefix?: string;
  gender!: number;
  phoneno!: string;
  role!: Roles;
  token!: string; // Authorization token
  DOB?: string;
  care_approval?: number;
  initials?: string;
  is_active?: boolean;
  nameusage?: number;
  notification?: boolean;
  transaction_count?: number;

  static async login(email: string, password: string, storage?: boolean): Promise<User> {
    window.storage = storage ? LocalStorage : SessionStorage;
    window.storage.clear();

    const user = await authService.login(email, password);
    window.storage.set('access_token', user.token);
    window.token = user.token;
    return user;
  }

  static async me(): Promise<User> {
    return await authService.me();
  }

  constructor(data: any) {
    Object.assign(this, data);
  }

  get routeAccess(): boolean {
    return ACCESS[this.role].some((route) => {
      const pattern = new UrlPattern(route);
      return pattern.match(window.location.pathname);
    });
  }

  get defaultRoute(): string {
    if (!this.role) return PATHS.LOGOUT;
    return ACCESS[this.role][0];
  }

  logout(): void {
    window.token = null;
    window.storage.clear();
  }
}

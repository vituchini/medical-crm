import User from '../models/User';
import { api } from '../api/api';

function login(email: string, password: string): Promise<User> {
  return api.post('/signin', { isPublic: true, data: { email, password } }).then(({ user }) => new User(user));
}

function me(): Promise<User> {
  return api.get('/login/user').then(({ result }) => new User(result));
}

export default {
  login,
  me,
};

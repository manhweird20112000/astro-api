import { AuthRepository } from '@/modules/admin/auth/repository';

export class AuthService {
  constructor(private repository: AuthRepository) {}
  login() {
    console.log('sign in');
  }
}

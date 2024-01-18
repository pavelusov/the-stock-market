import firebaseUserRepository from '@/repositories/FirebaseUserRepository';
import UserRepository from '@/repositories/UserRepository';
import { User, UserResponse } from '@/repositories/types';

export class UserService {
  private repository: UserRepository = firebaseUserRepository;

  getUser({ email }: { email: string }): Promise<UserResponse> {
    return this.repository.getUser({ email });
  }

  createUser(user: User): void {
    this.repository.createUser(user);
  }
}

const userService = new UserService();
export default userService;

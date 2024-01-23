import UserRepository from '@/repositories/user/UserRepository';
import { User, UserResponse } from '@/repositories/user/types';
import userRepository from "@/repositories/user";

export class UserService {
  private repository: UserRepository = userRepository;

  getUser({ email }: { email: string }): Promise<UserResponse> {
    return this.repository.getUser({ email });
  }

  createUser(user: User): void {
    this.repository.createUser(user);
  }
}

const userService = new UserService();
export default userService;

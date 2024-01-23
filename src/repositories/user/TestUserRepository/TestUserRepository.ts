import UserRepository from "@/repositories/user/UserRepository";
import { User, UserResponse } from "@/repositories/user/types";

class TestUserRepository implements UserRepository {
  private static instance: UserRepository;
  private constructor() {}

  static getInstance() {
    if (!TestUserRepository.instance) {
      TestUserRepository.instance = new TestUserRepository();
    }

    return TestUserRepository.instance;
  }

  createUser(user: User): void {}

  getUser({ email }: { email: string }): Promise<UserResponse> {
    const user: User = {
      name: 'Test name',
      email: 'test@email.com',
      image: 'http://testimage.com',
    };

    const users = [user];
    const userData: UserResponse = users.find(data => data.email === email) || null;

    return Promise.resolve(userData);
  }

}

export default TestUserRepository.getInstance();

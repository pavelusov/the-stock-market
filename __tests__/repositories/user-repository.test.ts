import testUserRepository from '@/repositories/user/TestUserRepository';
import { User, UserResponse } from "@/repositories/user/types";

describe('Testing User Repository', () => {
  const testUser: User = {
    name: 'Test name',
    email: 'test@email.com',
    image: 'http://testimage.com',
  };

  it('should return a test user by email', async () => {
    const user = await testUserRepository.getUser({ email: testUser.email });
    expect(user?.email).toBe(testUser.email);
  })

  it('should return null if not exist user with an email', async () => {
    const user: UserResponse = await testUserRepository.getUser({ email: 'bad-test@email' });
    expect(user?.email || user).toBeNull();
  })

  it('should exist a name field and value', async () => {
    const user = await testUserRepository.getUser({ email: testUser.email }) as User;
    expect(user.name).toBe(testUser.name);
  })

  it('should exist a image field and value', async () => {
    const user = await testUserRepository.getUser({ email: testUser.email }) as User;
    expect(user.image).toBe(testUser.image);
  })

  it('should return undefined if will create a new user', async () => {
    const user = await testUserRepository.createUser(testUser);
    expect(user).toBeUndefined();
  })
});

import UserRepository from '@/repositories/UserRepository';
import { User, UserResponse } from '@/repositories/types';
import { db } from './firebase-init';

class FirebaseUserRepository implements UserRepository {
  private static instance: UserRepository;
  private db = db.collection('user');
  private constructor() {}

  static getInstance() {
    if (!FirebaseUserRepository.instance) {
      FirebaseUserRepository.instance = new FirebaseUserRepository();
    }

    return FirebaseUserRepository.instance;
  }

  async getUser({ email }: { email: string }): Promise<UserResponse> {
    const data =  await this.db.where('email', '==', email).get();

    let user: UserResponse = null;

    data.forEach(u => {
      const userData = u.data();

      if (userData) {
        user = userData as User;
      }
    })

    return user;
  }

  createUser(user: User): void {
    this.db.doc(user.email).set(user);
  }
}

export default FirebaseUserRepository.getInstance();

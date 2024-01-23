import { DBVendor } from "@/repositories/user/types";
import firebaseUserRepository from '@/repositories/user/FirebaseUserRepository';
import testUserRepository from '@/repositories/user/TestUserRepository';

export default class UserRepositoryFactory {
  private readonly vendor: DBVendor;

  constructor(vendor: DBVendor) {
    this.vendor = vendor;
  }

  create() {
    switch (this.vendor) {
      case DBVendor.Firebase:
        return firebaseUserRepository;

      default:
        return testUserRepository;
    }
  }
}

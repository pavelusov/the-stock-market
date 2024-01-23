import { User, UserResponse } from "./types";

export default abstract class UserRepository {
  abstract getUser({ email }: { email: string }): Promise<UserResponse>;
  abstract createUser(user: User): void;
}

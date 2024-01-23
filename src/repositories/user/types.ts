export type User = {
  name: string;
  image: string;
  email: string;
}

export type UserResponse = User | null;

export enum DBVendor {
  Firebase = 'firebase',
  Test = 'test',
}

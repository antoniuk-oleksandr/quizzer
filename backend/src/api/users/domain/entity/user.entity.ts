/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Exclude } from 'class-transformer';

export class UserEntity {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}

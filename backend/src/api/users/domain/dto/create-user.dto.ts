import { UserEntity } from '../entity/user.entity';

export type CreateUserDto = Pick<UserEntity, 'email' | 'username'> & {
  password: string;
};

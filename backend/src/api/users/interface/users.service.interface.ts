import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UserEntity } from '../domain/entity/user.entity';

export interface UsersService {
  createUser(user: CreateUserDto): Promise<UserEntity>;
}

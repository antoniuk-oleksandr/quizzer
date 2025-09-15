import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UserEntity } from '../domain/entity/user.entity';

export interface UsersRepository {
  create(user: CreateUserDto): Promise<UserEntity>;
}

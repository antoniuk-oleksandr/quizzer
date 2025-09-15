import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import type { UsersRepository } from '../interface/users.repository.interface';
import { UsersService } from '../interface/users.service.interface';
import { USERS_REPOSITORY } from '../constants/users.constants';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UserEntity } from '../domain/entity/user.entity';
import { UserAlreadyExistsException } from '../exception/user-already-exists.exception';
import { Prisma } from 'generated/prisma';

@Injectable()
export class UsersServiceImpl implements UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository,
  ) {}

  async createUser(user: CreateUserDto): Promise<UserEntity> {
    try {
      return await this.usersRepository.create(user);
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new UserAlreadyExistsException();
        }
      }
      throw new InternalServerErrorException();
    }
  }
}

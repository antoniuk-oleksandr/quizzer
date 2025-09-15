import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../interface/users.repository.interface';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UserEntity } from '../domain/entity/user.entity';
import { PrismaService } from 'src/prisma/service/prisma.service';

@Injectable()
export class UsersRepositoryImpl implements UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: CreateUserDto): Promise<UserEntity> {
    return await this.prismaService.user.create({
      data: user,
      select: {
        id: true,
        username: true,
        password: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}

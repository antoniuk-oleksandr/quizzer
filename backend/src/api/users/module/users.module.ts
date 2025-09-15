import { Module } from '@nestjs/common';
import { UsersServiceImpl } from '../service/users.service';
import { UsersRepositoryImpl } from '../repository/users.repository';
import { USERS_REPOSITORY, USERS_SERVICE } from '../constants/users.constants';
import { PrismaModule } from 'src/prisma/module/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: USERS_SERVICE,
      useClass: UsersServiceImpl,
    },
    {
      provide: USERS_REPOSITORY,
      useClass: UsersRepositoryImpl,
    },
  ],
  exports: [USERS_SERVICE, USERS_REPOSITORY],
})
export class UsersModule {}

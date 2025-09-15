import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/api/auth/module/auth.module';
import { UsersModule } from 'src/api/users/module/users.module';
import appConfig from 'src/config/app/app.config';
import { PrismaModule } from 'src/prisma/module/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    PrismaModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}

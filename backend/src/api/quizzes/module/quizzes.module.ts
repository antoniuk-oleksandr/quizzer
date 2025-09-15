import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/module/prisma.module';
import { QuizzesController } from '../controller/quizzes.controller';
import {
  QUIZZES_REPOSITORY,
  QUIZZES_SERVICE,
} from '../constants/quizzes.constants';
import { QuizzesServiceImpl } from '../service/quizzes.service';
import { QuizzesRepositoryImpl } from '../repository/quizzes.repository';
import { QuizMapper } from '../mapper/quiz.mapper';

@Module({
  imports: [PrismaModule],
  controllers: [QuizzesController],
  providers: [
    QuizMapper,
    {
      provide: QUIZZES_SERVICE,
      useClass: QuizzesServiceImpl,
    },
    {
      provide: QUIZZES_REPOSITORY,
      useClass: QuizzesRepositoryImpl,
    },
  ],
})
export class QuizzesModule {}

import { Inject, Injectable } from '@nestjs/common';
import { QuizzesService } from '../interface/quizzes.service.interface';
import { CreateQuizDto } from '../domain/dto/create-quiz.dto';
import type { QuizzesRepository } from '../interface/quizzes.repository.interface';
import { QUIZZES_REPOSITORY } from '../constants/quizzes.constants';
import { QuizMapper } from '../mapper/quiz.mapper';
import { QuizDto } from '../domain/dto/quiz.dto';

@Injectable()
export class QuizzesServiceImpl implements QuizzesService {
  constructor(
    @Inject(QUIZZES_REPOSITORY)
    private readonly quizzesRepository: QuizzesRepository,
    private readonly quizMapper: QuizMapper,
  ) {}

  async createQuiz(
    createQuizDto: CreateQuizDto,
    userId: number,
  ): Promise<QuizDto> {
    const createQuiz = await this.quizzesRepository.create(
      createQuizDto,
      userId,
    );

    return this.quizMapper.toDto(createQuiz);
  }
}

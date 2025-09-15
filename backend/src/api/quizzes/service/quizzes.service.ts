import { Inject, Injectable } from '@nestjs/common';
import { QuizzesService } from '../interface/quizzes.service.interface';
import { CreateQuizDto } from '../domain/dto/create-quiz.dto';
import type { QuizzesRepository } from '../interface/quizzes.repository.interface';
import { QUIZZES_REPOSITORY } from '../constants/quizzes.constants';
import { QuizMapper } from '../mapper/quiz.mapper';
import { QuizDto } from '../domain/dto/quiz.dto';
import { QuizNotFoundException } from '../exception/quiz-not-found.exception';
import { QuizSummaryDto } from '../domain/dto/quiz-summary.dto';

@Injectable()
export class QuizzesServiceImpl implements QuizzesService {
  constructor(
    @Inject(QUIZZES_REPOSITORY)
    private readonly quizzesRepository: QuizzesRepository,
    private readonly quizMapper: QuizMapper,
  ) {}

  async getAllQuizzes(): Promise<QuizSummaryDto[]> {
    const rawQuizzes = await this.quizzesRepository.findAll();
    return this.quizMapper.toSummary(rawQuizzes);
  }

  async deleteQuiz(id: number, userId: number): Promise<void> {
    try {
      await this.quizzesRepository.delete(id, userId);
    } catch {
      throw new QuizNotFoundException();
    }
  }

  async getQuizById(id: number): Promise<QuizDto | null> {
    const quiz = await this.quizzesRepository.findById(id);
    if (!quiz) {
      throw new QuizNotFoundException();
    }

    return this.quizMapper.toDto(quiz);
  }

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

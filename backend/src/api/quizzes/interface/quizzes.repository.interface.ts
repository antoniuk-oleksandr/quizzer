import { CreateQuizDto } from '../domain/dto/create-quiz.dto';
import { RawQuizSummaryDto } from '../domain/dto/raw-quiz-summary.dto';
import { QuizEntity } from '../domain/entity/quiz.entity';

export interface QuizzesRepository {
  create(createQuizDto: CreateQuizDto, userId: number): Promise<QuizEntity>;
  findById(id: number): Promise<QuizEntity | null>;
  delete(id: number, userId: number): Promise<void>;
  findAll(): Promise<RawQuizSummaryDto[]>;
}

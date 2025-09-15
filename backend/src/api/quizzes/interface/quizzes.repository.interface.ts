import { CreateQuizDto } from '../domain/dto/create-quiz.dto';
import { QuizEntity } from '../domain/entity/quiz.entity';

export interface QuizzesRepository {
  create(createQuizDto: CreateQuizDto, userId: number): Promise<QuizEntity>;
  findById(id: number): Promise<QuizEntity | null>;
}

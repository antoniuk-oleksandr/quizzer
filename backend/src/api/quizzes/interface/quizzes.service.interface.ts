import { CreateQuizDto } from '../domain/dto/create-quiz.dto';
import { QuizDto } from '../domain/dto/quiz.dto';

export interface QuizzesService {
  createQuiz(createQuizDto: CreateQuizDto, userId: number): Promise<QuizDto>;
}

import { CreateQuizDto } from '../domain/dto/create-quiz.dto';
import { QuizSummaryDto } from '../domain/dto/quiz-summary.dto';
import { QuizDto } from '../domain/dto/quiz.dto';

export interface QuizzesService {
  createQuiz(createQuizDto: CreateQuizDto, userId: number): Promise<QuizDto>;
  getQuizById(id: number): Promise<QuizDto | null>;
  deleteQuiz(id: number, userId: number): Promise<void>;
  getAllQuizzes(): Promise<QuizSummaryDto[]>;
}

import { QuestionDto } from './question.dto';

export type QuizDto = {
  id: number;
  title: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  questions: QuestionDto[];
};

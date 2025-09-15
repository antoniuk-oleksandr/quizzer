import { QuestionEntity } from './question.entity';

export class QuizEntity {
  id: number;
  title: string;
  userId: number;
  questions: QuestionEntity[];
  createdAt: Date;
  updatedAt: Date;
}

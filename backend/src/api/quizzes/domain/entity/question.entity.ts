import { QuestionType } from 'generated/prisma';
import { CorrectAnswerEntity } from './correct-answer.entity';
import { OptionEntity } from './optio.entity';

export class QuestionEntity {
  id: number;
  text: string;
  type: QuestionType;
  quizId: number;
  options: OptionEntity[];
  correctAnswers: CorrectAnswerEntity[];
  createdAt: Date;
  updatedAt: Date;
}

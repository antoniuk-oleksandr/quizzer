import { CorrectAnswerDto } from './correct-answer.dto';
import { OptionDto } from './option.dto';

export type QuestionDto = {
  id: number;
  text: string;
  type: 'BOOLEAN' | 'INPUT' | 'CHECKBOX' | 'SINGLE';
  quizId: number;
  createdAt: string;
  updatedAt: string;
  options: OptionDto[];
  correctAnswers: CorrectAnswerDto[];
};

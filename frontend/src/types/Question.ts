import { CorrectAnswer } from "./CorrectAnswer";
import { Option } from "./Option";
import { QuestionType } from "./QuestionType";

export type Question = {
  id: number;
  text: string;
  type: QuestionType;
  quizId: number;
  createdAt: string;
  updatedAt: string;
  options: Option[];
  correctAnswers: CorrectAnswer[];
};

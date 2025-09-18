import { Question } from "./Question";

export type Quiz = {
  id: number;
  title: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  questions: Question[];
};

import { create } from "zustand";
import { Question } from "./quizSchema";

interface QuizQuestionsStoreState {
  questions: Question[];
  addQuestion: (question: Question) => void;
  removeQuestion: (index: number) => void;
  clearQuestions: () => void;
}

export const useQuizQuestionsStore = create<QuizQuestionsStoreState>((set) => ({
  questions: [],
  addQuestion: (question) =>
    set((state) => ({
      questions: [...state.questions, question],
    })),
  clearQuestions: () => set({ questions: [] }),
  removeQuestion: (index) =>
    set((state) => ({
      questions: state.questions.filter((_, i) => i !== index),
    })),
}));

import { create } from "zustand";

export type QuestionType = "INPUT" | "CHECKBOX" | "SINGLE" | "BOOLEAN";

export interface Option {
  text: string;
}

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options: Option[];
  correctAnswers: Option[];
}

export interface QuizStoreState {
  questions: Question[];
  addQuestion: (question: Question) => void;
  updateQuestion: (id: string, updated: Partial<Question>) => void;
  removeQuestion: (id: string) => void;
  resetQuestions: () => void;
}

export const useQuizStore = create<QuizStoreState>((set) => ({
  questions: [],
  addQuestion: (question) =>
    set((state) => ({
      questions: [...state.questions, question],
    })),
  updateQuestion: (id, updated) =>
    set((state) => ({
      questions: state.questions.map((q) =>
        q.id === id ? { ...q, ...updated } : q
      ),
    })),
  removeQuestion: (id) =>
    set((state) => ({
      questions: state.questions.filter((q) => q.id !== id),
    })),
  resetQuestions: () => set({ questions: [] }),
}));

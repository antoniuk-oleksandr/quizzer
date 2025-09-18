"use client";

import { request } from "@/api/request";
import { Quiz } from "@/types/Quiz";
import { useEffect, useState } from "react";

export const useQuizByIdHook = (id: number) => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  useEffect(() => {
    const fetchQuizById = async () => {
      try {
        const response = await request({ path: `/quizzes/${id}` });
        setQuiz(response);
      } catch (error) {
        console.error("Failed to fetch quize:", error);
      }
    };

    fetchQuizById();
  }, [id]);

  return { quiz };
};

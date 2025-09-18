'use client";';

import { useEffect, useState } from "react";
import { QuizSummary } from "@/types/QuizSummary";
import { request } from "@/api/request";

export const useQuizzesHook = () => {
  const [quizeSummaryList, setQuizeSummaryList] = useState<
    QuizSummary[] | null
  >(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await request<QuizSummary[]>({ path: "/quizzes" });
        setQuizeSummaryList(response);
      } catch (error) {
        console.error("Failed to fetch quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return { quizeSummaryList, setQuizeSummaryList };
};

import { request } from "@/api/request";
import { useToastStore } from "@/components/Toast/toast-store";
import { QuizSummary } from "@/types/QuizSummary";
import { AxiosError } from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";

export const handleQuizeDelete = async (
  id: number,
  setQuizeSummaryList: Dispatch<SetStateAction<QuizSummary[]>>,
) => {
  try {
    await request({ path: `/quizzes/${id}`, method: "DELETE", useToken: true });
    setQuizeSummaryList((prev) => prev.filter((item) => item.id !== id));
  } catch (error: any) {
    if (!error || !(error instanceof AxiosError) || !error.response) {
      return;
    }
    const message = error.response.data.message;

    useToastStore.getState().showToast(`Error: ${message}`, "error");
  }
};

export const handleQuizeVisit = (id: number, router: AppRouterInstance) => {
  router.push(`/quizzes/${id}`);
};

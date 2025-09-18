"use client";

import { request } from "@/api/request";
import { useToastStore } from "@/components/Toast/toast-store";
import { Quiz } from "@/types/Quiz";
import { AxiosError } from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleQuizSubmit = async (
  data: { title: string; questions: any[] },
  router: AppRouterInstance,
  clearQuestions: () => void,
) => {
  try {
    const response = await request<Quiz>({
      method: "POST",
      path: "/quizzes",
      body: data,
      useToken: true,
    });

    router.push(`/quizzes/${response.id}`);
    useToastStore
      .getState()
      .showToast("You have successfully created a quiz!", "success");
  } catch (error: any) {
    if (!error || !(error instanceof AxiosError) || !error.response) {
      return;
    }
    const message = error.response.data.message;
    console.log(message);
    if (message === "Unauthorized") {
      useToastStore
        .getState()
        .showToast("Session expired. Please sign in again.", "error");
      router.push("/sign-in");
    } else {
      useToastStore.getState().showToast(message, "error");
    }
  } finally {
    clearQuestions();
  }
};

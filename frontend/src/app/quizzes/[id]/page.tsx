"use client";

import { useParams } from "next/navigation";
import { useQuizByIdHook } from "./hooks/use-quiz-by-id-hook";
import Loader from "@/components/Loader/Loader";
import QuizComponent from "./components/QuizComponent/QuizComponent";

const QuizeByIdPage = () => {
  const params = useParams();
  const id = params.id as unknown as number;

  const { quiz } = useQuizByIdHook(id);

  if (!quiz) return <Loader />;
  return <QuizComponent quiz={quiz} />;
};

export default QuizeByIdPage;

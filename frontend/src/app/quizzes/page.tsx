"use client";

import Loader from "@/components/Loader/Loader";
import QuizSummaryList from "./components/QuizSummaryItemList/QuizSummaryItemList";
import { useQuizzesHook } from "./hooks/use-quizzes-hook";
import { SetStateAction } from "react";
import { QuizSummary } from "@/types/QuizSummary";
import NoQuestionsElement from "@/components/NoQuestionsElement/NoQuestionsElement";

const QuizzesPage: React.FC = () => {
  const { quizeSummaryList, setQuizeSummaryList } = useQuizzesHook();

  if (!quizeSummaryList) return <Loader />;
  if (quizeSummaryList.length === 0) return <NoQuestionsElement className="w-full" />;
  return (
    <QuizSummaryList
      quizeSummaryList={quizeSummaryList}
      setQuizeSummaryList={
        setQuizeSummaryList as React.Dispatch<
          React.SetStateAction<QuizSummary[]>
        >
      }
    />
  );
};

export default QuizzesPage;

"use client";

import type { Quiz } from "@/types/Quiz";
import QuizComponentHeader from "../QuizComponentHeader/QuizComponentHeader";
import QuizComponentQuestionList from "../QuizComponentQuestionList/QuizComponentQuestionList";
import QuizComponentLayout from "./QuizComponentLayout";

type QuizComponentProps = {
  quiz: Quiz;
};

const QuizComponent = ({ quiz }: QuizComponentProps) => {
  return (
    <QuizComponentLayout>
      <QuizComponentHeader {...quiz} />
      <QuizComponentQuestionList questions={quiz.questions} />
    </QuizComponentLayout>
  );
};

export default QuizComponent;

import { Question } from "@/types/Question";
import QuizComponentQuestion from "../QuizComponentQuestion/QuizComponentQuestion";

type QuizComponentQuestionListProps = {
  questions: Question[];
};

const QuizComponentQuestionList = (props: QuizComponentQuestionListProps) => {
  const { questions } = props;

  return (
    <>
      {questions.map((question, index) => (
        <QuizComponentQuestion
          key={question.id}
          question={question}
          index={index + 1}
        />
      ))}
    </>
  );
};

export default QuizComponentQuestionList;

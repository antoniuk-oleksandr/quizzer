import { Question } from "@/types/Question";
import QuizComponentQuestionHeaderLayout from "./QuizComponentQuestionHeaderLayout";

type QuizComponentQuestionHeaderProps = {
  index: number;
  question: Question;
};

const QuizComponentQuestionHeader = (
  props: QuizComponentQuestionHeaderProps,
) => {
  const { index: qIndex, question } = props;

  return (
    <QuizComponentQuestionHeaderLayout>
      <h2 className="text-xl font-semibold">
        Q{qIndex + 1}: {question.text}
      </h2>
      <p className="text-sm zinc-600">Type: {question.type}</p>
    </QuizComponentQuestionHeaderLayout>
  );
};

export default QuizComponentQuestionHeader;

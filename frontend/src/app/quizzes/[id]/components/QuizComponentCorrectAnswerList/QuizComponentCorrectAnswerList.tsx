import { CorrectAnswer } from "@/types/CorrectAnswer";
import { Question } from "@/types/Question";
import QuizComponentCorrectAnswerListLayout from "./QuizComponentCorrectAnswerListLayout";

type QuizComponentCorrectAnswersProps = {
  correctAnswers: CorrectAnswer[];
};

const QuizComponentCorrectAnswerList = (
  props: QuizComponentCorrectAnswersProps,
) => {
  const { correctAnswers } = props;

  if (correctAnswers.length <= 0) return null;
  return (
    <QuizComponentCorrectAnswerListLayout>
      <h3 className="font-medium text-green-600">Correct Answers:</h3>
      <ul className="space-y-1">
        {correctAnswers.map((answer) => (
          <li key={answer.id} className="pl-2 text-green-700 font-semibold">
            • {answer.text}
          </li>
        ))}
      </ul>
    </QuizComponentCorrectAnswerListLayout>
  );
};

export default QuizComponentCorrectAnswerList;

import Card from "@/components/Card/Card";
import QuizComponentCorrectAnswerList from "../QuizComponentCorrectAnswerList/QuizComponentCorrectAnswerList";
import QuizComponentOptions from "../QuizComponentOptions/QuizComponentOptions";
import QuizComponentQuestionHeader from "../QuizComponentQuestionHeader/QuizComponentQuestionHeader";
import { Question } from "@/types/Question";

type QuizComponentQuestionProps = {
  question: Question;
  index: number;
};

const QuizComponentQuestion = (props: QuizComponentQuestionProps) => {
  const { question, index } = props;

  return (
    <Card className="w-full !border-none md:!border-solid !p-0 md:!p-6">
      <QuizComponentQuestionHeader index={index} question={question} />
      <QuizComponentOptions options={question.options} />
      <QuizComponentCorrectAnswerList
        correctAnswers={question.correctAnswers}
      />
    </Card>
  );
};

export default QuizComponentQuestion;

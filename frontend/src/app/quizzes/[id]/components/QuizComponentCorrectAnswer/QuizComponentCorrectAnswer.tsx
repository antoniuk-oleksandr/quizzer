import { CorrectAnswer } from "@/types/CorrectAnswer";

const QuizComponentCorrectAnswer = (answer: CorrectAnswer) => {
  return (
    <li key={answer.id} className="pl-2 text-green-700 font-semibold">
      • {answer.text}
    </li>
  );
};

export default QuizComponentCorrectAnswer;

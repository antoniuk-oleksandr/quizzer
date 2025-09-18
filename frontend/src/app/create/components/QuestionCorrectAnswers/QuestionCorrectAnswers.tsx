import React from "react";
import { Option } from "../../quizStore";

interface QuestionCorrectAnswersProps {
  correctAnswers: Option[];
}

const QuestionCorrectAnswers: React.FC<QuestionCorrectAnswersProps> = ({
  correctAnswers,
}) =>
  correctAnswers.length > 0 ? (
    <div>
      <span className="text-xs text-gray-500">
        Correct Answer{correctAnswers.length > 1 ? "s" : ""}:
      </span>
      <ul className="list-disc ml-6 text-green-600">
        {correctAnswers.map((ans, i) => (
          <li key={i}>{ans.text}</li>
        ))}
      </ul>
    </div>
  ) : null;

export default QuestionCorrectAnswers;

import React from "react";
import { QuestionType, Option } from "../../../quizStore";

interface CorrectAnswerControlsProps {
  type: QuestionType;
  options: Option[];
  correctAnswers: Option[];
  onChange: (answers: Option[]) => void;
  onCorrectAnswerChange?: (idx: number, checked: boolean) => void;
  onInputCorrectAnswer?: (value: string) => void;
}

const CorrectAnswerControls: React.FC<CorrectAnswerControlsProps> = ({
  type,
  options,
  correctAnswers,
  onChange,
  onCorrectAnswerChange,
  onInputCorrectAnswer,
}) => {
  if (type === "INPUT") {
    return (
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={correctAnswers[0]?.text || ""}
        onChange={(e) => {
          onChange([{ text: e.target.value }]);
          if (typeof onInputCorrectAnswer === "function") {
            onInputCorrectAnswer(e.target.value);
          }
        }}
        placeholder="Correct answer"
      />
    );
  }

  if (type === "SINGLE" || type === "BOOLEAN") {
    return (
      <div className="flex flex-col gap-2">
        {options.map((opt, idx) => (
          <label key={idx} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="correctAnswer"
              checked={correctAnswers[0]?.text === opt.text}
              onChange={() => onChange([opt])}
              className="accent-blue-500"
            />
            <span>{opt.text}</span>
          </label>
        ))}
      </div>
    );
  }

  if (type === "CHECKBOX") {
    return (
      <div className="flex flex-col gap-2">
        {options.map((opt, idx) => (
          <label key={idx} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={!!correctAnswers.find((ans) => ans.text === opt.text)}
              onChange={(e) => {
                if (typeof onCorrectAnswerChange === "function") {
                  onCorrectAnswerChange(idx, e.target.checked);
                } else {
                  if (e.target.checked) {
                    onChange([...correctAnswers, opt]);
                  } else {
                    onChange(
                      correctAnswers.filter((ans) => ans.text !== opt.text),
                    );
                  }
                }
              }}
              className="accent-blue-500"
            />
            <span>{opt.text}</span>
          </label>
        ))}
      </div>
    );
  }

  return null;
};

export default CorrectAnswerControls;

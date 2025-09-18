import React from "react";
import { QuestionType } from "../../../quizSchema";

interface QuestionTypeSelectProps {
  value: QuestionType;
  onChange: (type: QuestionType) => void;
}

const QuestionTypeSelect: React.FC<QuestionTypeSelectProps> = ({
  value,
  onChange,
}) => (
  <div>
    <label className="block text-sm font-medium text-zinc-600 mb-1">
      Question Type
    </label>
    <select
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={(e) => onChange(e.target.value as QuestionType)}
    >
      <option value="INPUT">Input</option>
      <option value="CHECKBOX">Checkbox (multiple correct)</option>
      <option value="SINGLE">Single Choice</option>
      <option value="BOOLEAN">Boolean (True/False)</option>
    </select>
  </div>
);

export default QuestionTypeSelect;

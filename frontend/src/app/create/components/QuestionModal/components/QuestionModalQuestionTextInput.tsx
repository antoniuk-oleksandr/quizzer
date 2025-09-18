import React from "react";

interface QuestionTextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const QuestionTextInput: React.FC<QuestionTextInputProps> = ({ value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-zinc-600 mb-1">
      Question Text
    </label>
    <input
      type="text"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter your question"
    />
  </div>
);

export default QuestionTextInput;

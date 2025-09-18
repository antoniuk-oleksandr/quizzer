import React from "react";
import { QuestionType } from "../../../quizSchema";
import Button from "@/components/Button/Button";

interface OptionsListProps {
  type: QuestionType;
  options: any[];
  onOptionChange: (idx: number, value: string) => void;
  onAddOption: () => void;
  onRemoveOption: (idx: number) => void;
}

const OptionsList: React.FC<OptionsListProps> = ({
  type,
  options,
  onOptionChange,
  onAddOption,
  onRemoveOption,
}) =>
  type === "SINGLE" || type === "CHECKBOX" ? (
    <div>
      <label className="block text-sm font-medium text-zinc-600 mb-1">
        Options
      </label>
      <div className="flex flex-col gap-2">
        {options.map((opt, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={opt.text}
              onChange={(e) => onOptionChange(idx, e.target.value)}
              placeholder={`Option ${idx + 1}`}
            />
            <button
              type="button"
              className="text-red-400 hover:text-red-600"
              onClick={() => onRemoveOption(idx)}
              disabled={options.length <= (type === "SINGLE" ? 2 : 1)}
              aria-label="Remove option"
            >
              &times;
            </button>
          </div>
        ))}
        <Button onClick={onAddOption}>Add Option</Button>
      </div>
    </div>
  ) : null;

export default OptionsList;

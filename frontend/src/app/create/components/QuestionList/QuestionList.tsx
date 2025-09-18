import React from "react";
import { Question } from "@/app/create/quizSchema";
import Button from "@/components/Button/Button";
import { Icon } from "@iconify/react";
import NoQuestionsElement from "@/components/NoQuestionsElement/NoQuestionsElement";

interface QuestionListProps {
  questions: Question[];
  onEdit?: (index: number) => void;
  onDelete?: (index: number) => void;
  showActions?: boolean;
}

const typeLabels: Record<string, string> = {
  INPUT: "Input",
  CHECKBOX: "Checkbox (Multiple Choice)",
  SINGLE: "Single Choice",
  BOOLEAN: "Boolean",
};

const QuestionList: React.FC<QuestionListProps> = ({
  questions,
  onDelete,
  showActions = false,
}) => {
  if (questions.length === 0) {
    return <NoQuestionsElement/>
  }

  return (
    <div className="flex flex-col gap-4">
      {questions.map((q, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
            <div className="flex-1">
              <span className="font-semibold text-blue-500 text-sm">
                {typeLabels[q.type]}
              </span>
              <p className="text-gray-800 mt-1">{q.text}</p>
            </div>
            {showActions && onDelete && (
              <div className="flex gap-2 flex-shrink-0">
                <Button
                  className="!size-fit !px-1 !py-1"
                  type="button"
                  color="red"
                  onClick={() => onDelete(idx)}
                >
                  <Icon icon="mdi:close" className="h-6 w-6" />
                </Button>
              </div>
            )}
          </div>
          {q.options && q.options.length > 0 && (
            <div className="mb-2">
              <span className="text-xs text-gray-500">Options:</span>
              <ul className="list-disc ml-6 text-zinc-600 mt-1">
                {q.options.map((opt, i) => (
                  <li key={i}>{opt.text}</li>
                ))}
              </ul>
            </div>
          )}
          {q.correctAnswers.length > 0 && (
            <div>
              <span className="text-xs text-gray-500">
                Correct Answer{q.correctAnswers.length > 1 ? "s" : ""}:
              </span>
              <ul className="list-disc ml-6 text-green-600 mt-1">
                {q.correctAnswers.map((ans, i) => (
                  <li key={i}>{ans.text}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionList;

import React, { useState } from "react";
import { QuestionType, Option, Question } from "../../quizSchema";
import QuestionModalActionButton from "./components/QuestionModalActionButton";
import QuestionModalCorrectAnswerControls from "./components/QuestionModalCorrectAnswerControls";
import QuestionModalHeader from "./components/QuestionModalHeader";
import QuestionModalModalOverlay from "./components/QuestionModalModalOverlay";
import QuestionModalOptionsList from "./components/QuestionModalOptionsList";
import QuestionModalQuestionTextInput from "./components/QuestionModalQuestionTextInput";
import QuestionModalQuestionTypeSelect from "./components/QuestionModalQuestionTypeSelect";
import { useQuestionModalInitial } from "./hooks/useQuestionModalInitial";
import { useQuestionModalType } from "./hooks/useQuestionModalType";
import {
  handleOptionChange,
  handleAddOption,
  handleRemoveOption,
  handleCorrectAnswerChange,
  handleInputCorrectAnswer,
  handleSave,
} from "./handlers";

interface QuestionModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (question: Question) => void;
  initialQuestion?: Question | null;
}

const defaultOptions = {
  SINGLE: [{ text: "" }, { text: "" }, { text: "" }],
  CHECKBOX: [{ text: "" }, { text: "" }, { text: "" }],
  BOOLEAN: [{ text: "True" }, { text: "False" }],
  INPUT: [],
};

const QuestionModal: React.FC<QuestionModalProps> = ({
  open,
  onClose,
  onSave,
  initialQuestion = null,
}) => {
  const [text, setText] = useState("");
  const [type, setType] = useState<QuestionType>("INPUT");
  const [options, setOptions] = useState<Option[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<Option[]>([]);

  useQuestionModalInitial(
    initialQuestion,
    open,
    setText,
    setType,
    setOptions,
    setCorrectAnswers,
  );
  useQuestionModalType({ type, open, setOptions, setCorrectAnswers });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <QuestionModalModalOverlay onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-lg mx-auto p-6 z-10">
        <QuestionModalHeader
          title={initialQuestion ? "Edit Question" : "Add Question"}
          onClose={onClose}
        />
        <div className="flex flex-col gap-4">
          <QuestionModalQuestionTextInput value={text} onChange={setText} />
          <QuestionModalQuestionTypeSelect value={type} onChange={setType} />
          <QuestionModalOptionsList
            type={type}
            options={options}
            onOptionChange={(idx: number, value: string) =>
              handleOptionChange(idx, value, options, setOptions)
            }
            onAddOption={() => handleAddOption(options, setOptions)}
            onRemoveOption={(idx: number) =>
              handleRemoveOption(
                idx,
                options,
                correctAnswers,
                setOptions,
                setCorrectAnswers,
              )
            }
          />
          <QuestionModalCorrectAnswerControls
            type={type}
            options={options}
            correctAnswers={correctAnswers}
            onChange={(answers) => setCorrectAnswers(answers)}
            onCorrectAnswerChange={(idx: number, checked: boolean) =>
              handleCorrectAnswerChange(
                idx,
                checked,
                type,
                options,
                correctAnswers,
                setCorrectAnswers,
              )
            }
            onInputCorrectAnswer={(value: string) =>
              handleInputCorrectAnswer(value, setCorrectAnswers)
            }
          />
          <QuestionModalActionButton
            label={initialQuestion ? "Save Changes" : "Add Question"}
            onClick={() =>
              handleSave(
                text,
                type,
                options,
                correctAnswers,
                onSave,
                onClose,
                initialQuestion,
              )
            }
            disabled={
              !text.trim() ||
              ((type === "SINGLE" || type === "BOOLEAN") &&
                correctAnswers.length !== 1) ||
              (type === "CHECKBOX" && correctAnswers.length < 1) ||
              (type === "INPUT" && correctAnswers.length !== 1)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;

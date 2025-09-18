import { Dispatch, SetStateAction } from "react";
import { Question, QuestionType, Option } from "../../quizSchema";

export const handleOptionChange = (
  idx: number,
  value: string,
  options: Option[],
  setOptions: Dispatch<SetStateAction<Option[]>>,
) => {
  const newOptions = [...options];
  newOptions[idx].text = value;
  setOptions(newOptions);
};

export const handleAddOption = (
  setOptions: Dispatch<SetStateAction<Option[]>>,
) => setOptions((prev) => [...prev, { text: "" }]);
export const handleRemoveOption = (
  idx: number,
  options: Option[],
  setOptions: Dispatch<SetStateAction<Option[]>>,
  setCorrectAnswers: Dispatch<SetStateAction<Option[]>>,
  correctAnswers: Option[],
) => {
  const newOptions = options.filter((_, i) => i !== idx);
  setOptions(newOptions);
  setCorrectAnswers(
    correctAnswers.filter((ans) =>
      newOptions.some((opt) => opt.text === ans.text),
    ),
  );
};

export const handleCorrectAnswerChange = (
  idx: number,
  checked: boolean,
  options: Option[],
  type: QuestionType,
  correctAnswers: Option[],
  setCorrectAnswers: Dispatch<SetStateAction<Option[]>>,
) => {
  const option = options[idx];
  if (type === "CHECKBOX") {
    setCorrectAnswers(
      checked
        ? [...correctAnswers, option]
        : correctAnswers.filter((ans) => ans.text !== option.text),
    );
  } else {
    setCorrectAnswers([option]);
  }
};

export const handleInputCorrectAnswer = (
  value: string,
  setCorrectAnswers: Dispatch<SetStateAction<Option[]>>,
) => setCorrectAnswers([{ text: value }]);

export const handleSave = (
  setText: Dispatch<SetStateAction<string>>,
  setCorrectAnswers: Dispatch<SetStateAction<Option[]>>,
  setOptions: Dispatch<SetStateAction<Option[]>>,
  setType: Dispatch<SetStateAction<QuestionType>>,
  text: string,
  type: QuestionType,
  options: Option[],
  correctAnswers: Option[],
  addQuestion: (question: Question) => void,
  onClose: () => void,
) => {
  setText("");
  setCorrectAnswers([]);
  setOptions([]);
  setType("INPUT");

  if (!text.trim()) return;
  if ((type === "SINGLE" || type === "BOOLEAN") && correctAnswers.length !== 1)
    return;
  if (type === "CHECKBOX" && correctAnswers.length < 1) return;
  if (type === "INPUT" && correctAnswers.length !== 1) return;

  addQuestion({
    text,
    type,
    options: options.length > 0 ? options : undefined,
    correctAnswers,
  });
  onClose();
};

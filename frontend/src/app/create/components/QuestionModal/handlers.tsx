import { QuestionType, Option } from "../../quizSchema";

export function handleOptionChange(
  idx: number,
  value: string,
  options: Option[],
  setOptions: (opts: Option[]) => void
) {
  const newOptions = [...options];
  newOptions[idx].text = value;
  setOptions(newOptions);
}

export function handleAddOption(
  options: Option[],
  setOptions: (opts: Option[]) => void
) {
  setOptions([...options, { text: "" }]);
}

export function handleRemoveOption(
  idx: number,
  options: Option[],
  correctAnswers: Option[],
  setOptions: (opts: Option[]) => void,
  setCorrectAnswers: (answers: Option[]) => void
) {
  const newOptions = options.filter((_, i) => i !== idx);
  setOptions(newOptions);
  setCorrectAnswers(
    correctAnswers.filter((ans) =>
      newOptions.some((opt) => opt.text === ans.text)
    )
  );
}

export function handleCorrectAnswerChange(
  idx: number,
  checked: boolean,
  type: QuestionType,
  options: Option[],
  correctAnswers: Option[],
  setCorrectAnswers: (answers: Option[]) => void
) {
  const option = options[idx];
  if (type === "CHECKBOX") {
    if (checked) {
      setCorrectAnswers([...correctAnswers, option]);
    } else {
      setCorrectAnswers(
        correctAnswers.filter((ans) => ans.text !== option.text)
      );
    }
  } else if (type === "SINGLE" || type === "BOOLEAN") {
    setCorrectAnswers([option]);
  }
}

export function handleInputCorrectAnswer(
  value: string,
  setCorrectAnswers: (answers: Option[]) => void
) {
  setCorrectAnswers([{ text: value }]);
}

export function handleSave(
  text: string,
  type: QuestionType,
  options: Option[],
  correctAnswers: Option[],
  onSave: (question: any) => void,
  onClose: () => void,
  initialQuestion?: any
) {
  if (!text.trim()) return;
  if (
    (type === "SINGLE" || type === "BOOLEAN") &&
    correctAnswers.length !== 1
  )
    return;
  if (type === "CHECKBOX" && correctAnswers.length < 1) return;
  if (type === "INPUT" && correctAnswers.length !== 1) return;

  onSave({
    id: initialQuestion?.id ?? Math.random().toString(36).slice(2),
    text,
    type,
    options: options.length > 0 ? options : undefined,
    correctAnswers,
  });
  onClose();
}

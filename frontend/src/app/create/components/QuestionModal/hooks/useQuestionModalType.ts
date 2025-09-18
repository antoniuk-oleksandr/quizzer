import { useEffect } from "react";
import { QuestionType, Option } from "../../../quizSchema";

const defaultOptions: Record<QuestionType, Option[]> = {
  SINGLE: [{ text: "" }, { text: "" }, { text: "" }],
  CHECKBOX: [{ text: "" }, { text: "" }, { text: "" }],
  BOOLEAN: [{ text: "True" }, { text: "False" }],
  INPUT: [],
};

interface UseQuestionModalTypeProps {
  type: QuestionType;
  open: boolean;
  setOptions: (opts: Option[]) => void;
  setCorrectAnswers: (opts: Option[]) => void;
}

export function useQuestionModalType({
  type,
  open,
  setOptions,
  setCorrectAnswers,
}: UseQuestionModalTypeProps) {
  useEffect(() => {
    if (type === "BOOLEAN") {
      setOptions(defaultOptions.BOOLEAN);
      setCorrectAnswers([]);
    } else if (type === "INPUT") {
      setOptions([]);
      setCorrectAnswers([]);
    } else if (type === "SINGLE" || type === "CHECKBOX") {
      setOptions(defaultOptions[type]);
      setCorrectAnswers([]);
    }
  }, [type, open, setOptions, setCorrectAnswers]);
}

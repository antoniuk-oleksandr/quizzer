import { useEffect } from "react";
import { QuestionType, Option, Question } from "../../../quizSchema";

export function useQuestionModalInitial(
  initialQuestion: Question | null | undefined,
  open: boolean,
  setText: (text: string) => void,
  setType: (type: QuestionType) => void,
  setOptions: (options: Option[]) => void,
  setCorrectAnswers: (answers: Option[]) => void
) {
  useEffect(() => {
    if (initialQuestion) {
      setText(initialQuestion.text);
      setType(initialQuestion.type);
      setOptions(initialQuestion.options || []);
      setCorrectAnswers(initialQuestion.correctAnswers);
    } else {
      setText("");
      setType("INPUT");
      setOptions([]);
      setCorrectAnswers([]);
    }
  }, [initialQuestion, open, setText, setType, setOptions, setCorrectAnswers]);
}

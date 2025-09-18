import React from "react";
import { useQuizQuestionsStore } from "../quizQuestionsStore";
import { Question } from "../quizSchema";
import QuestionModal from "../QuestionModal/QuestionModal";

interface AddQuestionModalProps {
  open: boolean;
  onClose: () => void;
}

const AddQuestionModal: React.FC<AddQuestionModalProps> = ({
  open,
  onClose,
}) => {
  const addQuestion = useQuizQuestionsStore((state) => state.addQuestion);

  const handleSave = (question: Question) => {
    addQuestion(question);
  };

  return (
    <QuestionModal
      open={open}
      onClose={onClose}
      onSave={handleSave}
      initialQuestion={null}
    />
  );
};

export default AddQuestionModal;

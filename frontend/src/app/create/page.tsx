"use client";

import React, { useState } from "react";
import CreateQuizForm from "./components/CreateQuizForm/CreateQuizForm";
import CreateQuizModal from "./components/CreateQuizModal/CreateQuizModal";
import QuestionsToolbar from "./components/QuestionsToolbar/QuestionsToolbar";
import { handleQuizSubmit } from "./handlers";
import { useQuizQuestionsStore } from "./quizQuestionsStore";
import { useRouter } from "next/navigation";

const Create: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { questions, removeQuestion, clearQuestions } = useQuizQuestionsStore();
  const router = useRouter();

  return (
    <>
      <CreateQuizForm onSubmit={(data) => handleQuizSubmit(data, router, clearQuestions)}>
        <QuestionsToolbar
          removeQuestion={removeQuestion}
          questions={questions}
          openModal={() => setModalOpen(true)}
        />
      </CreateQuizForm>
      <CreateQuizModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Create;

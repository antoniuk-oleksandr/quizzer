import Button from "@/components/Button/Button";
import QuestionList from "../QuestionList/QuestionList";

type QuestionsToolbarProps = {
  questions: any[];
  openModal: () => void;
  removeQuestion: (idx: number) => void;
};

const QuestionsToolbar = (props: QuestionsToolbarProps) => {
  const { questions, openModal, removeQuestion } = props;

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-blue-500">
          Questions ({questions.length})
        </h3>
        <Button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={openModal}
        >
          Add Question
        </Button>
      </div>
      <QuestionList
        questions={questions}
        showActions={true}
        onDelete={removeQuestion}
      />
    </div>
  );
};

export default QuestionsToolbar;

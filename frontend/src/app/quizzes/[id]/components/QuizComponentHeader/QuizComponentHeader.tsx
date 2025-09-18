import Card from "@/components/Card/Card";
import { Quiz } from "@/types/Quiz";

const QuizComponentHeader = (quiz: Quiz) => {
  return (
    <Card className="w-full !border-none md:!border-solid !p-0 md:!p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-2">{quiz.title}</h1>
      <p className="text-sm text-zinc-600">
        Created at: {new Date(quiz.createdAt).toLocaleString()}
      </p>
      <p className="text-sm text-zinc-600">
        Last updated: {new Date(quiz.updatedAt).toLocaleString()}
      </p>
    </Card>
  );
};

export default QuizComponentHeader;

import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import { QuizSummary } from "@/types/QuizSummary";

type QuizSummaryItemProps = QuizSummary & {
  onDelete: (id: number) => void;
  onVisit: (id: number) => void;
};

const QuizSummaryItem = ({
  title,
  onDelete,
  onVisit,
  id,
  questionsCount,
}: QuizSummaryItemProps) => {
  return (
    <Card className="flex flex-col md:flex-row justify-between w-full ">
      <div className="flex flex-col gap-1 flex-1">
        <p className="text-lg font-semibold">
          {title} ({id})
        </p>
        <p className="text-sm text-gray-500">{questionsCount} questions</p>
      </div>
      <div className="flex gap-2 mt-2 md:mt-0 justify-between">
        <Button className="w-full" onClick={() => onVisit(id)}>Visit</Button>
        <Button className="w-full" color="red" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default QuizSummaryItem;

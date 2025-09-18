import { QuizSummary } from "@/types/QuizSummary";
import QuizSummaryItemListLayout from "./QuizeSummaryItemListLayout";
import { useRouter } from "next/navigation";
import { Dispatch, Fragment, SetStateAction } from "react";
import { handleQuizeDelete, handleQuizeVisit } from "../../handlers";
import QuizSummaryItem from "../QuizSummaryItem/QuizSummaryItem";

type QuizzeSummaryListProps = {
  quizeSummaryList: QuizSummary[];
  setQuizeSummaryList: Dispatch<SetStateAction<QuizSummary[]>>;
};

const QuizSummaryList = (props: QuizzeSummaryListProps) => {
  const { quizeSummaryList } = props;
  const router = useRouter();

  return (
    <QuizSummaryItemListLayout>
      {quizeSummaryList.map((item, index) => (
        <Fragment key={item.id}>
          <QuizSummaryItem
            onDelete={() =>
              handleQuizeDelete(item.id, props.setQuizeSummaryList)
            }
            onVisit={() => handleQuizeVisit(item.id, router)}
            {...item}
            key={index}
          />
          <hr className="md:hidden text-zinc-600 last:hidden" />
        </Fragment>
      ))}
    </QuizSummaryItemListLayout>
  );
};

export default QuizSummaryList;

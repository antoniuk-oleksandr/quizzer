import type { LayoutProps } from "@/types/LayoutProps";

const QuizSummaryItemListLayout = (props: LayoutProps) => {
  const { children } = props;

  return <div className="space-y-6 w-full">{children}</div>;
};

export default QuizSummaryItemListLayout;

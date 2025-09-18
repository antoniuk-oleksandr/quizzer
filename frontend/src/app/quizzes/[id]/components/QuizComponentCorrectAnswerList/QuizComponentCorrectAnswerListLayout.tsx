import type { LayoutProps } from "@/types/LayoutProps";

const QuizComponentCorrectAnswerListLayout = (props: LayoutProps) => {
  const { children } = props;

  return <div className="space-y-1">{children}</div>;
};

export default QuizComponentCorrectAnswerListLayout;

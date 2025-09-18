import type { LayoutProps } from "@/types/LayoutProps";

const QuizComponentQuestionHeaderLayout = (props: LayoutProps) => {
  const { children } = props;
  return <div className="mb-4">{children}</div>;
};

export default QuizComponentQuestionHeaderLayout;

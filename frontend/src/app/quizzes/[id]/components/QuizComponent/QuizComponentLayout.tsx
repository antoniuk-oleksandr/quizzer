import type { LayoutProps } from "@/types/LayoutProps";

const QuizComponentLayout = (props: LayoutProps) => {
  return <div className="space-y-16 md:space-y-6 w-full">{props.children}</div>;
};

export default QuizComponentLayout;

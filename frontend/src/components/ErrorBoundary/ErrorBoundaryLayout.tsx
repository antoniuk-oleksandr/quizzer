import type { LayoutProps } from "@/types/LayoutProps";

const ErrorBoundaryLayout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return <div className="p-4 bg-red-100 text-red-800 rounded">{children}</div>;
};
export default ErrorBoundaryLayout;

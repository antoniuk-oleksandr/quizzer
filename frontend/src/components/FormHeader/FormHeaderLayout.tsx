import type { LayoutProps } from "@/types/LayoutProps";

const FormHeaderLayout = (props: LayoutProps) => {
  const { children } = props;

  return <div className="mb-4 ">{children}</div>;
};

export default FormHeaderLayout;

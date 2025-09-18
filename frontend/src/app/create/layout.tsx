import type { LayoutProps } from "@/types/LayoutProps";

const CreateQuizePageLayout = (props: LayoutProps) => {
  const { children } = props;
  return <div className="grid place-items-center w-full">{children}</div>;
};

export default CreateQuizePageLayout;

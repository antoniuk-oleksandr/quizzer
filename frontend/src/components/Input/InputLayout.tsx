import type { LayoutProps } from "@/types/LayoutProps";

type InputLayoutProps = LayoutProps & {
  className?: string;
};

const InputLayout = (props: InputLayoutProps) => {
  const { className, children } = props;

  return <div className={`${className} flex flex-col gap-1`}>{children}</div>;
};

export default InputLayout;

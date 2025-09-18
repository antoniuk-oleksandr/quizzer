import type { LayoutProps } from "@/types/LayoutProps";

type FormFooterLayoutProps = LayoutProps & {
  className?: string;
};

const FormFooterLayout = (props: FormFooterLayoutProps) => {
  const { children, className } = props;

  return <div className={`${className} mt-4 `}>{children}</div>;
};

export default FormFooterLayout;

import type { LayoutProps } from "@/types/LayoutProps";

const SignUpPageLayout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className="flex-1 grid place-items-center">
      {children}
    </div>
  );
};

export default SignUpPageLayout;

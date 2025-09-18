import type { LayoutProps } from "@/types/LayoutProps";

type CardProps = LayoutProps & {
  className?: string;
};

const Card = (props: CardProps) => {
  const { children, className } = props;

  return (
    <div
      className={`${className} border border-zinc-200 rounded-2xl shadow-none md:shadow-lg border-none md:border-solid p-0 md:p-6`}
    >
      {children}
    </div>
  );
};
export default Card;

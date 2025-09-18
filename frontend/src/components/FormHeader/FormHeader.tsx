import FormHeaderLayout from "./FormHeaderLayout";

type FormHeaderProps = {
  title: string;
  subtitle: string;
};

const FormHeader = ({ title, subtitle }: FormHeaderProps) => {
  return (
    <FormHeaderLayout>
      <h1 className="text-2xl font-bold text-blue-500 tracking-tight">
        {title}
      </h1>
      <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>
    </FormHeaderLayout>
  );
};

export default FormHeader;

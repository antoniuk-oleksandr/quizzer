import FormFoterLayout from "./FormFooterLayout";

type FormFooterProps = {
  submitButton: React.ReactNode;
  extraButton?: React.ReactNode;
  subElement?: React.ReactNode;
  className?: string;
};

const FormFooter = (props: FormFooterProps) => {
  const { submitButton, extraButton, subElement, className = "" } = props;

  return (
    <FormFoterLayout className={className}>
      {submitButton}
      {extraButton}
      {subElement}
    </FormFoterLayout>
  );
};

export default FormFooter;

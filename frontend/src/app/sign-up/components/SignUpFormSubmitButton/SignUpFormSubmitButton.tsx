import Button from "@/components/Button/Button";

type SignUpFormSubmitButtonProps = {
  isSubmitting: boolean;
};

const SignUpFormSubmitButton = (props: SignUpFormSubmitButtonProps) => {
  const { isSubmitting } = props;

  return (
    <Button disabled={isSubmitting} type="submit" className="w-full">
      Sign Up
    </Button>
  );
};

export default SignUpFormSubmitButton;

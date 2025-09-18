import Button from "@/components/Button/Button";

type SignInFormSubmitButtonProps = {
  isSubmitting: boolean;
};

const SignInFormSubmitButton = (props: SignInFormSubmitButtonProps) => {
  const { isSubmitting } = props;

  return (
    <Button disabled={isSubmitting} type="submit" className="w-full">
      Sign In
    </Button>
  );
};

export default SignInFormSubmitButton;

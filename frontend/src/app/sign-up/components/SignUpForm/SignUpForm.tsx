import { SubmitHandler, useForm } from "react-hook-form";
import { LayoutProps } from "@/types/LayoutProps";
import { SignUpFormContext } from "./SignUpFormContext";
import { signUpFormSchema } from "../../helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormData } from "@/types/SignUpFormContextType";
import { handleSignUp as handleSignUpFormSubmit } from "../../handlers";
import { useRouter } from "next/navigation";

const SignUpForm = (props: LayoutProps) => {
  const { children } = props;
  const router = useRouter();
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<SignUpFormData> = (data) =>
    handleSignUpFormSubmit(data, router, setError);

  return (
    <SignUpFormContext.Provider value={{ register, errors, isSubmitting }}>
      <div className="max-w-xl w-full mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
      </div>
    </SignUpFormContext.Provider>
  );
};

export default SignUpForm;

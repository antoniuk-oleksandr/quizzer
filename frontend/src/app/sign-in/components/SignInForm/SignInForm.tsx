import { SubmitHandler, useForm } from "react-hook-form";
import { LayoutProps } from "@/types/LayoutProps";
import { SignInFormContext } from "./SignInFormContext";
import { signInFormSchema } from "../../helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormData } from "@/types/SignInFormContextType";
import { handleSignInFormSubmit } from "../../handlers";
import { useRouter } from "next/navigation";

const SignInForm = (props: LayoutProps) => {
  const { children } = props;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignInFormData> = (data) =>
    handleSignInFormSubmit(data, router, setError);

  return (
    <SignInFormContext.Provider value={{ register, errors, isSubmitting }}>
      <div className="max-w-xl w-full mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
      </div>
    </SignInFormContext.Provider>
  );
};

export default SignInForm;

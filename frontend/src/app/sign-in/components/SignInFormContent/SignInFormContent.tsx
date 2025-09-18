import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import FormFooter from "@/components/FormFooter/FormFooter";
import FormHeader from "@/components/FormHeader/FormHeader";
import Input from "@/components/Input/Input";
import { register } from "module";
import { useContext } from "react";
import { getSignInInputsData } from "../../helpers";
import SignUpFormSubElement from "../SignInFormSubElement/SignInFormSubElement";
import SignInFormSubmitButton from "../SignInFormSubmitButton/SignInFormSubmitButton";
import { SignInFormContext } from "../SignInForm/SignInFormContext";
import SignInFormInputList from "../SignInFormInputList/SignInFormInputList";

const SignInFormContent = () => {
  const context = useContext(SignInFormContext);
  if (!context) return null;

  const { register, errors, isSubmitting } = context;
  const inputsData = getSignInInputsData();

  return (
    <Card className="flex flex-col gap-6 !border-none md:!border-solid !p-0 md:!p-6">
      <FormHeader
        title="Sign in to your account"
        subtitle="Welcome back! Please enter your details."
      />
      <SignInFormInputList
        signInInputsData={inputsData}
        register={register}
        errors={errors}
      />
      <FormFooter
        submitButton={
          <SignInFormSubmitButton isSubmitting={isSubmitting} />
        }
        subElement={<SignUpFormSubElement />}
      />
    </Card>
  );
};

export default SignInFormContent;

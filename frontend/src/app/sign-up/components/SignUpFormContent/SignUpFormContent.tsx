import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import FormFooter from "@/components/FormFooter/FormFooter";
import FormHeader from "@/components/FormHeader/FormHeader";
import Input from "@/components/Input/Input";
import { register } from "module";
import { useContext } from "react";
import { SignUpFormContext } from "../SignUpForm/SignUpFormContext";
import { getSignUpInputsData } from "../../helpers";
import SignUpFormInputList from "../SignUpFormInputList/SignUpFormInputList";
import SignUpFormSubElement from "../SignUpFormSubElement/SignUpFormSubElement";
import SignUpFormSubmitButton from "../SignUpFormSubmitButton/SignUpFormSubmitButton";

const SignUpFormContent = () => {
  const context = useContext(SignUpFormContext);
  if (!context) return null;

  const { register, errors, isSubmitting } = context;
  const inputsData = getSignUpInputsData();

  return (
    <Card className="flex flex-col gap-6 !border-none md:!border-solid !p-0 md:!p-6">
      <FormHeader
        title="Create an account"
        subtitle="Enter your details below to get started"
      />
      <SignUpFormInputList
        signUpInputsData={inputsData}
        register={register}
        errors={errors}
      />
      <FormFooter
        submitButton={<SignUpFormSubmitButton isSubmitting={isSubmitting} />}
        subElement={<SignUpFormSubElement />}
      />
    </Card>
  );
};

export default SignUpFormContent;

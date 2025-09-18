import Input from "@/components/Input/Input";
import { InputData } from "@/types/InputProps";
import {
  SignUpFormContextType,
  SignUpFormData,
} from "@/types/SignUpFormContextType";

type SignUpFormInputListProps = Omit<SignUpFormContextType, "isSubmitting"> & {
  signUpInputsData: InputData[];
};

const SignUpFormInputList = (props: SignUpFormInputListProps) => {
  const { signUpInputsData, register, errors } = props;

  return (
    <>
      {signUpInputsData.map((item, index) => (
        <Input
          className="!max-w-xl w-full"
          key={index}
          id={item.id}
          label={item.label}
          type={item.type}
          placeholder={item.placeholder}
          register={register}
          error={errors[item.id as keyof SignUpFormData]}
        />
      ))}
    </>
  );
};

export default SignUpFormInputList;

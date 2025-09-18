import Input from "@/components/Input/Input";
import { InputData } from "@/types/InputProps";
import {
  SignInFormContextType,
  SignInFormData,
} from "@/types/SignInFormContextType";

type SignInFormInputListProps = Pick<
  SignInFormContextType,
  "register" | "errors"
> & {
  signInInputsData: InputData[];
};

const SignInFormInputList = (props: SignInFormInputListProps) => {
  const { signInInputsData, register, errors } = props;

  return (
    <>
      {signInInputsData.map((item, index) => (
        <Input
          className="!max-w-xl w-full"
          key={index}
          id={item.id}
          label={item.label}
          type={item.type}
          placeholder={item.placeholder}
          register={register}
          error={errors[item.id as keyof SignInFormData]}
        />
      ))}
    </>
  );
};

export default SignInFormInputList;

import { FieldErrors, UseFormRegister, UseFormResetField, UseFormSetError } from "react-hook-form";

export type SignInFormData = {
  usernameOrEmail: string;
  password: string;
};

export type SignInFormContextType = {
  register: UseFormRegister<SignInFormData>;
  errors: FieldErrors<SignInFormData>;
  isSubmitting: boolean;
};

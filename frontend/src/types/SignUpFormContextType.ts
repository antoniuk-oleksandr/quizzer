import { FieldErrors, UseFormRegister } from "react-hook-form";

export type SignUpFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignUpFormContextType = {
  register: UseFormRegister<SignUpFormData>;
  errors: FieldErrors<SignUpFormData>;
  isSubmitting: boolean;
};

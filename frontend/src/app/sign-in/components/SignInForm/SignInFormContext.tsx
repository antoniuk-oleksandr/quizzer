import { SignInFormContextType } from "@/types/SignInFormContextType";
import React from "react";

export const SignInFormContext = React.createContext<
  SignInFormContextType | undefined
>(undefined);

export const useSignInForm = () => {
  const context = React.useContext(SignInFormContext);
  if (!context)
    throw new Error(
      "useSignInForm must be used within SignUpFormContext.Provider",
    );
  return context;
};

import { SignUpFormContextType } from "@/types/SignUpFormContextType";
import React from "react";

export const SignUpFormContext = React.createContext<
  SignUpFormContextType | undefined
>(undefined);

export const useSignUpForm = () => {
  const context = React.useContext(SignUpFormContext);
  if (!context)
    throw new Error(
      "useSignUpForm must be used within SignUpFormContext.Provider",
    );
  return context;
};

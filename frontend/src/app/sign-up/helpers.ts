import { InputData } from "@/types/InputProps";
import zod from "zod";

export const getSignUpInputsData = (): InputData[] => [
  {
    label: "Username",
    placeholder: "Choose a username",
    type: "text",
    id: "username",
  },
  {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    id: "email",
  },
  {
    label: "Password",
    placeholder: "Create a password",
    type: "password",
    id: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "Re-enter your password",
    type: "password",
    id: "confirmPassword",
  },
];

export const signUpFormSchema = zod
  .object({
    username: zod
      .string()
      .min(3, "Username must be at least 3 characters long"),
    email: zod.email("Invalid email address"),
    password: zod
      .string()
      .min(
        8,
        "Password is too weak. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character.",
      )
      .max(255, "Password must be at most 255 characters long")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
        "Password is too weak. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character.",
      ),
    confirmPassword: zod.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

import { InputData } from "@/types/InputProps";
import zod from "zod";

export const getSignInInputsData = (): InputData[] => [
  {
    label: "Username or email",
    placeholder: "Enter your username or email",
    type: "text",
    id: "usernameOrEmail",
  },

  {
    label: "Password",
    placeholder: "Create a password",
    type: "password",
    id: "password",
  },
];

export const signInFormSchema = zod.object({
  usernameOrEmail: zod
    .string()
    .min(3, "Username must be at least 3 characters long"),
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
});

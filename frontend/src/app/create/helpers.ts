import { Option } from "./quizSchema";

export const checkOptions = (options: Option[]): boolean => {
  return options.every((opt) => opt.text.trim() !== "");
};

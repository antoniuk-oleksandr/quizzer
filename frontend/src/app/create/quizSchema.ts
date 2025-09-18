import { z } from "zod";

export const QuestionTypeEnum = z.enum([
  "INPUT",
  "CHECKBOX",
  "SINGLE",
  "BOOLEAN",
]);

export const OptionSchema = z.object({
  text: z.string().min(1, "Option text is required"),
});

export const QuestionSchema = z
  .object({
    text: z.string().min(1, "Question text is required"),
    type: QuestionTypeEnum,
    options: z.array(OptionSchema).optional(),
    correctAnswers: z
      .array(OptionSchema)
      .min(1, "At least one correct answer is required"),
  })
  .refine(
    (data) => {
      if (["SINGLE", "CHECKBOX", "BOOLEAN"].includes(data.type)) {
        return Array.isArray(data.options) && data.options.length > 0;
      }
      if (data.type === "INPUT") {
        return !data.options || data.options.length === 0;
      }
      return true;
    },
    {
      message:
        "Options are required for SINGLE, CHECKBOX, and BOOLEAN questions",
      path: ["options"],
    },
  );

export const QuizSchema = z.object({
  title: z.string().min(1, "Quiz title is required"),
  questions: z.array(QuestionSchema).min(1, "At least one question is required"),
});

export type Quiz = z.infer<typeof QuizSchema>;
export type QuizFormType = {
  title: string;
};
export type Question = z.infer<typeof QuestionSchema>;
export type Option = z.infer<typeof OptionSchema>;
export type QuestionType = z.infer<typeof QuestionTypeEnum>;

"use client";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuizSchema, Quiz } from "@/app/create/quizSchema";
import { useQuizQuestionsStore } from "@/app/create/quizQuestionsStore";
import Button from "@/components/Button/Button";
import React, { useEffect } from "react";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import Card from "@/components/Card/Card";

interface CreateQuizFormProps {
  onSubmit: (data: Quiz) => void;
  children?: React.ReactNode;
}

const CreateQuizForm: React.FC<CreateQuizFormProps> = ({
  onSubmit,
  children,
}) => {
  const { questions } = useQuizQuestionsStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitting },
    setValue,
  } = useForm<z.infer<typeof QuizSchema>>({
    resolver: zodResolver(QuizSchema),
    defaultValues: {
      title: "",
      questions: [],
    },
  });

  useEffect(() => {
    const normalizedQuestions = questions.map((q) => ({
      ...q,
      options: q.options ?? [],
    }));
    setValue("questions", normalizedQuestions, { shouldValidate: true });
  }, [questions, setValue]);

  const handleFormSubmit: SubmitHandler<z.infer<typeof QuizSchema>> = (data) =>
    onSubmit(data);

  return (
    <Card className="w-full max-w-xl !border-none md:!border-solid !p-0 md:!p-6">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h2 className="text-xl sm:text-2xl font-bold text-blue-500 mb-2">
          Create a Quiz
        </h2>

        <div>
          <label className="block text-sm font-medium text-zinc-600 mb-1">
            Quiz Title
          </label>
          <input
            {...register("title")}
            className={`w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              errors.title ? "border-red-400" : ""
            }`}
            placeholder="Enter quiz title"
          />
          {errors.title && (
            <span className="text-xs text-red-500">{errors.title.message}</span>
          )}
        </div>

        {children}

        {errors.questions && isSubmitted && (
          <span className="text-xs text-red-500">
            {errors.questions.message}
          </span>
        )}

        <div className="mt-6 pt-4 border-t border-gray-200">
          <Button
            disabled={isSubmitting}
            type="submit"
            color="primary"
            fullWidth
          >
            Create Quiz
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CreateQuizForm;

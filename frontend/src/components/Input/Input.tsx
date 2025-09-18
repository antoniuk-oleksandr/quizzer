import { InputData } from "@/types/InputProps";
import React, { useState } from "react";
import InputLayout from "./InputLayout";
import { FieldError, UseFormRegister } from "react-hook-form";
import { Icon } from "@iconify/react";

type InputProps = InputData & {
  register: UseFormRegister<any>;
  error?: FieldError;
  className?: string;
};

const Input = (props: InputProps) => {
  const { label, placeholder, type, className, id, register, error } = props;
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";

  return (
    <InputLayout>
      {label && (
        <label htmlFor={id} className="text-sm font-medium mb-1">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          id={id}
          {...register(id)}
          type={isPasswordField && showPassword ? "text" : type}
          placeholder={placeholder}
          className={`px-4 py-2 w-full rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow ${className}`}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-zinc-600"
          >
            <Icon
              icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
              className="w-5 h-5"
            />
          </button>
        )}
      </div>
      {error && <span className="text-xs text-red-500 mt-1">{error.message}</span>}
    </InputLayout>
  );
};

export default Input;

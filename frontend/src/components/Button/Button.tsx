import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "red";
  fullWidth?: boolean;
}

const colorClasses = {
  primary: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-400 text-white",
  secondary:
    "bg-gray-100 hover:bg-gray-200 focus:ring-gray-300 text-gray-800 border border-gray-300",
  red: "bg-red-500 hover:bg-red-600 focus:ring-red-400 text-white",
};

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  className = "",
  children,
  fullWidth = false,
  ...rest
}) => {
  return (
    <button
      className={`
        cursor-pointer
        rounded-lg px-4 py-2 font-medium shadow-sm
        disabled:opacity-50 disabled:cursor-not-allowed
        transform transition-transform duration-150 ease-in-out
        hover:scale-105 active:scale-95
        ${colorClasses[color]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

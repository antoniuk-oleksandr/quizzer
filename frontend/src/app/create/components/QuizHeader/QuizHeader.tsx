import React from "react";

interface QuizHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <h1 className="text-xl sm:text-2xl font-bold text-blue-500 mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm sm:text-base text-gray-600">{subtitle}</p>
      )}
    </div>
  );
};

export default QuizHeader;

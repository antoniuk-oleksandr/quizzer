import React from "react";

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => (
  <button
    type="button"
    className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

export default ActionButton;

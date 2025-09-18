import React, { ReactNode } from "react";
import { Icon } from "@iconify/react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  showCloseButton?: boolean;
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  size = "lg",
  showCloseButton = true,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-50"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div
        className={`relative bg-white rounded-xl shadow-lg w-full ${sizeClasses[size]} mx-auto p-6 z-10 max-h-[90vh] overflow-y-auto`}
      >
        {showCloseButton && (
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-blue-500 transition"
            onClick={onClose}
            aria-label="Close"
          >
            <Icon icon="mdi:close" className="h-6 w-6" />
          </button>
        )}
        {title && (
          <div className="text-xl font-semibold text-blue-500 mb-4 pr-8">
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;

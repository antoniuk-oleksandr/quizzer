import React from "react";
import { Icon } from "@iconify/react";

interface HeaderProps {
  title: string;
  onClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onClose }) => (
  <div className="flex items-center justify-between mb-4">
    <div className="text-xl font-semibold text-blue-500">{title}</div>
    <button
      className="text-gray-400 hover:text-blue-500 transition"
      onClick={onClose}
      aria-label="Close"
    >
      <Icon icon="mdi:close" className="h-6 w-6" />
    </button>
  </div>
);

export default Header;

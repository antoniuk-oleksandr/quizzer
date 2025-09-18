import React from "react";

interface ModalOverlayProps {
  onClick: () => void;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ onClick }) => (
  <div
    className="fixed inset-0 bg-gray-500 opacity-50 z-40"
    onClick={onClick}
    aria-label="Close modal"
  />
);

export default ModalOverlay;

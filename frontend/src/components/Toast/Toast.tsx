// Toast.tsx
"use client";

import { AnimatePresence, motion } from "motion/react";
import { useToastStore } from "./toast-store";


const Toast = () => {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <div className="fixed bottom-6 left-6 flex flex-col gap-2 z-50 text-xl">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className={`px-4 py-2 rounded-lg shadow-lg text-white ${
              toast.type === "success"
                ? "bg-green-500"
                : toast.type === "error"
                  ? "bg-red-500"
                  : "bg-blue-500"
            }`}
          >
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;

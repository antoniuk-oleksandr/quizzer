"use client";

import type { LayoutProps } from "@/types/LayoutProps";
import { motion } from "motion/react";

const MotionLayout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};


export default MotionLayout;
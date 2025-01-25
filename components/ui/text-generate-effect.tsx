"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className = "",
  duration = 1,
  filter = true,
}: {
  words: string;
  className?: string;
  duration?: number;
  filter?: boolean;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    words.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, words.length, {
      type: "tween",
      duration: duration,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [count, words.length, duration]);

  return (
    <motion.span
      className={cn("", className)}
      style={filter ? {
        filter:
          "drop-shadow(0 0 10px rgba(255,255,255,0.2)) drop-shadow(0 0 5px rgba(255,255,255,0.1))",
      } : undefined}
    >
      {displayText}
    </motion.span>
  );
}; 
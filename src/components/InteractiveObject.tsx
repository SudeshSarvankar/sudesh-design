"use client";

import { useCursorHint } from "@/context/CursorContext";
import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type InteractiveObjectProps = {
  label: string;
  hint: string;
  className?: string;
  children: ReactNode;
  onActivate: () => void;
  pressed?: boolean;
  float?: boolean;
};

export function InteractiveObject({
  label,
  hint,
  className,
  children,
  onActivate,
  pressed,
  float = true,
}: InteractiveObjectProps) {
  const { setHint } = useCursorHint();
  const reduce = useReducedMotion();

  return (
    <motion.button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      className={cn(
        "group relative cursor-none rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink/40",
        className,
      )}
      onMouseEnter={() => setHint(hint)}
      onMouseLeave={() => setHint(null)}
      onFocus={() => setHint(hint)}
      onBlur={() => setHint(null)}
      onClick={onActivate}
      animate={
        reduce || !float
          ? undefined
          : { y: [0, -6, 0], rotate: [0, 0.6, 0] }
      }
      transition={
        reduce || !float
          ? { type: "spring", stiffness: 260, damping: 24 }
          : { duration: 6.4, repeat: Infinity, ease: "easeInOut" }
      }
      whileHover={reduce ? undefined : { scale: 1.04, y: -4 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
    >
      <span className="block drop-shadow-[0_12px_18px_rgba(40,32,18,0.16)] transition-transform duration-300 group-hover:drop-shadow-[0_18px_24px_rgba(40,32,18,0.22)]">
        {children}
      </span>
    </motion.button>
  );
}

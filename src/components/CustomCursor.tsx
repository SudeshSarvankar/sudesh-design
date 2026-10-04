"use client";

import { useCursorHint } from "@/context/CursorContext";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const { hint } = useCursorHint();
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");
    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [enabled]);

  if (!enabled || reduce) return null;

  const expanded = Boolean(hint);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] mix-blend-multiply"
      animate={{
        x: position.x,
        y: position.y,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.4 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-ink/40 bg-paper/80 text-[10px] font-medium tracking-[0.18em] text-ink shadow-[0_8px_20px_rgba(40,32,20,0.12)]"
        animate={{
          width: expanded ? 72 : 14,
          height: expanded ? 72 : 14,
          x: expanded ? -36 : -7,
          y: expanded ? -36 : -7,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      >
        {expanded ? hint : null}
      </motion.div>
    </motion.div>
  );
}

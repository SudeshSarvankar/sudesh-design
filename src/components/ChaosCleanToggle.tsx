"use client";

import { useDeskMode } from "@/context/DeskModeContext";
import { LayoutGrid, Puzzle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function ChaosCleanToggle() {
  const { mode, setMode, scrollHeroTo } = useDeskMode();

  return (
    <nav aria-label="Hero tools" className="pointer-events-auto flex items-center gap-2">
      <ToggleChip
        label="Chaos mode on"
        active={mode === "chaos"}
        onClick={() => {
          setMode("chaos");
          scrollHeroTo("chaos");
        }}
      >
        <Puzzle className="h-4 w-4" strokeWidth={1.75} />
      </ToggleChip>
      <ToggleChip
        label="Clean mode on"
        active={mode === "clean"}
        onClick={() => {
          setMode("clean");
          scrollHeroTo("clean");
        }}
      >
        <LayoutGrid className="h-4 w-4" strokeWidth={1.75} />
      </ToggleChip>
      <ToggleChip
        label="Focus mode on"
        active={mode === "focus"}
        onClick={() => setMode("focus")}
      >
        <Sparkles className="h-4 w-4" strokeWidth={1.75} />
      </ToggleChip>
    </nav>
  );
}

function ToggleChip({
  label,
  active,
  onClick,
  children,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className="grid h-12 w-12 place-items-center rounded-[14px] border border-line bg-paper text-ink/70 shadow-[0_8px_18px_rgba(40,32,18,0.08)]"
      animate={{
        backgroundColor: active ? "#c4b49a" : "#fffdf8",
        color: active ? "#fffdf8" : "#5c564c",
        scale: active ? 1.04 : 1,
      }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type DeskMode = "chaos" | "clean" | "focus";

type DeskModeContextValue = {
  mode: DeskMode;
  setMode: (mode: DeskMode) => void;
  scrollHeroTo: (mode: Extract<DeskMode, "chaos" | "clean">) => void;
};

const DeskModeContext = createContext<DeskModeContextValue | null>(null);

export function scrollHeroTo(mode: Extract<DeskMode, "chaos" | "clean">) {
  const el = document.getElementById("hero");
  if (!el) return;
  const top = mode === "chaos" ? el.offsetTop : el.offsetTop + window.innerHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

export function DeskModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<DeskMode>("chaos");

  const setMode = useCallback((next: DeskMode) => {
    setModeState(next);
  }, []);

  const value = useMemo(
    () => ({ mode, setMode, scrollHeroTo }),
    [mode, setMode],
  );

  return (
    <DeskModeContext.Provider value={value}>{children}</DeskModeContext.Provider>
  );
}

export function useDeskMode() {
  const context = useContext(DeskModeContext);
  if (!context) {
    throw new Error("useDeskMode must be used within DeskModeProvider");
  }
  return context;
}

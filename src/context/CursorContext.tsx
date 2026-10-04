"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type CursorHint = string | null;

type CursorContextValue = {
  hint: CursorHint;
  setHint: (hint: CursorHint) => void;
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [hint, setHintState] = useState<CursorHint>(null);
  const setHint = useCallback((next: CursorHint) => setHintState(next), []);
  const value = useMemo(() => ({ hint, setHint }), [hint, setHint]);

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
}

export function useCursorHint() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursorHint must be used within CursorProvider");
  }
  return context;
}

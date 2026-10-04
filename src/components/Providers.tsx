"use client";

import { CursorProvider } from "@/context/CursorContext";
import { DeskModeProvider } from "@/context/DeskModeContext";
import { CustomCursor } from "@/components/CustomCursor";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CursorProvider>
      <DeskModeProvider>
        {children}
        <CustomCursor />
      </DeskModeProvider>
    </CursorProvider>
  );
}

import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export const brand = "#c45c4a";

export function Path({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 break-words text-[11px] font-medium uppercase tracking-[0.16em] text-ink/35">
      {children}
    </p>
  );
}

export function Fig({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p className="mt-3 max-w-[72ch] text-[13px] leading-relaxed text-ink/50">
      <span className="font-medium text-ink/70">{id} </span>
      {children}
    </p>
  );
}

export function Frame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[24px] border border-line bg-paper shadow-[0_16px_36px_rgba(58,55,50,0.07)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Bar({
  title,
  right,
}: {
  title: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-line px-4 py-3 md:px-5">
      <p className="text-[13px] font-medium text-ink">{title}</p>
      {right}
    </div>
  );
}

export function Note({ n, children }: { n: number; children: ReactNode }) {
  return (
    <li className="flex gap-3 text-[14px] leading-relaxed text-ink/70">
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white"
        style={{ background: brand }}
      >
        {n}
      </span>
      {children}
    </li>
  );
}

export function Pill({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: "ink" | "wait" | "done" | "muted" | "brand";
}) {
  const map = {
    ink: "bg-ink text-cream",
    wait: "bg-[#ead7b8] text-ink",
    done: "bg-[#e7efe6] text-[#2f5a3c]",
    muted: "bg-[#f3f1ea] text-ink/60",
    brand: "text-white",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium",
        map[tone],
      )}
      style={tone === "brand" ? { background: brand } : undefined}
    >
      {children}
    </span>
  );
}

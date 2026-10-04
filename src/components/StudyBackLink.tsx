"use client";

import { useCursorHint } from "@/context/CursorContext";
import { cn } from "@/lib/cn";

export function StudyBackLink({
  href,
  label,
  variant = "pill",
}: {
  href: string;
  label: string;
  variant?: "pill" | "minimal";
}) {
  const { setHint } = useCursorHint();

  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center gap-2 text-[15px] text-ink/70 transition hover:text-ink",
        variant === "pill" &&
          "rounded-full border border-line bg-paper px-5 shadow-[0_8px_18px_rgba(40,32,18,0.08)]",
        variant === "minimal" && "px-1 font-sans tracking-[-0.02em]",
      )}
      onMouseEnter={() => setHint("BACK")}
      onMouseLeave={() => setHint(null)}
    >
      <span aria-hidden className="text-[18px] leading-none">
        ←
      </span>
      {label}
    </a>
  );
}

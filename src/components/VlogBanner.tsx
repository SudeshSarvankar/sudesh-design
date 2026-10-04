import type { Vlog } from "@/data/vlogs";

export function VlogBanner({ kind }: { kind: Vlog["banner"] }) {
  if (kind === "figmaCode") {
    return (
      <div className="relative flex h-full items-center justify-center gap-4 px-6">
        <div className="h-[68%] w-[38%] rounded-[14px] border border-white/70 bg-white/80 p-3 shadow-[0_10px_22px_rgba(58,55,50,0.08)]">
          <div className="flex gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f24e1e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#a259ff]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#1abcfe]" />
          </div>
          <div className="mt-3 h-[58%] rounded-md bg-[#f4f0e5]" />
          <div className="mt-2 space-y-1">
            <div className="h-1.5 w-4/5 rounded bg-ink/15" />
            <div className="h-1.5 w-2/5 rounded bg-ink/10" />
          </div>
        </div>
        <span className="font-hand text-3xl text-ink/40">→</span>
        <div className="h-[68%] w-[38%] rounded-[14px] bg-[#111318] p-3 shadow-[0_10px_22px_rgba(17,19,24,0.16)]">
          <p className="font-mono text-[10px] text-[#9ad7c6]">figma → claude</p>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-5/6 rounded bg-[#b7f5c6]/40" />
            <div className="h-1.5 w-3/5 rounded bg-[#b7f5c6]/40" />
            <div className="h-1.5 w-4/5 rounded bg-[#b7f5c6]/40" />
            <div className="h-1.5 w-2/5 rounded bg-[#b7f5c6]/40" />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "agent") {
    return (
      <div className="flex h-full items-center px-8">
        <div className="w-full rounded-[16px] border border-white/10 bg-[#1a1d24] p-4 text-[#b7f5c6] shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
          <p className="font-mono text-[11px] text-white/70">Cursor agent · portfolio</p>
          <p className="mt-3 font-mono text-[12px] leading-6">
            ☑ Read files
            <br />
            ☑ Edit components
            <br />
            ● Review in browser
          </p>
        </div>
      </div>
    );
  }

  if (kind === "human") {
    return (
      <div className="flex h-full flex-col justify-center gap-3 px-8">
        <div className="flex h-10 overflow-hidden rounded-full bg-white/70 shadow-inner">
          <div className="flex w-4/5 items-center bg-[#d8cfe8] px-4 text-[11px] font-medium uppercase tracking-[0.14em] text-ink/55">
            AI · first 80%
          </div>
          <div className="flex w-1/5 items-center justify-center bg-[#3a3732] text-[11px] font-medium text-[#f4f0e5]">
            20%
          </div>
        </div>
        <p className="font-hand text-[22px] text-ink/55">judgment lives here</p>
      </div>
    );
  }

  if (kind === "vibe") {
    return (
      <div className="relative h-full overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(58,55,50,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(58,55,50,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <svg viewBox="0 0 420 160" className="relative h-full w-full" fill="none">
          <path
            d="M24 110 C80 20, 140 150, 210 70 S340 20, 396 88"
            stroke="#c56b4a"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="210" cy="70" r="8" fill="#3a3732" />
        </svg>
      </div>
    );
  }

  if (kind === "boundary") {
    return (
      <div className="relative flex h-full items-center justify-center">
        <div className="absolute left-[14%] top-[22%] h-[56%] w-[42%] rotate-[-6deg] rounded-[16px] bg-white p-3 shadow-[0_10px_24px_rgba(58,55,50,0.1)]">
          <div className="flex gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f24e1e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#a259ff]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#0acf83]" />
          </div>
          <div className="mt-3 h-[70%] rounded-md bg-[#efe4d4]" />
        </div>
        <div className="absolute right-[12%] top-[28%] h-[52%] w-[46%] rotate-[7deg] rounded-[16px] border border-line bg-[#fffdf8] p-3 shadow-[0_10px_24px_rgba(58,55,50,0.1)]">
          <div className="h-2 w-16 rounded-full bg-ink/15" />
          <div className="mt-3 h-[72%] rounded-md bg-[#e8f1fb]" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-end justify-center gap-3 px-8 pb-6">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-[18%] rounded-[14px] border bg-white/80 shadow-[0_8px_16px_rgba(58,55,50,0.08)]"
          style={{
            height: i === 2 ? "72%" : "48%",
            borderColor: i === 2 ? "#3a3732" : "rgba(58,55,50,0.12)",
            transform: i === 2 ? "translateY(-8px)" : undefined,
          }}
        />
      ))}
    </div>
  );
}

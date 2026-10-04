export function ExperimentPreview({ kind }: { kind: "figma" | "cursor" | "color" }) {
  if (kind === "cursor") {
    return (
      <pre className="h-full overflow-hidden p-4 font-mono text-[11px] leading-5 text-[#b7f5c6]">
        {`> Working on 2 to-dos
☑ Read files
☐ Edit files
● Cooking...`}
      </pre>
    );
  }
  if (kind === "color") {
    return (
      <div className="flex h-full flex-col p-4">
        <div className="h-full rounded-md bg-[linear-gradient(120deg,#d35a4a,#7aa7d9,#f4e4c4)]" />
        <p className="mt-2 rounded bg-white/80 px-2 py-1 text-[10px] text-ink/60">
          Click anywhere to copy HEX
        </p>
      </div>
    );
  }
  return (
    <div className="flex h-full items-center gap-3 p-5">
      <div className="grid grid-cols-2 gap-1">
        <span className="h-8 w-8 rounded-full bg-[#7ad36a]" />
        <span className="h-8 w-8 rounded-full bg-[#4aa3ef]" />
        <span className="h-8 w-8 rounded-full bg-[#ef6b55]" />
        <span className="h-8 w-8 rounded-full bg-[#f0c14a]" />
      </div>
      <div className="flex-1 space-y-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded bg-ink/15"
            style={{ width: `${70 - i * 8}%` }}
          />
        ))}
      </div>
    </div>
  );
}

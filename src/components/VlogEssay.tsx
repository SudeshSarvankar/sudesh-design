import { StudyBackLink } from "@/components/StudyBackLink";
import { VlogBanner } from "@/components/VlogBanner";
import type { EssayBlock } from "@/data/vlogEssays";
import { vlogEssays } from "@/data/vlogEssays";
import type { Vlog } from "@/data/vlogs";

export function VlogEssay({ item }: { item: Vlog }) {
  const blocks = vlogEssays[item.slug] ?? [];

  return (
    <article className="bg-cream pb-24 pt-28">
      <div className="mx-auto w-full max-w-[860px] px-6 md:px-[88px]">
        <StudyBackLink href="/#writing" label="Back" variant="minimal" />

        <p className="mt-10 font-hand text-[28px] text-[#3a5c86]">{item.number}</p>
        <h1 className="mt-1 font-inter text-[clamp(2rem,5vw,3.2rem)] font-semibold tracking-[-0.03em] text-ink">
          {item.title}
        </h1>
        <p className="mt-4 max-w-[46ch] font-serif text-[22px] italic leading-snug text-muted">
          {item.dek}
        </p>

        <div
          className="mt-8 overflow-hidden rounded-[24px] shadow-[0_16px_36px_rgba(58,55,50,0.07)] ring-1 ring-black/[0.04]"
          style={{ background: item.accent }}
        >
          <div className="aspect-[16/7]">
            <VlogBanner kind={item.banner} />
          </div>
        </div>

        <div className="mt-12 space-y-6">
          {blocks.map((block, index) => (
            <EssayBlockView key={index} block={block} />
          ))}
        </div>

        <div className="mt-16">
          <StudyBackLink href="/#writing" label="Back" variant="minimal" />
        </div>
      </div>
    </article>
  );
}

function EssayBlockView({ block }: { block: EssayBlock }) {
  if (block.type === "h2") {
    return (
      <h2 className="pt-4 font-inter text-[24px] font-semibold tracking-[-0.03em] text-ink md:text-[28px]">
        {block.text}
      </h2>
    );
  }
  if (block.type === "p") {
    return (
      <p className="max-w-[62ch] text-[17px] leading-relaxed text-ink/75">{block.text}</p>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="rounded-[20px] border border-line bg-paper px-5 py-4 font-serif text-[20px] italic leading-snug text-ink/80 shadow-[0_8px_18px_rgba(40,32,18,0.05)]">
        {block.text}
      </blockquote>
    );
  }
  if (block.type === "line") {
    return (
      <p className="rounded-[20px] bg-[#111318] px-5 py-4 text-center font-sans text-[16px] leading-relaxed text-[#f4f0e5] md:text-[18px]">
        {block.text}
      </p>
    );
  }
  if (block.type === "list") {
    return (
      <ul className="space-y-2 text-[16px] text-ink/75">
        {block.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7ea0c4]" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ol className="space-y-1">
      {block.steps.map((step, index) => (
        <li key={step}>
          <div className="rounded-[18px] border border-line bg-paper px-5 py-3 text-center shadow-[0_8px_18px_rgba(40,32,18,0.05)]">
            <p className="font-sans text-[16px] font-semibold text-ink">{step}</p>
          </div>
          {index < block.steps.length - 1 ? (
            <p className="py-1 text-center font-hand text-xl text-ink/35" aria-hidden>
              ↓
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

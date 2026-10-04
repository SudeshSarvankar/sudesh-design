import { ExperimentPreview } from "@/components/ExperimentPreview";
import { StudyBackLink } from "@/components/StudyBackLink";
import type { Experiment } from "@/data/experiments";
import type { StudyBlock } from "@/data/experimentStudies";
import { experimentStudies } from "@/data/experimentStudies";

export function ExperimentStudy({ item }: { item: Experiment }) {
  const blocks = experimentStudies[item.slug] ?? [];

  return (
    <article className="bg-cream pb-24 pt-28">
      <div className="mx-auto w-full max-w-[980px] px-6 md:px-[88px]">
        <StudyBackLink href="/#experiments" label="Back to experiments" />

        <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
          Gen AI experiment
        </p>
        <h1 className="mt-3 font-inter text-[clamp(2rem,5vw,3.4rem)] font-semibold tracking-[-0.03em] text-ink">
          {item.title}
        </h1>
        <p className="mt-4 max-w-[46ch] font-serif text-[22px] italic leading-snug text-muted">
          {item.description}
        </p>

        <div
          className="mt-8 overflow-hidden rounded-[24px] shadow-[0_16px_36px_rgba(58,55,50,0.07)] ring-1 ring-black/[0.04]"
          style={{ background: item.accent }}
        >
          <div className="aspect-[16/8]">
            <ExperimentPreview kind={item.preview} />
          </div>
        </div>

        <div className="mt-12 space-y-8">
          {blocks.map((block, index) => (
            <StudyBlockView key={index} block={block} />
          ))}
        </div>

        <div className="mt-16">
          <StudyBackLink href="/#experiments" label="Back to experiments" />
        </div>
      </div>
    </article>
  );
}

function StudyBlockView({ block }: { block: StudyBlock }) {
  if (block.type === "kicker") {
    return (
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink/40">
        {block.text}
      </p>
    );
  }
  if (block.type === "h2") {
    return (
      <h2 className="font-inter text-[28px] font-semibold tracking-[-0.03em] text-ink md:text-[32px]">
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
  if (block.type === "callout") {
    return (
      <p className="rounded-full bg-[#f3f1ea] px-4 py-2 text-[13px] font-medium text-ink/70">
        {block.text}
      </p>
    );
  }
  if (block.type === "arrow") {
    return (
      <p className="text-center font-hand text-2xl text-ink/35" aria-hidden>
        ↓
      </p>
    );
  }
  if (block.type === "step") {
    return (
      <section className="rounded-[24px] border border-line bg-paper p-6 shadow-[0_12px_30px_rgba(40,32,18,0.06)] md:p-8">
        <p className="font-hand text-[22px] text-[#3a5c86]">{block.number}</p>
        <h3 className="mt-1 font-sans text-[22px] font-semibold tracking-[-0.02em] text-ink">
          {block.title}
        </h3>
        <div className="mt-4 space-y-3 text-[16px] leading-relaxed text-ink/75">
          {block.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {block.bullets ? (
          <ul className="mt-4 space-y-2 text-[16px] text-ink/75">
            {block.bullets.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7ea0c4]" />
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        {block.quote ? (
          <blockquote className="mt-4 rounded-[16px] bg-cream px-4 py-3 font-serif text-[17px] italic text-ink/70">
            {block.quote}
          </blockquote>
        ) : null}
        {block.output ? (
          <p className="mt-5 text-[13px] font-medium uppercase tracking-[0.12em] text-ink/45">
            {block.output}
          </p>
        ) : null}
      </section>
    );
  }
  if (block.type === "line") {
    return (
      <p className="rounded-[20px] bg-[#111318] px-5 py-4 text-center font-sans text-[16px] leading-relaxed text-[#f4f0e5] md:text-[18px]">
        {block.text}
      </p>
    );
  }
  if (block.type === "roles") {
    return (
      <ul className="grid gap-3 sm:grid-cols-2">
        {block.items.map((item) => (
          <li
            key={item.label}
            className="rounded-[20px] border border-line bg-paper px-5 py-4 shadow-[0_8px_18px_rgba(40,32,18,0.05)]"
          >
            <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">
              {item.label}
            </p>
            <p className="mt-2 font-sans text-[17px] font-semibold text-ink">
              {item.job}
            </p>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "flow") {
    return (
      <ol className="space-y-2">
        {block.steps.map((step, index) => (
          <li key={step.title}>
            <div className="rounded-[18px] border border-line bg-paper px-5 py-4 text-center shadow-[0_8px_18px_rgba(40,32,18,0.05)]">
              <p className="font-sans text-[16px] font-semibold text-ink">{step.title}</p>
              {step.note ? (
                <p className="mt-1 text-[13px] text-ink/55">{step.note}</p>
              ) : null}
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
  return null;
}

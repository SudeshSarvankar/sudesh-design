"use client";

import { testimonials } from "@/data/testimonials";

export function Recommendations() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="recommendations" aria-label="Recommendations" className="overflow-x-clip bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-24 pt-8 md:px-[88px] md:pb-[120px] md:pt-10">
        <header className="mb-12 text-center md:mb-16">
          <h2 className="font-sans text-[28px] font-semibold uppercase tracking-[0.08em] text-ink md:text-[32px]">
            Recommendations
          </h2>
        </header>
        <div className="relative -mx-6 overflow-hidden md:-mx-[88px]">
          <div
            className="marquee-track-slow flex w-max items-stretch px-6 md:px-[88px]"
            style={{ gap: 32 }}
            role="list"
            aria-label="Recommendations"
          >
            {loop.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                role="listitem"
                className="flex h-full w-[min(560px,85vw)] shrink-0 flex-col border border-[#e0e0e0] bg-white p-8 md:w-[560px] md:p-10"
                style={{ borderRadius: 32 }}
              >
                <p className="flex-1 text-[18px] leading-relaxed text-ink md:text-[20px]">
                  “{item.quote}”
                </p>
                <footer className="mt-10 flex items-center gap-4">
                  <span
                    className="grid h-[78px] w-[78px] shrink-0 place-items-center rounded-full text-sm font-semibold"
                    style={{ background: item.tone }}
                  >
                    {item.initials}
                  </span>
                  <span>
                    <cite className="not-italic font-medium text-ink">{item.name}</cite>
                    {item.role ? (
                      <span className="mt-1 block text-[12px] uppercase tracking-[0.12em] text-muted">
                        {item.role}
                      </span>
                    ) : null}
                  </span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

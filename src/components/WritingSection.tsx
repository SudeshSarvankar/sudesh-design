"use client";

import { useCursorHint } from "@/context/CursorContext";
import { site } from "@/data/site";
import { vlogs } from "@/data/vlogs";

export function WritingSection() {
  const { setHint } = useCursorHint();
  const loop = [...site.skills, ...site.skills, ...site.skills];

  return (
    <section
      id="writing"
      aria-label="A record of curiosity"
      className="scroll-mt-24 overflow-x-clip bg-white"
    >
      <div className="pointer-events-none relative -left-[8%] w-[116%] rotate-[-8deg] py-6" aria-hidden>
        <div className="overflow-hidden bg-[#f3ead4] py-3 shadow-sm">
          <div className="marquee-track flex w-max gap-8 px-6 font-serif text-[18px] italic text-[#8a7358]">
            {loop.map((skill, index) => (
              <span key={`${skill}-${index}`} className="flex items-center gap-8">
                {skill}
                <span>•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-6 md:px-[88px] md:pb-[88px]" style={{ marginTop: 18 }}>
        <header className="mb-8 max-w-2xl md:mb-10">
          <h2 className="font-inter text-[32px] font-semibold tracking-[-0.03em] text-ink md:text-[40px]">
            A Record of Curiosity
          </h2>
          <p className="mt-3 font-serif text-[18px] italic leading-snug text-muted md:text-[20px]">
            Things I build, questions I explore, and what I&apos;m learning about AI, design, and technology.
          </p>
          <p className="mt-3 text-[13px] text-ink/45">Scroll to explore →</p>
        </header>

        <div
          role="list"
          aria-label="Essays"
          className="-mx-6 flex gap-5 overflow-x-auto px-6 pb-4 md:-mx-0 md:px-0"
        >
          {vlogs.map((item) => (
            <a
              key={item.slug}
              role="listitem"
              href={`/writing/${item.slug}`}
              aria-label={`Read essay: ${item.title}`}
              className="w-[min(280px,78vw)] shrink-0"
              onMouseEnter={() => setHint("READ")}
              onMouseLeave={() => setHint(null)}
            >
              <div
                className="relative aspect-[5/4] overflow-hidden rounded-[16px]"
                style={{ background: item.cover }}
              >
                {item.banner === "agent" ? (
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_58%_38%,#f3d7c4_0%,#8b1e24_42%,#3a1014_100%)]" />
                ) : null}
                {item.banner === "vibe" ? (
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,#f0d56a,#f7e7a8)]" />
                ) : null}
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/70 shadow-sm">
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-4 font-sans text-[18px] font-semibold leading-snug text-ink md:text-[20px]">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] text-muted">{item.meta}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

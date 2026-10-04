"use client";

import { ExperimentPreview } from "@/components/ExperimentPreview";
import { useCursorHint } from "@/context/CursorContext";
import { experiments } from "@/data/experiments";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function AIExperiments() {
  const { setHint } = useCursorHint();

  return (
    <section
      id="experiments"
      aria-label="Gen AI experiments"
      className="scroll-mt-24 bg-white"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-[88px] md:py-[100px]">
        <header className="mb-12 max-w-2xl md:mb-16">
          <h2 className="font-inter text-[36px] font-semibold tracking-[-0.03em] text-ink md:text-[48px]">
            Gen AI experiments
          </h2>
          <p className="mt-4 font-serif text-[22px] italic text-muted">
            Late-night explorations with AI
          </p>
        </header>
        <div className="relative overflow-hidden rounded-[24px] dot-grid">
          <div className="relative flex gap-5 overflow-x-auto p-6 md:grid md:grid-cols-3 md:overflow-visible md:p-10">
            {experiments.map((item, index) => (
              <motion.article
                key={item.slug}
                role="listitem"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="min-w-[260px] overflow-hidden rounded-[20px] bg-white shadow-[0_12px_30px_rgba(40,32,18,0.06)] md:min-w-0"
              >
                <div className="relative aspect-[5/3] overflow-hidden" style={{ background: item.accent }}>
                  <ExperimentPreview kind={item.preview} />
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] text-ink/70">
                    {item.stack}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-sans text-[18px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{item.description}</p>
                  <Link
                    href={`/experiments/${item.slug}`}
                    aria-label={`Read more: ${item.title}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm text-ink"
                    onMouseEnter={() => setHint("READ")}
                    onMouseLeave={() => setHint(null)}
                  >
                    Read more →
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Resume — ${site.name}`,
};

export default function ResumePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6">
      <p className="font-serif uppercase tracking-[0.12em] text-muted">Resume</p>
      <h1 className="mt-3 font-script text-[clamp(2.4rem,10vw,3.75rem)] text-ink">{site.name}</h1>
      <p className="mt-2 text-ink/70">{site.role}</p>
      <p className="mt-6 max-w-xl text-ink/75">{site.tagline}</p>
      <dl className="mt-10 space-y-6">
        {site.timeline.map((item) => (
          <div key={item.label} className="flex flex-col gap-1 border-b border-ink/10 pb-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <dt className="min-w-0 break-words font-medium">{item.label}</dt>
            <dd className="shrink-0 text-sm text-muted">{item.years}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-10 break-words text-sm text-ink/60">
        {site.email} · {site.location}
      </p>
    </article>
  );
}

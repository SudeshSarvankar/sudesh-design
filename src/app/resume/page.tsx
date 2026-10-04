import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Resume — ${site.name}`,
};

export default function ResumePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <p className="font-serif uppercase tracking-[0.12em] text-muted">Resume</p>
      <h1 className="mt-3 font-script text-5xl text-ink">{site.name}</h1>
      <p className="mt-2 text-ink/70">{site.role}</p>
      <p className="mt-6 max-w-xl text-ink/75">{site.tagline}</p>
      <dl className="mt-10 space-y-6">
        {site.timeline.map((item) => (
          <div key={item.label} className="flex items-baseline justify-between gap-6 border-b border-ink/10 pb-4">
            <dt className="font-medium">{item.label}</dt>
            <dd className="text-sm text-muted">{item.years}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-10 text-sm text-ink/60">
        {site.email} · {site.location}
      </p>
    </article>
  );
}

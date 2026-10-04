"use client";

import { useCursorHint } from "@/context/CursorContext";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectVisual } from "@/components/ProjectVisual";
import type { ReactNode } from "react";

export function CaseStudyCard({ project }: { project: Project }) {
  const { setHint } = useCursorHint();
  const isExternal = Boolean(project.href);
  const locked = Boolean(project.comingSoon);

  const body = (
    <>
      <div className="relative aspect-[616/400] overflow-hidden rounded-[24px] shadow-[0_16px_36px_rgba(58,55,50,0.07)] ring-1 ring-black/[0.04]">
        <div className="size-full">
          <ProjectVisual project={project} />
        </div>
        {locked ? (
          <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink/50 shadow-sm">
            Soon
          </span>
        ) : (
          <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink/80 shadow-[0_8px_18px_rgba(58,55,50,0.08)] transition group-hover/card:-translate-y-0.5">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        )}
      </div>
      <h3 className="mt-5 font-sans text-[22px] font-semibold leading-snug tracking-[-0.02em] text-ink md:text-[26px]">
        {project.title}
      </h3>
      <p className="mt-2 line-clamp-3 min-h-[4.5rem] max-w-[46ch] text-[15px] leading-relaxed text-muted">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-[#f3f1ea] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink/55"
          >
            {tag}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <motion.article
      className="flex w-full min-w-0 max-w-full flex-col"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 140, damping: 20 }}
    >
      {locked ? (
        <div className="group/card flex h-full flex-col">{body}</div>
      ) : (
        <CardLink
          href={project.href ?? `/work/${project.slug}`}
          external={isExternal}
          label={`Open case study: ${project.title}`}
          onEnter={() => setHint(isExternal ? "FIGMA" : "VIEW")}
          onLeave={() => setHint(null)}
        >
          {body}
        </CardLink>
      )}
    </motion.article>
  );
}

function CardLink({
  href,
  external,
  label,
  onEnter,
  onLeave,
  children,
}: {
  href: string;
  external: boolean;
  label: string;
  onEnter: () => void;
  onLeave: () => void;
  children: ReactNode;
}) {
  const className = "group/card flex h-full flex-col";
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className={className}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      aria-label={label}
      className={className}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  );
}

"use client";

import { useCursorHint } from "@/context/CursorContext";
import type { Project } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectVisual } from "@/components/ProjectVisual";

export function NDAProject({ project }: { project: Project }) {
  const { setHint } = useCursorHint();

  return (
    <motion.article
      className="md:col-span-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Link
        href={`/work/${project.slug}`}
        aria-label="Open case study: Under NDA"
        className="block cursor-none overflow-hidden rounded-[2px] border border-ink/20"
        onMouseEnter={() => setHint("ASK")}
        onMouseLeave={() => setHint(null)}
      >
        <ProjectVisual project={project} featured />
        <div className="bg-ink px-6 py-6 text-paper">
          <h3 className="font-display text-3xl tracking-tight">Under NDA</h3>
          <p className="mt-2 max-w-lg text-sm text-paper/70">
            I can present the project during an interview. The work is real; the
            pixels stay in the room.
          </p>
        </div>
      </Link>
    </motion.article>
  );
}

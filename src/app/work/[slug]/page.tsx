import { StudyBackLink } from "@/components/StudyBackLink";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

export function generateStaticParams() {
  return projects
    .filter((project) => !project.href && !project.comingSoon)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project ? `${project.title} — ${site.name}` : site.name,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  if (project.href) redirect(project.href);
  if (project.comingSoon) redirect("/#featured-work");

  return (
    <article className="bg-cream pb-24 pt-28">
      <div className="mx-auto w-full max-w-[980px] px-6 md:px-[88px]">
        <StudyBackLink href="/#featured-work" label="Back to work" />
        <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/40">
          Project {project.number}
        </p>
        <h1 className="mt-3 font-inter text-[clamp(2rem,5vw,3.4rem)] font-semibold tracking-[-0.03em] text-ink">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl font-serif text-[22px] italic leading-snug text-muted">
          {project.description}
        </p>
        <div className="mt-16">
          <StudyBackLink href="/#featured-work" label="Back to work" />
        </div>
      </div>
    </article>
  );
}

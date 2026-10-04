import { CaseStudyCard } from "@/components/CaseStudyCard";
import { projects } from "@/data/projects";

export function CaseStudies() {
  return (
    <section
      id="featured-work"
      aria-label="Featured work"
      className="scroll-mt-24 bg-white"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-[88px] md:py-[100px]">
        <div className="mx-auto flex w-full max-w-[1266px] flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-4">
            <p className="font-serif text-[15px] uppercase tracking-[0.08em] text-muted">
              Case studies
            </p>
            <h2 className="max-w-[469px] font-sans text-[34px] font-bold leading-[1.15] text-ink md:text-[44px]">
              Think. Design. Develop. Launch.{" "}
              <span className="text-[rgba(98,108,129,0.5)]">Repeat</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-[33px] gap-y-14 md:grid-cols-2">
            {projects.map((project) => (
              <CaseStudyCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

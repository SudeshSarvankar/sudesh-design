import { AIExperiments } from "@/components/AIExperiments";
import { CaseStudies } from "@/components/CaseStudies";
import { Hero } from "@/components/Hero";
import { JournalSection } from "@/components/JournalSection";
import { Recommendations } from "@/components/Recommendations";
import { WritingSection } from "@/components/WritingSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <JournalSection />
      <AIExperiments />
      <WritingSection />
      <Recommendations />
    </>
  );
}

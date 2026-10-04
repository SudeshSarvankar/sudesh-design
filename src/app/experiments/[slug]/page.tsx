import { ExperimentStudy } from "@/components/ExperimentStudy";
import { experiments, getExperiment } from "@/data/experiments";
import { site } from "@/data/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return experiments.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getExperiment(slug);
  return { title: item ? `${item.title} — ${site.name}` : site.name };
}

export default async function ExperimentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getExperiment(slug);
  if (!item) notFound();

  return <ExperimentStudy item={item} />;
}

import { VlogEssay } from "@/components/VlogEssay";
import { site } from "@/data/site";
import { getVlog, vlogs } from "@/data/vlogs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return vlogs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getVlog(slug);
  return { title: item ? `${item.title} — ${site.name}` : site.name };
}

export default async function VlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getVlog(slug);
  if (!item) notFound();
  return <VlogEssay item={item} />;
}

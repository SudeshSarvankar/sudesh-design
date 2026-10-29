import { site } from "@/data/site";
import type { Metadata } from "next";
import { FieldaStory } from "./FieldaStory";

export const metadata: Metadata = {
  title: `Fielda — ${site.name}`,
  description:
    "From 128 field workers on WhatsApp to one map they all work from. Design lead case study for Fielda across web, mobile and tablet.",
};

export default function FieldaPage() {
  return <FieldaStory />;
}

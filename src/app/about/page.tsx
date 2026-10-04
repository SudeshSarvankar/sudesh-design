import { site } from "@/data/site";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
};

export default function AboutPage() {
  redirect("/#journal");
}

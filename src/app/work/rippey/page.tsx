import { site } from "@/data/site";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { RippeyStory } from "./RippeyStory";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-rp-open",
});

export const metadata: Metadata = {
  title: `Rippey — ${site.name}`,
  description:
    "From quote requests lost in email to quotes, bookings and payments in one chat. Design lead case study for Rippey, the RPA Labs bot for BluJay Solutions.",
};

export default function RippeyPage() {
  return <RippeyStory className={openSans.variable} />;
}

import { site } from "@/data/site";
import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import { BluBunnyStory } from "./BluBunnyStory";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-bb-open",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-bb-roboto",
});

export const metadata: Metadata = {
  title: `BluBunny — ${site.name}`,
  description:
    "One console for sellers, every marketplace they sell on. Design lead case study for BluBunny's seller and admin app.",
};

export default function BluBunnyPage() {
  return <BluBunnyStory className={`${openSans.variable} ${roboto.variable}`} />;
}

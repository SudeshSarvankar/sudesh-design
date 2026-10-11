export type ProjectDevice = "ai" | "laptop" | "phone" | "phones";

export type Project = {
  slug: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  device: ProjectDevice;
  href?: string;
  comingSoon?: boolean;
  cover?: string;
  coverSecondary?: string;
};

export const projects: Project[] = [
  {
    slug: "employee-center",
    number: "01",
    title: "UBS Employee Center",
    description:
      "One front door for HR, IT, Facilities, Finance, Legal and Procurement — 220+ screens, two years, still evolving.",
    tags: ["Enterprise", "Service design", "Design system"],
    accent: "#f3eee6",
    device: "laptop",
  },
  {
    slug: "ubs-data-ea-pilot",
    number: "02",
    title: "UBS Data EA Pilot",
    description:
      "A Gen AI assistant that answers architecture questions in plain language, from live data across six sources, and shows exactly where every answer came from.",
    tags: ["Enterprise architecture", "Gen AI", "Data"],
    accent: "#f3eee6",
    device: "laptop",
  },
  {
    slug: "bajaj-markets",
    number: "03",
    title: "Bajaj Markets",
    description:
      "An NBFC solution that brings financial and shopping needs together in one platform.",
    tags: ["NBFC", "Finance", "Shopping"],
    accent: "#ece7df",
    device: "phone",
    cover: "/work/ui/bajaj.png",
    href: "https://www.figma.com/proto/UeLblMIYwR2l9RkZBRBX9P/Case-study-(Original))?node-id=1788%3A116&scaling=min-zoom&page-id=1788%3A108",
  },
  {
    slug: "blubunny",
    number: "04",
    title: "Blubunny",
    description:
      "A multichannel marketplace designed to showcase and manage e-commerce products.",
    tags: ["Marketplace", "E-commerce"],
    accent: "#e9efe6",
    device: "phone",
    cover: "/work/ui/blubunny.png",
    href: "https://www.figma.com/proto/UeLblMIYwR2l9RkZBRBX9P/Case-study--Original--?node-id=1888-110&scaling=min-zoom&page-id=1888%3A109",
  },
  {
    slug: "fielda",
    number: "05",
    title: "Fielda",
    description:
      "Fielda is a mobile data collection app and an easy-to-use application for managing field activities. It helps users conduct surveys and perform field asset inspections.",
    tags: ["Field ops", "Surveys", "Inspections"],
    accent: "#ece8de",
    device: "laptop",
    cover: "/work/ui/fielda.png",
    href: "https://www.figma.com/proto/UeLblMIYwR2l9RkZBRBX9P/Case-study--Original--?node-id=654-805&scaling=min-zoom&page-id=654%3A804",
  },
  {
    slug: "quality-kiosk",
    number: "06",
    title: "Quality Kiosk",
    description:
      "A test management tool designed to streamline and manage testing processes.",
    tags: ["QA", "Test management"],
    accent: "#e8efe8",
    device: "laptop",
    cover: "/work/ui/quality-kiosk.png",
    href: "https://www.figma.com/proto/UeLblMIYwR2l9RkZBRBX9P/Case-study-(Original))?node-id=5%3A1&scaling=min-zoom&page-id=0%3A1",
  },
  {
    slug: "rippy",
    number: "07",
    title: "Rippy",
    description:
      "An intelligent assistant that provides service solutions through robotic process automation for companies in the logistics and supply chain industry, using a chatbot interface.",
    tags: ["RPA", "Chatbot", "Logistics"],
    accent: "#ebe7e0",
    device: "phones",
    cover: "/work/ui/rippy-a.png",
    coverSecondary: "/work/ui/rippy-b.png",
    href: "https://www.figma.com/proto/UeLblMIYwR2l9RkZBRBX9P/Case-study-(Original))?node-id=993%3A1001&scaling=min-zoom&page-id=103%3A2",
  },
  {
    slug: "rpa-labs",
    number: "08",
    title: "RPA Labs",
    description:
      "A full-service solution tailored for logistics and supply chain businesses.",
    tags: ["Logistics", "Supply chain"],
    accent: "#e9ebf2",
    device: "laptop",
    cover: "/work/ui/rpa-labs.png",
    href: "https://www.figma.com/proto/UeLblMIYwR2l9RkZBRBX9P/Case-study--Original--?node-id=1888-646&scaling=min-zoom&page-id=1888%3A644",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

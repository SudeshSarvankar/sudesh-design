export type Vlog = {
  slug: string;
  number: string;
  title: string;
  dek: string;
  tag: string;
  meta: string;
  cover: string;
  accent: string;
  banner: "figmaCode" | "agent" | "human" | "vibe" | "boundary" | "taste";
};

export const vlogs: Vlog[] = [
  {
    slug: "figma-to-code-claude-mcp",
    number: "01",
    title: "From Figma to Code in 5 Hours With Claude + MCP",
    dek: "How I experimented with turning a design into a working product without the traditional handoff.",
    tag: "AI × Design",
    meta: "Experiment · Design-to-code",
    cover: "#e4efb8",
    accent: "#f3e7d6",
    banner: "figmaCode",
  },
  {
    slug: "ai-agent-portfolio",
    number: "02",
    title: "I Let an AI Agent Build My Portfolio",
    dek: "What happened when I stopped asking AI for code snippets and started giving it real responsibility.",
    tag: "AI × Development",
    meta: "Experiment · AI agents",
    cover: "#8b1e24",
    accent: "#111318",
    banner: "agent",
  },
  {
    slug: "what-still-needed-a-human",
    number: "03",
    title: "I Built a Website With AI. Here's What Still Needed a Human.",
    dek: "AI can build surprisingly much. But the last 20% is where things get interesting.",
    tag: "AI × Craft",
    meta: "Essay · Human judgment",
    cover: "#7eb6ea",
    accent: "#efe4d4",
    banner: "human",
  },
  {
    slug: "vibe-coding",
    number: "04",
    title: "Vibe Coding Is Fast. But Is It Good?",
    dek: "The problem isn't that AI makes coding easier. The problem is that easy code can make us stop thinking.",
    tag: "AI × Speed",
    meta: "Essay · Vibe coding",
    cover: "#f0d56a",
    accent: "#e7eef4",
    banner: "vibe",
  },
  {
    slug: "designers-coding-with-ai",
    number: "05",
    title: "What Happens When Designers Start Coding With AI?",
    dek: "AI is making the distance between design and development smaller. That changes the role of the designer.",
    tag: "AI × Role",
    meta: "Essay · Design + code",
    cover: "#c9d6c3",
    accent: "#e8efe4",
    banner: "boundary",
  },
  {
    slug: "when-everyone-can-build",
    number: "06",
    title: "When Everyone Can Build, Taste Becomes the Differentiator",
    dek: "AI is making execution cheaper. That makes judgment more valuable.",
    tag: "AI × Taste",
    meta: "Essay · Judgment",
    cover: "#ead7b8",
    accent: "#f0e6dc",
    banner: "taste",
  },
];

export function getVlog(slug: string) {
  return vlogs.find((item) => item.slug === slug);
}

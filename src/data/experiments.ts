export type Experiment = {
  slug: string;
  title: string;
  stack: string;
  description: string;
  note: string;
  accent: string;
  preview: "figma" | "cursor" | "color";
};

export const experiments: Experiment[] = [
  {
    slug: "claude-figma-mcp",
    title: "Claude design + Figma MCP",
    stack: "Case study",
    description:
      "Translated a concept into a working landing page using Claude in 5 hours.",
    note: "A design file that talks back, then gets out of the way.",
    accent: "#f3e7d6",
    preview: "figma",
  },
  {
    slug: "cursor-github",
    title: "Cursor + Github",
    stack: "Case study",
    description:
      "Built and shipped a pixel-perfect portfolio using Cursor AI agents.",
    note: "Versioned experiments, not disposable prompts.",
    accent: "#111318",
    preview: "cursor",
  },
  {
    slug: "claude-gpt",
    title: "Claude + GPT",
    stack: "Case study",
    description:
      "One idea, two models, one loop — Claude to think, GPT to build, me to decide.",
    note: "Less eyedropper, more editorial judgment.",
    accent: "#d7e8f2",
    preview: "color",
  },
];

export function getExperiment(slug: string) {
  return experiments.find((item) => item.slug === slug);
}

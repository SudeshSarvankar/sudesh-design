export type StudyBlock =
  | { type: "kicker"; text: string }
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "callout"; text: string }
  | { type: "arrow" }
  | { type: "list"; items: string[] }
  | {
      type: "step";
      number: string;
      title: string;
      body: string[];
      bullets?: string[];
      quote?: string;
      output?: string;
    }
  | { type: "line"; text: string }
  | { type: "roles"; items: { label: string; job: string }[] }
  | { type: "flow"; steps: { title: string; note?: string }[] };

export const experimentStudies: Record<string, StudyBlock[]> = {
  "claude-figma-mcp": [
    { type: "kicker", text: "Takeaway" },
    {
      type: "p",
      text: "The biggest lesson from this experiment was that you don't need to treat AI as a replacement for the design process. You can use it as a bridge between Figma → code → feedback → refinement.",
    },
    {
      type: "p",
      text: "If you want to try the same workflow, here’s the process I followed.",
    },
    {
      type: "step",
      number: "01",
      title: "Start with your concept",
      body: ["Define what you want to build before opening Claude."],
      bullets: [
        "What are you building?",
        "Who is it for?",
        "What should the page communicate?",
        "What should the final experience feel like?",
      ],
      output: "Output: a clear concept and goal",
    },
    { type: "arrow" },
    {
      type: "step",
      number: "02",
      title: "Design it in Figma",
      body: [
        "Create the landing page in Figma. Don't worry about making the code yet.",
      ],
      bullets: [
        "Layout",
        "Typography",
        "Colors",
        "Spacing",
        "Components",
        "Images",
        "Responsive behavior",
      ],
      output: "Figma becomes your source of truth",
    },
    { type: "arrow" },
    {
      type: "step",
      number: "03",
      title: "Connect Figma to Claude",
      body: [
        "Set up Figma MCP so Claude can access the design context. Now Claude can work with the actual design instead of trying to understand it only from a text description.",
      ],
      output: "Figma → Design context → Claude",
    },
    { type: "arrow" },
    {
      type: "step",
      number: "04",
      title: "Ask Claude to build the first version",
      body: ["Give Claude a clear task. Let it create the first working version. Don't try to make it perfect yet."],
      quote:
        "Build this landing page based on the Figma design. Match the layout, typography, spacing, colors and components as closely as possible. Make it responsive and keep the code clean and reusable.",
    },
    { type: "arrow" },
    {
      type: "step",
      number: "05",
      title: "Run the page",
      body: ["Open the implementation in your browser. Compare the Figma design with the working page."],
      bullets: [
        "Is the layout correct?",
        "Is the typography right?",
        "Is the spacing consistent?",
        "Are images the right size?",
        "Does it work on mobile?",
      ],
      output: "Figma design ↔ Working page",
    },
    { type: "arrow" },
    {
      type: "step",
      number: "06",
      title: "Give Claude specific feedback",
      body: [
        "Don't say “Make it look better.” Describe exactly what is wrong. Specific feedback gives Claude a much clearer direction.",
      ],
      quote:
        "The hero heading is too large, the CTA is 16px too low, and the gap between the image and text should be smaller. Fix these without changing the overall layout.",
    },
    { type: "arrow" },
    {
      type: "step",
      number: "07",
      title: "Repeat the loop",
      body: [
        "Keep repeating: Compare → Find differences → Tell Claude → Review. Fix the biggest differences first.",
      ],
      output: "Layout → Typography → Spacing → Components → Responsive → Details",
    },
    { type: "arrow" },
    {
      type: "step",
      number: "08",
      title: "Polish the final version",
      body: [
        "Once the major differences are fixed, focus on the small details. This is where the page starts feeling polished rather than simply “AI generated.”",
      ],
      bullets: [
        "Hover states",
        "Animations",
        "Transitions",
        "Mobile spacing",
        "Edge cases",
        "Loading behavior",
        "Accessibility",
      ],
    },
    { type: "arrow" },
    {
      type: "step",
      number: "09",
      title: "Ship it",
      body: [
        "When the page matches the design and works across screen sizes: Test → Commit → Deploy → Share.",
      ],
      output: "A working landing page from an AI-assisted design-to-code workflow",
    },
    { type: "h2", text: "The whole process in one line" },
    {
      type: "line",
      text: "Concept → Figma → Figma MCP → Claude → First build → Compare → Feedback → Refine → Ship",
    },
    { type: "h2", text: "The important part" },
    {
      type: "p",
      text: "You don't need to get everything right in the first prompt.",
    },
    {
      type: "quote",
      text: "Design it once. Build it quickly. Compare it carefully. Give precise feedback. Repeat until it feels right.",
    },
    {
      type: "p",
      text: "That's what made it possible to go from concept to working landing page in 5 hours.",
    },
  ],
  "cursor-github": [
    { type: "kicker", text: "Workflow" },
    {
      type: "p",
      text: "This portfolio was built and shipped with Cursor agents, then versioned on GitHub. The point wasn’t a single perfect prompt — it was a loop you can scan and repeat.",
    },
    {
      type: "step",
      number: "01",
      title: "Start with a source of truth",
      body: [
        "I used a designed reference (this site’s visual language) before asking the agent to write code. Agents need a target, not a vibe.",
      ],
    },
    { type: "arrow" },
    {
      type: "step",
      number: "02",
      title: "Let Cursor read the repo",
      body: [
        "Agents work better when they can see layout, tokens, and existing components. I pointed them at local files instead of pasting the whole project into chat.",
      ],
    },
    { type: "arrow" },
    {
      type: "step",
      number: "03",
      title: "Build in small, checkable steps",
      body: [
        "One section at a time: hero, work, journal, experiments. After each pass I compared the page in the browser to the intended design.",
      ],
    },
    { type: "arrow" },
    {
      type: "step",
      number: "04",
      title: "Give precise visual feedback",
      body: [
        "Spacing, type, and interaction notes were specific. Vague “make it nicer” prompts waste a whole generation.",
      ],
    },
    { type: "arrow" },
    {
      type: "step",
      number: "05",
      title: "Commit to GitHub",
      body: [
        "Each working slice went into git so experiments stayed versioned — not disposable prompt history.",
      ],
      output: "Concept → Cursor → Browser check → Feedback → Commit → Ship",
    },
    {
      type: "quote",
      text: "Versioned experiments, not disposable prompts.",
    },
  ],
  "claude-gpt": [
    { type: "kicker", text: "Claude + GPT" },
    { type: "h2", text: "One idea, two AI models, one finished product" },
    {
      type: "p",
      text: "I wanted to explore how different AI models could work together during the product-building process. Instead of relying on a single model for everything, I used Claude and GPT for different parts of the workflow — using each where it was most useful.",
    },
    {
      type: "p",
      text: "The result was a faster way to go from an idea to a refined, working experience.",
    },
    { type: "h2", text: "The idea" },
    {
      type: "p",
      text: "The basic workflow was simple. Claude and GPT became two different thinking partners inside that loop. Rather than asking both models the same thing, I gave them different responsibilities.",
    },
    { type: "line", text: "Think → Ask → Build → Review → Improve" },
    { type: "h2", text: "How it worked" },
    {
      type: "step",
      number: "01",
      title: "Start with the idea",
      body: [
        "First, I defined what I wanted to build. The clearer the starting point, the better the AI output.",
      ],
      bullets: [
        "What am I building?",
        "Who is it for?",
        "What should the final experience feel like?",
      ],
      output: "Input: idea + goals + references",
    },
    { type: "arrow" },
    {
      type: "step",
      number: "02",
      title: "Use Claude to explore",
      body: [
        "I used Claude to think through the idea before jumping into implementation.",
      ],
      bullets: [
        "Exploring different directions",
        "Structuring the experience",
        "Breaking the idea into smaller problems",
        "Thinking through UX and content",
        "Identifying things I might have missed",
      ],
      output: "Claude = Explore + Structure",
    },
    { type: "arrow" },
    {
      type: "step",
      number: "03",
      title: "Use GPT to solve and refine",
      body: [
        "Once the direction was clear, I used GPT to help turn the thinking into concrete solutions.",
      ],
      bullets: [
        "Implementation ideas",
        "Code and technical solutions",
        "Debugging",
        "Refining details",
        "Exploring alternative approaches",
      ],
      output: "GPT = Build + Solve",
    },
    { type: "arrow" },
    {
      type: "step",
      number: "04",
      title: "Bring the output together",
      body: [
        "The important part was not treating either model as the final authority. I reviewed the output myself and decided what actually worked.",
      ],
    },
    {
      type: "flow",
      steps: [
        { title: "Claude", note: "Explore the problem" },
        { title: "GPT", note: "Turn the direction into a solution" },
        { title: "Me", note: "Review, test and make decisions" },
        { title: "AI", note: "Refine based on feedback" },
        { title: "Final", note: "Working experience" },
      ],
    },
    { type: "h2", text: "A simple example" },
    {
      type: "p",
      text: "Instead of asking “Build me a landing page,” I split the work.",
    },
    {
      type: "quote",
      text: "Claude: Help me think through the structure and user experience for this landing page. What sections should it have and why?",
    },
    {
      type: "quote",
      text: "GPT: Using this structure, help me implement the landing page. Focus on clean components, responsive behavior and visual hierarchy.",
    },
    {
      type: "quote",
      text: "Me: The hero feels too heavy. The spacing is inconsistent and the CTA doesn't stand out.",
    },
    {
      type: "quote",
      text: "GPT: Refine the implementation based on those issues.",
    },
    { type: "p", text: "This creates a much tighter feedback loop." },
    { type: "h2", text: "Why use two models?" },
    {
      type: "p",
      text: "The goal wasn't to use more AI just for the sake of it. It was about giving each model a clear job.",
    },
    {
      type: "roles",
      items: [
        { label: "Explore · Claude", job: "Think through the problem" },
        { label: "Structure · Claude", job: "Organize the experience" },
        { label: "Build · GPT", job: "Turn ideas into solutions" },
        { label: "Debug · GPT", job: "Find and fix problems" },
        { label: "Review · Me", job: "Make design decisions" },
        { label: "Refine · Both", job: "Improve the result" },
      ],
    },
    { type: "h2", text: "What I learned" },
    {
      type: "step",
      number: "1",
      title: "Don't ask AI to do everything",
      body: ["A better workflow is to give AI a specific role."],
      output: "Clear responsibility → Better output",
    },
    {
      type: "step",
      number: "2",
      title: "AI works better with feedback",
      body: ["The first answer doesn't need to be perfect."],
      output: "Output → Feedback → Revision",
    },
    {
      type: "step",
      number: "3",
      title: "Different models can complement each other",
      body: [
        "Instead of asking which model is “better,” I found it more useful to ask: which model is better for this particular step?",
      ],
    },
    {
      type: "step",
      number: "4",
      title: "The human is still the editor",
      body: [
        "AI can generate possibilities very quickly. Deciding what is useful, what feels right, and what should ship is still the important part.",
      ],
    },
    { type: "h2", text: "The repeatable formula" },
    {
      type: "flow",
      steps: [
        { title: "01 — Define the idea", note: "Goal and constraints" },
        { title: "02 — Explore with Claude", note: "Challenge and structure" },
        { title: "03 — Build with GPT", note: "Turn direction into something concrete" },
        { title: "04 — Test it", note: "Don't assume the output is correct" },
        { title: "05 — Give specific feedback", note: "Point out exactly what is wrong" },
        { title: "06 — Iterate", note: "Fix one group of problems at a time" },
        { title: "07 — Ship", note: "When it works and feels right, stop" },
      ],
    },
    { type: "h2", text: "Final takeaway" },
    {
      type: "p",
      text: "The interesting part wasn't Claude vs GPT. It was learning to treat AI models as different tools inside the same creative workflow.",
    },
    {
      type: "quote",
      text: "Claude helped me think. GPT helped me build. I made the decisions.",
    },
    {
      type: "p",
      text: "The result was a workflow where ideas could move from concept → execution → feedback → final product much faster.",
    },
  ],
};

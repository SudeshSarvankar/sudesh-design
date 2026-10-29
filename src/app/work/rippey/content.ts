export type Fact = { label: string; value: string };
export type Outcome = { value: string; label: string; rust?: boolean };
export type ChapterNav = { n: number; id: string; title: string; short: string };
export type Card = { title: string; body: string };
export type Shot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};
export type InboxRow = { from: string; when: string; subject: string; preview?: string };
export type RippeyLine =
  | { kind: "user"; text: string }
  | { kind: "bot"; text: string }
  | { kind: "chips"; options: string[] }
  | { kind: "quote" }
  | { kind: "done"; text: string };
export type Flow = { title: string; steps: string[] };
export type ShareBar = { label: string; pct: number };
export type GanttRow = {
  label: string;
  range: string;
  start: number;
  end: number;
  color: string;
};
export type Swatch = { name: string; hex: string };
export type TypeRow = { name: string; weight: string; size: string };
export type ResultBar = { value: string; label: string; width: number; color: string; pct: string };
export type SupportBar = { label: string; value: string; width: number; note: string; hatch?: boolean };

export const weeks = 4;

export const facts: Fact[] = [
  { label: "Role", value: "Design lead" },
  { label: "Team", value: "PM, developers and the bot team" },
  { label: "Client", value: "RPA Labs for BluJay Solutions" },
  { label: "Design sprint", value: "4 weeks" },
  { label: "Tools", value: "Figma, Illustrator" },
];

export const outcomes: Outcome[] = [
  { value: "25%", label: "less call-centre traffic", rust: true },
  { value: "5K+", label: "quote requests through the bot every month" },
  { value: "3K+", label: "bookings a month, paid inside the chat" },
  { value: "0", label: "requests to speak with a human" },
];

export const chapters: ChapterNav[] = [
  { n: 1, id: "ch-1", title: "Quotes lived in inboxes", short: "Problem" },
  { n: 2, id: "ch-2", title: "Everyone in the chain had a say", short: "Research" },
  { n: 3, id: "ch-3", title: "Three jobs the bot had to do", short: "Jobs" },
  { n: 4, id: "ch-4", title: "A four-week sprint", short: "Plan" },
  { n: 5, id: "ch-5", title: "Writing the conversation first", short: "Wires" },
  { n: 6, id: "ch-6", title: "A system for talking", short: "System" },
  { n: 7, id: "ch-7", title: "Meet Rippey", short: "UI" },
  { n: 8, id: "ch-8", title: "What happened after launch", short: "Results" },
  { n: 9, id: "ch-9", title: "What I took away", short: "Learnings" },
];

export const inboxRows: InboxRow[] = [
  {
    from: "You",
    when: "Mon 9:12",
    subject: "Quote request: Miami → Antwerp, 20ft",
  },
  {
    from: "Sales",
    when: "Tue 16:40",
    subject: "RE: Quote request…",
    preview: "Can you confirm pickup?",
  },
  {
    from: "You",
    when: "Wed 10:05",
    subject: "RE: RE: Quote request…",
    preview: "Any update?",
  },
];

export const rippeyLines: RippeyLine[] = [
  { kind: "user", text: "I need a quotation" },
  { kind: "bot", text: "Sure! To get started I need your name and email." },
  { kind: "user", text: "FCL Quote" },
  { kind: "bot", text: "Do you require truck pickup?" },
  { kind: "chips", options: ["Yes", "No"] },
  { kind: "user", text: "Miami → Antwerp, 20 ft" },
  { kind: "quote" },
  { kind: "done", text: "Payment received. Your tracking ID is on its way by email." },
];

export const problemCards: Card[] = [
  {
    title: "Email was slow",
    body: "A quote request sat in a thread for days. Pickup details, container size and price lived in different replies.",
  },
  {
    title: "The old bot didn't understand",
    body: "Customers typed what they needed. The menu bot asked them to start over. They left.",
  },
  {
    title: "Customers gave up",
    body: "Tired of waiting, people went back to email and calls — which landed on BluJay's support and sales teams.",
  },
];

export const whoCards: Card[] = [
  {
    title: "Shippers & freight forwarders",
    body: "The people asking for a price, a booking, or a status — often from a phone, often in a hurry.",
  },
  {
    title: "BluJay support staff",
    body: "The people answering the same questions on the phone after the old bot failed.",
  },
  {
    title: "BluJay sales team",
    body: "The people writing quotes by hand, then chasing confirmation that never came back in time.",
  },
];

export const concernItems = [
  "Lack of cohesive design",
  "Outdated UX",
  "A bot that needed rebuilding, not patching",
];

export const goalItems = [
  "Standardise the UX and create a smooth flow",
  "Modernise the visual design",
  "Make the bot interactive, not a menu",
];

export const shareBars: ShareBar[] = [
  { label: "Shipment tracking", pct: 90 },
  { label: "Quotations", pct: 80 },
  { label: "Customer support / FAQs", pct: 50 },
];

export const flows: Flow[] = [
  {
    title: "Get a quote",
    steps: [
      "Name & email",
      "FCL or LCL",
      "Truck pickup?",
      "From city",
      "To city",
      "Container size",
      "Quote + price",
      "Email copy or book",
      "Pay in chat",
    ],
  },
  {
    title: "Track a shipment",
    steps: ["Tracking ID", "Live status", "Map view", "Anything else?"],
  },
  {
    title: "Shipping schedule",
    steps: ["FCL or LCL", "From city", "To city", "Schedule"],
  },
];

export const gantt: GanttRow[] = [
  { label: "Project understanding", range: "Wk 0–1", start: 0, end: 1, color: "#4DAACD" },
  { label: "Competitor research", range: "Wk 0.15–1.15", start: 0.15, end: 1.15, color: "#4DAACD" },
  { label: "User flow", range: "Wk 0.3–1.3", start: 0.3, end: 1.3, color: "#4DAACD" },
  { label: "UX: IA & wireframes", range: "Wk 1.1–2.4", start: 1.1, end: 2.4, color: "#E4762F" },
  { label: "UI: visual design & prototype", range: "Wk 2.2–4", start: 2.2, end: 4, color: "#ffffff" },
];

export const ganttTicks = ["Week 1", "Week 2", "Week 3", "Week 4"];

export const chatWires: Shot[] = [
  {
    src: "/work/rippey/wf-chat-1.webp",
    width: 375,
    height: 1034,
    alt: "Wireframe of Rippey asking for name, email and why the customer is here",
    caption: "1 · Name, email, what brings you here",
  },
  {
    src: "/work/rippey/wf-chat-2.webp",
    width: 375,
    height: 1034,
    alt: "Wireframe of FCL, pickup, cities and container questions",
    caption: "2 · FCL, pickup, cities, container",
  },
  {
    src: "/work/rippey/wf-chat-3.webp",
    width: 375,
    height: 1034,
    alt: "Wireframe of quote, book, pay and confirmation",
    caption: "3 · Quote, book, pay, confirmation",
  },
];

export const siteWires: Shot[] = [
  {
    src: "/work/rippey/wf-site-launch.webp",
    width: 527,
    height: 375,
    alt: "Website wireframe of the Rippey launch icon",
    caption: "Launch icon",
  },
  {
    src: "/work/rippey/wf-site-onboarding.webp",
    width: 528,
    height: 375,
    alt: "Website wireframe of the onboarding message",
    caption: "Onboarding message",
  },
  {
    src: "/work/rippey/wf-site-conversations.webp",
    width: 528,
    height: 375,
    alt: "Website wireframe of a returning user seeing their conversations",
    caption: "Returning user: your conversations",
  },
];

export const typeScale: TypeRow[] = [
  { name: "H1", weight: "Bold", size: "18 / 22" },
  { name: "H2", weight: "Semibold", size: "14 / 19" },
  { name: "Body", weight: "Regular", size: "12" },
  { name: "Button", weight: "Regular", size: "14 / 19" },
];

export const swatches: Swatch[] = [
  { name: "Navy", hex: "#143A62" },
  { name: "Blue", hex: "#4DAACD" },
  { name: "Orange", hex: "#E4762F" },
  { name: "Input blue", hex: "#BFE0F6" },
];

export const iconIdeas: Shot[] = Array.from({ length: 14 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/work/rippey/icon-idea-${n}.webp`,
    width: 220,
    height: 204,
    alt: i === 13 ? "Final Rippey robot launch icon" : `Rippey launch icon idea ${i + 1}`,
  };
});

export const heroWelcome: Shot = {
  src: "/work/rippey/ui-welcome.webp",
  width: 424,
  height: 647,
  alt: "Rippey welcome screen with two jobs: get a quote or track a shipment",
};

export const heroConversations: Shot = {
  src: "/work/rippey/ui-conversations.webp",
  width: 424,
  height: 647,
  alt: "Rippey conversations list for returning users",
};

export const laptopShot: Shot = {
  src: "/work/rippey/ui-laptop.webp",
  width: 1627,
  height: 939,
  alt: "Rippey running on the BluJay website in a laptop frame",
};

export const meetPhones: Shot[] = [
  {
    ...heroWelcome,
    caption: "Welcome: two clear jobs, no menu maze",
  },
  {
    ...heroConversations,
    caption: "Returning users pick up where they left off",
  },
];

export const quoteSteps: Shot[] = [
  {
    src: "/work/rippey/ui-quote-step1.webp",
    width: 442,
    height: 600,
    alt: "Rippey asking for the customer's name",
    caption: "Name",
  },
  {
    src: "/work/rippey/ui-quote-step2.webp",
    width: 439,
    height: 520,
    alt: "Rippey asking for the customer's email",
    caption: "Email",
  },
  {
    src: "/work/rippey/ui-quote-step3.webp",
    width: 439,
    height: 606,
    alt: "Rippey collecting quote details",
    caption: "Quote details",
  },
];

export const salesBars: ResultBar[] = [
  {
    value: "5K+",
    label: "quote requests",
    width: 100,
    color: "#143A62",
    pct: "100%",
  },
  {
    value: "3K+",
    label: "bookings",
    width: 60,
    color: "#4DAACD",
    pct: "~60%",
  },
];

export const supportBars: SupportBar[] = [
  {
    label: "Success rate",
    value: "98%",
    width: 98,
    note: "conversations completed",
  },
  {
    label: "Call-centre traffic −25%",
    value: "−25%",
    width: 75,
    note: "now 75% of what it was",
    hatch: true,
  },
  {
    label: "Asked to speak with a human",
    value: "0%",
    width: 0,
    note: "no one asked for a person",
  },
];

export const volumeBars: ResultBar[] = [
  {
    value: "25K+",
    label: "conversations a month",
    width: 100,
    color: "#4DAACD",
    pct: "100%",
  },
  {
    value: "15K+",
    label: "unique users a month",
    width: 60,
    color: "#4DAACD",
    pct: "60%",
  },
];

export const volumeNotes: Fact[] = [
  { label: "messages per user on average", value: "20" },
  { label: "notifications requested by users", value: "100" },
];

export const learnings: Card[] = [
  {
    title: "A bad bot is worse than no bot.",
    body: "The generic menu bot taught people not to try. Rebuilding the conversation was the product, not a skin on the old tree.",
  },
  {
    title: "Give people buttons, not guesswork.",
    body: "Chips for Yes/No, FCL/LCL and Book order beat a blank field. The bot still understood typing — buttons made the path obvious.",
  },
  {
    title: "Design the conversation before the screens.",
    body: "The three chat wireframes were the brief. Colour and the robot came after the questions were in the right order.",
  },
  {
    title: "Close the loop in the chat.",
    body: "Quote, book and pay in one thread is why 3K+ bookings a month never went back to email, and why nobody asked to speak with a human.",
  },
];

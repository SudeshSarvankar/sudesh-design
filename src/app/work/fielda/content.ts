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
export type ChatLine = { who: string; text: string; photo?: boolean; more?: boolean };
export type Feature = {
  icon: string;
  iconW: number;
  iconH: number;
  problem: string;
  title: string;
  body: string;
};
export type Phase = { title: string; items: string[] };
export type GanttRow = {
  label: string;
  range: string;
  start: number;
  end: number;
  color: string;
};
export type ActivityType = { name: string; hex: string };
export type ConsoleRow = {
  eyebrow: string;
  title: string;
  body: string;
  shot: Shot;
};

export const months = 4;

export const facts: Fact[] = [
  { label: "Role", value: "Design lead" },
  { label: "Timeline", value: "4 months" },
  { label: "Team", value: "Me + 1 designer, with a PM and developers" },
  { label: "Platforms", value: "Web, iOS, tablet" },
  { label: "Output", value: "320 screens" },
];

export const outcomes: Outcome[] = [
  { value: "128", label: "field workers moved off WhatsApp groups", rust: true },
  { value: "18", label: "users interviewed across every role" },
  { value: "3", label: "platforms" },
  { value: "320", label: "screens in 4 months" },
];

export const chapters: ChapterNav[] = [
  { n: 1, id: "ch-1", title: "Field work ran on WhatsApp", short: "Problem" },
  { n: 2, id: "ch-2", title: "We listened to every role", short: "Research" },
  { n: 3, id: "ch-3", title: "Four months, three phases", short: "Plan" },
  { n: 4, id: "ch-4", title: "One feature for each problem", short: "Features" },
  { n: 5, id: "ch-5", title: "320 screens, sketched in grey first", short: "Wires" },
  { n: 6, id: "ch-6", title: "A colour for every kind of work", short: "Colour" },
  { n: 7, id: "ch-7", title: "The office sees the whole network", short: "Web" },
  { n: 8, id: "ch-8", title: "The map in a pocket", short: "Mobile" },
  { n: 9, id: "ch-9", title: "A tablet for the site", short: "Tablet" },
  { n: 10, id: "ch-10", title: "What I took away", short: "Learnings" },
];

export const chatLines: ChatLine[] = [
  { who: "Field engineer", text: "Pole broken near El Camino", photo: true },
  { who: "Supervisor", text: "Which pole? Can you send the exact location?" },
  { who: "Site staff", text: "Is anyone going there today?" },
  { who: "Field engineer", text: "Also a transformer problem on Baden Rd" },
  { who: "Supervisor", text: "Wait, who took the pole one?" },
  { who: "Field engineer", text: "Not sure. Will call you" },
  { who: "System", text: "+ 40 more messages today", more: true },
];

export const afterMeta: [string, string][] = [
  ["Type", "Service order"],
  ["Location", "Pinned on the map"],
  ["Proof", "3 photos attached"],
  ["Status", "In progress"],
  ["Owner", "Assigned to one person"],
  ["History", "Flagged 2 hours ago"],
];

export const problemCards: Card[] = [
  {
    title: "Issues couldn't be raised properly from the field",
    body: "A broken pole started as a photo in a group chat. By lunch, nobody could find which pole, or who owned the job.",
  },
  {
    title: "Site visits went unrecorded",
    body: "Crews did the work. The record lived in someone's head, or in a thread that scrolled away.",
  },
  {
    title: "Feedback was lost",
    body: "Supervisors asked for updates. The answers arrived in a different chat, to a different person, hours later.",
  },
];

export const researchStats: Outcome[] = [
  { value: "18", label: "users interviewed (field engineers, site staff, supervisors)" },
  { value: "2", label: "competitor tools analysed" },
  { value: "3", label: "roles mapped" },
];

export const researchCards: Card[] = [
  {
    title: "Crews think in places, not lists",
    body: "They talk about El Camino and Baden Rd. A table of tickets is not how they find the next job.",
  },
  {
    title: "An issue needs proof",
    body: "A photo, a pin, a type. Without those, a complaint is just another message.",
  },
  {
    title: "Supervisors juggle many sites",
    body: "They need one view of what is open, who is on it, and what is still waiting.",
  },
  {
    title: "The office needs to know what's happening now",
    body: "Reports that wait until Friday are already out of date by the time they are read.",
  },
];

export const phases: Phase[] = [
  {
    title: "Planning & research",
    items: ["User understanding", "Competitor analysis", "User flow"],
  },
  {
    title: "Wireframe & prototyping",
    items: ["Low-fi", "High-fi wireframes"],
  },
  {
    title: "Visual design",
    items: ["Visual design", "Prototyping"],
  },
];

export const gantt: GanttRow[] = [
  { label: "Discovery", range: "Month 0–1.6", start: 0, end: 1.6, color: "#3958F6" },
  { label: "UX design", range: "Month 1–2.6", start: 1, end: 2.6, color: "#50A8F9" },
  { label: "UI design", range: "Month 2.4–4", start: 2.4, end: 4, color: "#03C599" },
];

export const ganttTicks = ["Start", "Month 1", "Month 2", "Month 3", "Month 4"];

export const features: Feature[] = [
  {
    icon: "/work/fielda/icon-complaint.svg",
    iconW: 32,
    iconH: 32,
    problem: "Issues couldn't be raised from the field",
    title: "Complaint & follow-up management",
    body: "A crew flags a pole or transformer with type, photos and a pin. Follow-up stays on that record, not in a chat.",
  },
  {
    icon: "/work/fielda/icon-aerial.svg",
    iconW: 51,
    iconH: 37,
    problem: "Nobody shared the same picture of the network",
    title: "Aerial inspection with the map",
    body: "The map is the home screen. Assets and open work sit on the ground they belong to.",
  },
  {
    icon: "/work/fielda/icon-projects.svg",
    iconW: 36,
    iconH: 31,
    problem: "Site visits went unrecorded",
    title: "Manage multiple projects, 100+ per user",
    body: "Each person sees the projects they own, without losing the ones they only visit.",
  },
  {
    icon: "/work/fielda/icon-report.svg",
    iconW: 43,
    iconH: 37,
    problem: "The office found out too late",
    title: "Live reports",
    body: "Status, owner and proof update as the crew works, so Friday is not the first time anyone looks.",
  },
];

export const screenStats: Outcome[] = [
  { value: "120", label: "web" },
  { value: "100", label: "tablet" },
  { value: "100", label: "mobile" },
];

export const heroDash: Shot = {
  src: "/work/fielda/hero-dashboard.webp",
  width: 1124,
  height: 562,
  alt: "Fielda web dashboard with a map of open field activities",
};

export const heroPhone: Shot = {
  src: "/work/fielda/hero-phone.webp",
  width: 220,
  height: 467,
  alt: "Fielda mobile app home screen in a phone frame",
};

export const webProjectsWire: Shot = {
  src: "/work/fielda/wf-web-projects.webp",
  width: 790,
  height: 648,
  alt: "Grey wireframe of the web projects list",
  caption: "Web projects · a grey map of how office users move between many sites.",
};

export const mobileWires: Shot[] = [
  {
    src: "/work/fielda/wf-mobile-home.webp",
    width: 495,
    height: 607,
    alt: "Grey wireframe of the mobile home screen",
    caption: "Home",
  },
  {
    src: "/work/fielda/wf-mobile-map.webp",
    width: 504,
    height: 618,
    alt: "Grey wireframe of the mobile map",
    caption: "Map",
  },
  {
    src: "/work/fielda/wf-mobile-map-list.webp",
    width: 507,
    height: 620,
    alt: "Grey wireframe of the mobile map with a list overlay",
    caption: "Map + list",
  },
  {
    src: "/work/fielda/wf-mobile-filters.webp",
    width: 497,
    height: 608,
    alt: "Grey wireframe of mobile filters",
    caption: "Filters",
  },
];

export const activityTypes: ActivityType[] = [
  { name: "Service order", hex: "#4A7EEC" },
  { name: "Overhead", hex: "#02A7C4" },
  { name: "Transformer", hex: "#6B7D86" },
  { name: "Pole", hex: "#9B28D4" },
  { name: "Annual audit", hex: "#FC4F6F" },
];

export const webRows: ConsoleRow[] = [
  {
    eyebrow: "Web",
    title: "The network on one dashboard",
    body: "Supervisors land on open work, not a blank table. The map and the list tell the same story.",
    shot: {
      src: "/work/fielda/web-dashboard.webp",
      width: 1150,
      height: 646,
      alt: "Fielda web dashboard with map and activity list",
    },
  },
  {
    eyebrow: "Web",
    title: "Explore before you assign",
    body: "Assets, history and nearby work sit together so a new order is not raised in the dark.",
    shot: {
      src: "/work/fielda/web-explore.webp",
      width: 752,
      height: 422,
      alt: "Explore view of field assets on the web",
    },
  },
  {
    eyebrow: "Web",
    title: "Create an activity with proof",
    body: "Type, location, photos and owner are asked once. The record is the follow-up.",
    shot: {
      src: "/work/fielda/web-create-activity.webp",
      width: 752,
      height: 423,
      alt: "Create activity form on the web",
    },
  },
];

export const isometric: Shot = {
  src: "/work/fielda/mobile-isometric.webp",
  width: 913,
  height: 682,
  alt: "Isometric view of Fielda mobile screens floating above a map",
};

export const onboardingPhones: Shot[] = [
  {
    src: "/work/fielda/mobile-onboarding-detail.webp",
    width: 303,
    height: 492,
    alt: "Mobile onboarding detail screen",
    caption: "Onboarding · what the app is for",
  },
  {
    src: "/work/fielda/mobile-onboarding-connected.webp",
    width: 357,
    height: 580,
    alt: "Mobile onboarding connected screen",
    caption: "Onboarding · connected to the crew",
  },
];

export const fieldPhones: Shot[] = [
  {
    src: "/work/fielda/mobile-map.webp",
    width: 357,
    height: 582,
    alt: "Mobile map of field activities",
    caption: "Map",
  },
  {
    src: "/work/fielda/mobile-map-list.webp",
    width: 303,
    height: 494,
    alt: "Mobile map with activity list",
    caption: "Map + list",
  },
  {
    src: "/work/fielda/mobile-projects.webp",
    width: 303,
    height: 494,
    alt: "Mobile projects list",
    caption: "Projects",
  },
  {
    src: "/work/fielda/mobile-activities.webp",
    width: 357,
    height: 582,
    alt: "Mobile activities list",
    caption: "Activities",
  },
];

export const tablets: Shot[] = [
  {
    src: "/work/fielda/tablet-home.webp",
    width: 506,
    height: 730,
    alt: "Tablet home screen for Fielda",
    caption: "Home · the site in one view",
  },
  {
    src: "/work/fielda/tablet-search.webp",
    width: 540,
    height: 774,
    alt: "Tablet search screen",
    caption: "Search · find an asset or a job",
  },
  {
    src: "/work/fielda/tablet-results.webp",
    width: 544,
    height: 780,
    alt: "Tablet search results",
    caption: "Results · the same record the crew will open",
  },
];

export const learnings: Card[] = [
  {
    title: "Start from the chat they already use",
    body: "WhatsApp was not laziness. It was the only place a photo and a place could travel together. The product had to beat that, not ignore it.",
  },
  {
    title: "A map is a working surface, not a decoration",
    body: "Crews think in roads and poles. Putting work on the map was how 128 people stopped asking “which one?”",
  },
  {
    title: "Proof belongs on the ticket",
    body: "Photos, pins and type are not extras. They are what turns a complaint into a job someone can close.",
  },
  {
    title: "Three platforms, one record",
    body: "Web, phone and tablet only work if they share the same activity. 320 screens were the cost of keeping that promise.",
  },
];

export type Fact = { label: string; value: string };

export type Outcome = { value: string; label: string; rust?: boolean };

export type ChapterNav = {
  n: number;
  id: string;
  title: string;
  short: string;
};

export type Card = { title: string; body: string };

export type GanttRow = {
  label: string;
  range: string;
  start: number;
  end: number;
  color: string;
};

export type IaBranch = {
  title: string;
  items: string[];
  tint: "coral" | "indigo";
};

export type IaModule = {
  id: "seller" | "admin";
  label: string;
  flow: string[];
  branches: IaBranch[];
};

export type Shot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export type ConsoleRow = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  shot: Shot;
};

export type Swatch = { name: string; hex: string };

export type Result = { value: string; decision: string; body: string };

export const weeks = 28;

export const facts: Fact[] = [
  { label: "Role", value: "Design lead" },
  { label: "Timeline", value: "7 months (28 weeks)" },
  { label: "Team", value: "Me + 2 designers" },
  { label: "Tools", value: "Figma, Balsamiq, Marvel, Zeplin" },
  { label: "Output", value: "400 screens, 2 modules + website" },
];

export const outcomes: Outcome[] = [
  { value: "580", label: "sellers onboarded", rust: true },
  { value: "2,500", label: "orders processed" },
  { value: "~5 min", label: "to onboard a new seller" },
  { value: "<1 min", label: "to finish a key task" },
];

export const chapters: ChapterNav[] = [
  { n: 1, id: "ch-1", title: "Every new marketplace was a new headache", short: "Problem" },
  { n: 2, id: "ch-2", title: "We listened before we drew", short: "Research" },
  { n: 3, id: "ch-3", title: "A 28-week plan", short: "Plan" },
  { n: 4, id: "ch-4", title: "Mapping two products into one", short: "IA" },
  { n: 5, id: "ch-5", title: "Sketching every flow in grey", short: "Wires" },
  { n: 6, id: "ch-6", title: "Giving it BluBunny's voice", short: "Visual" },
  { n: 7, id: "ch-7", title: "The console comes to life", short: "Console" },
  { n: 8, id: "ch-8", title: "Opening the front door", short: "Website" },
  { n: 9, id: "ch-9", title: "What happened after launch", short: "Impact" },
  { n: 10, id: "ch-10", title: "What I took away", short: "Learnings" },
];

export const headacheCards: Card[] = [
  {
    title: "Low confidence",
    body: "Sellers could not see stock, orders or payouts in one place, so they second-guessed every listing they made.",
  },
  {
    title: "The same data, again and again",
    body: "A new marketplace meant typing the same product, price and inventory into another admin, then keeping those copies in sync by hand.",
  },
  {
    title: "Verify, then verify again",
    body: "The same fields were checked on every channel. Growth slowed because every extra aisle added another round of proof.",
  },
];

export const researchStats: Outcome[] = [
  { value: "40", label: "sellers surveyed" },
  { value: "5", label: "in-depth interviews" },
  { value: "4", label: "competitor products audited" },
];

export const researchCards: Card[] = [
  {
    title: "Confidence comes from visibility",
    body: "Sellers wanted one view of stock, sales and alerts. If they could see it, they trusted it.",
  },
  {
    title: "Onboarding is where effort piles up",
    body: "The longest pauses were not in selling. They were in proving who they were and listing the first catalogue.",
  },
  {
    title: "Stock, sales and team live in different places",
    body: "Tools for inventory, orders and staff did not talk to each other. People kept a second copy in chat and spreadsheets.",
  },
  {
    title: "Two modules, clear boundaries",
    body: "Sellers needed a console to run the shop. Admins needed a console to approve, support and watch the network. Same system, two jobs.",
  },
];

export const gantt: GanttRow[] = [
  { label: "Discovery & research", range: "Wk 1–7", start: 1, end: 7, color: "#E56968" },
  { label: "Defining & ideating", range: "Wk 5–12", start: 5, end: 12, color: "#5055B1" },
  { label: "IA & wireframes", range: "Wk 8–16", start: 8, end: 16, color: "#e0a238" },
  { label: "Visual design & prototypes", range: "Wk 14–24", start: 14, end: 24, color: "#02A89A" },
  { label: "Development support", range: "Wk 21–28", start: 21, end: 28, color: "#484848" },
];

export const ganttTicks = [1, 7, 14, 21, 28];

export const iaModules: IaModule[] = [
  {
    id: "seller",
    label: "Seller module",
    flow: ["Login", "Profile completion", "Admin approval", "Global navigation"],
    branches: [
      {
        title: "Dashboard",
        tint: "coral",
        items: ["Total orders", "Total revenue", "Critical notifications"],
      },
      {
        title: "Products",
        tint: "coral",
        items: ["View", "Filter", "Show/hide"],
      },
      {
        title: "Orders",
        tint: "coral",
        items: ["View", "Filter", "Change status"],
      },
      {
        title: "Marketing",
        tint: "coral",
        items: ["Create", "View", "Edit campaign"],
      },
      {
        title: "Reports",
        tint: "coral",
        items: ["Selling", "Commission", "Performance"],
      },
      {
        title: "Help",
        tint: "indigo",
        items: ["Guides", "Contact support"],
      },
      {
        title: "Notifications",
        tint: "indigo",
        items: ["Critical", "Important", "General"],
      },
    ],
  },
  {
    id: "admin",
    label: "Admin module",
    flow: ["Login", "Global navigation"],
    branches: [
      {
        title: "Dashboard",
        tint: "coral",
        items: ["Total orders", "Total revenue", "Top sellers"],
      },
      {
        title: "Sellers",
        tint: "coral",
        items: ["View", "Edit", "Add"],
      },
      {
        title: "Products",
        tint: "coral",
        items: ["View", "Filter", "Show/hide"],
      },
      {
        title: "Orders",
        tint: "coral",
        items: ["View", "Filter", "Contact seller"],
      },
      {
        title: "Reports",
        tint: "coral",
        items: ["Network", "Commission", "Performance"],
      },
      {
        title: "Help",
        tint: "indigo",
        items: ["Guides", "Internal notes"],
      },
      {
        title: "Notifications",
        tint: "indigo",
        items: ["Critical", "Important", "General"],
      },
    ],
  },
];

export const heroShot: Shot = {
  src: "/work/blubunny/hero-marketplaces.webp",
  width: 895,
  height: 895,
  alt: "Marketplace logos arranged around a seller console, showing one place to sell across channels",
};

export const dashboardWire: Shot = {
  src: "/work/blubunny/wf-dashboard.webp",
  width: 940,
  height: 671,
  alt: "Grey wireframe of the seller dashboard with orders, revenue and notification blocks",
  caption: "Seller dashboard · one home for orders, revenue and the alerts that need a decision today.",
};

export const smallWires: Shot[] = [
  {
    src: "/work/blubunny/wf-products.webp",
    width: 919,
    height: 667,
    alt: "Grey wireframe of the products list with filters and show or hide controls",
    caption: "Products · view, filter and show or hide listings without leaving the table.",
  },
  {
    src: "/work/blubunny/wf-orders.webp",
    width: 926,
    height: 673,
    alt: "Grey wireframe of the orders list with status filters",
    caption: "Orders · status first, so a seller knows what to ship, hold or refund.",
  },
  {
    src: "/work/blubunny/wf-order-detail.webp",
    width: 922,
    height: 670,
    alt: "Grey wireframe of a single order with buyer, items and status",
    caption: "Order detail · the full trail for one sale, including a way to change status.",
  },
  {
    src: "/work/blubunny/wf-commission-report.webp",
    width: 920,
    height: 668,
    alt: "Grey wireframe of a commission report table",
    caption: "Commission report · what sold, what was kept, and what is still pending.",
  },
];

export const swoosh: Shot = {
  src: "/work/blubunny/swoosh.webp",
  width: 190,
  height: 177,
  alt: "",
};

export const woodenHand: Shot = {
  src: "/work/blubunny/wooden-hand.webp",
  width: 730,
  height: 372,
  alt: "A wooden artist's hand pointing toward the BluBunny colour palette",
};

export const visualRules: Card[] = [
  {
    title: "Stay inside the brand",
    body: "Teal, indigo and coral already meant BluBunny. The console borrows them; it does not invent a second look.",
  },
  {
    title: "Show how selling works",
    body: "Charts, statuses and tables explain the shop. Decoration never competes with the numbers a seller needs.",
  },
  {
    title: "Keep it simple and responsive",
    body: "The same tasks had to work on a laptop in the back office and on a phone on the shop floor.",
  },
];

export const swatches: Swatch[] = [
  { name: "Teal", hex: "#02A89A" },
  { name: "Indigo", hex: "#5055B1" },
  { name: "Coral", hex: "#E56968" },
  { name: "Orange", hex: "#FA6400" },
  { name: "Red", hex: "#D11A2A" },
  { name: "Charcoal", hex: "#484848" },
];

export const consoleRows: ConsoleRow[] = [
  {
    eyebrow: "Seller module",
    title: "Seller dashboard",
    body: "A seller lands on numbers that matter today: orders, revenue and the alerts that need a decision.",
    bullets: [
      "Total orders and revenue sit at the top, not behind a report.",
      "Critical notifications interrupt; general ones wait.",
      "Each tile is a door into products, orders or help.",
    ],
    shot: {
      src: "/work/blubunny/ui-seller-dashboard.webp",
      width: 746,
      height: 460,
      alt: "Seller dashboard with order and revenue summary cards",
    },
  },
  {
    eyebrow: "Admin module",
    title: "Admin dashboard",
    body: "Admins watch the network: total orders, revenue and the sellers who need a look.",
    bullets: [
      "Top sellers are visible without exporting a spreadsheet.",
      "Approvals and edits live one tap from the overview.",
      "The layout matches the seller console, so support can follow along.",
    ],
    shot: {
      src: "/work/blubunny/ui-admin-dashboard.webp",
      width: 725,
      height: 440,
      alt: "Admin dashboard with network totals and top sellers",
    },
  },
  {
    eyebrow: "Reports",
    title: "Reports that explain themselves",
    body: "Selling, commission and performance sit in one pattern, so a seller does not relearn the page each time.",
    bullets: [
      "Filters stay put while the table updates.",
      "Commission is shown as money, not a puzzle of percentages.",
      "Export is available, but the answer is already on screen.",
    ],
    shot: {
      src: "/work/blubunny/ui-reports.webp",
      width: 712,
      height: 437,
      alt: "Reports screen with selling and commission figures",
    },
  },
];

export const siteDesktop: Shot = {
  src: "/work/blubunny/site-desktop.webp",
  width: 827,
  height: 4096,
  alt: "Full-length desktop marketing website for BluBunny",
};

export const siteMobile: Shot = {
  src: "/work/blubunny/site-mobile.webp",
  width: 222,
  height: 4096,
  alt: "Full-length mobile marketing website for BluBunny",
};

export const results: Result[] = [
  {
    value: "~5 min",
    decision: "One onboarding form",
    body: "to onboard a new seller. The right information is collected once, then reused across every marketplace they sell on.",
  },
  {
    value: "<1 min",
    decision: "Dashboard-first navigation",
    body: "per key task. Orders, products and alerts are one tap from home, not buried in nested menus.",
  },
  {
    value: "580",
    decision: "Admin approval built into onboarding",
    body: "sellers in 2 months. New shops wait for a yes, then enter the same console without a second setup.",
  },
  {
    value: "2,500",
    decision: "Order statuses and alerts up front",
    body: "orders in 2 months. Sellers can change status, spot problems and keep moving without leaving the list.",
  },
];

export const learnings: Card[] = [
  {
    title: "Listen before the first rectangle",
    body: "The survey and interviews named the headache: not a missing feature, but the same data typed and checked on every channel.",
  },
  {
    title: "Collect it once, use it everywhere",
    body: "Confidence did not come from more fields. It came from asking well, then letting that answer travel.",
  },
  {
    title: "Two modules, one system",
    body: "Sellers and admins share the same map. Clear boundaries kept 400 screens from becoming two different products.",
  },
  {
    title: "Hand-off is part of the design",
    body: "Speccing every screen into Zeplin meant engineering could ship the console without guessing the edge cases.",
  },
];

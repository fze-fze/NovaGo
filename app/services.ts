// Shared between section 05 on the home page and the per-service pages under
// /prototype/[service].
//
// Everything below the `role` line is empty on purpose — drop screens into
// `public/images/prototype/<slug>/` and fill the arrays in. Empty arrays keep
// the labelled placeholder frames, so a half-filled service still renders.

export type Shot = {
  src: string;
  caption: string;
};

export type Decision = {
  title: string;
  copy: string;
};

export type Service = {
  slug: string;
  name: string;
  /** Path to the service icon in `public/images/services/`. */
  icon: string;
  className: string;
  /** One line: what this service is for. Used on the card and as the page lead. */
  role: string;
  /** Which team concept this grew out of, for the meta strip. */
  origin: string;
  /** Team member responsible for the original concept. */
  author: string;
  lofi: Shot[];
  hifi: Shot[];
  /** What changed between lo-fi and hi-fi, and why. */
  decisions: Decision[];
  /** How this service hands off to the rest of the journey. */
  handoff: string;
};

export const services: Service[] = [
  {
    slug: "pay",
    name: "Pay",
    icon: "/images/services/pay.png",
    className: "blue",
    role: "A connected campus money flow for wallet balance, top up, currency exchange, QR payment, verification, and budget updates.",
    origin: "EZPAY",
    author: "Cao Yuchen",
    lofi: [],
    hifi: [],
    decisions: [],
    handoff:
      "Pay hands off to Market checkout when a student rents or buys an item, to Currency Exchange when the available currency is not ready, to Accessing Funds when the balance is low, and to Budget Planner after the transaction is completed.",
  },
  {
    slug: "market",
    name: "Market",
    icon: "/images/services/market.png",
    className: "violet",
    role: "A campus marketplace shaped around short stays, verified peers, and safer handovers.",
    origin: "BorrowNest",
    author: "Fan Zeen",
    lofi: [],
    hifi: [],
    decisions: [],
    handoff: "",
  },
  {
    slug: "commute",
    name: "Commute",
    icon: "/images/services/commute.png",
    className: "mint",
    role: "Contextual routes, walking time, and timely departure guidance across campus.",
    origin: "Settly",
    author: "Huang Molin",
    lofi: [],
    hifi: [],
    decisions: [],
    handoff: "",
  },
  {
    slug: "academic-hub",
    name: "Academic Hub",
    icon: "/images/services/academic-hub.png",
    className: "orange",
    role: "One place to understand tasks, terms, deadlines, and links to official systems.",
    origin: "UniFlow",
    author: "Duan Xurui",
    lofi: [],
    hifi: [],
    decisions: [],
    handoff:
      "Academic Hub hands off to Pay when a tuition item needs payment, to Albot when an instruction needs clarification, and back to Home when the student has completed the academic task.",
  },
  {
    slug: "forum",
    name: "Forum",
    icon: "/images/services/forum.png",
    className: "pink",
    role: "A trusted campus support pathway for searching, filtering, comparing answers, posting questions, tracking replies, and revisiting personal discussions.",
    origin: "Settly",
    author: "Huang Molin",
    lofi: [],
    hifi: [
      {
        src: "/images/prototype/forum/12-screen-v2.png",
        caption: "Forum feed with active filters and realistic campus posts",
      },
    ],
    decisions: [],
    handoff:
      "Forum hands off to Academic Hub when an answer points to an official task, to Commute when a question involves a campus location, to Market when students ask about buying or renting items, and back to Profile when the student needs to follow replies on their own posts.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/** Wraps around, so the last service leads back to the first. */
export function getNeighbours(slug: string) {
  const index = services.findIndex((service) => service.slug === slug);
  const count = services.length;
  return {
    previous: services[(index - 1 + count) % count],
    next: services[(index + 1) % count],
  };
}

/** Lead visual for section 05 and the system page. Empty keeps the slot. */
export const ecosystemMap = "/images/ecosystem-map.png";

export const palette = [
  { name: "Ink", hex: "#112c67" },
  { name: "Action", hex: "#2f8cff" },
  { name: "Commute", hex: "#69d9ce" },
  { name: "Market", hex: "#a67cff" },
  { name: "Academic", hex: "#f3a739" },
  { name: "Forum", hex: "#f39acb" },
];

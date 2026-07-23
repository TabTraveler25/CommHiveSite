export type SanctuaryEvent = {
  date: string;
  title: string;
  description: string;
};

export const events: SanctuaryEvent[] = [
  {
    date: "2026-08-02",
    title: "Live Hive Inspection & Honey Extraction Workshop",
    description:
      "Watch a full frame inspection up close, then help pull and extract a rack of summer sourwood honey.",
  },
  {
    date: "2026-08-16",
    title: "School Group Ecological Tour",
    description:
      "A guided walk through the sanctuary garden and observation hives, built for K-8 classes and homeschool co-ops.",
  },
  {
    date: "2026-08-23",
    title: "Pollinator Palette Design Class",
    description:
      "Design a native-plant pollinator bed for your own yard with guidance from our garden concierge team.",
  },
  {
    date: "2026-09-06",
    title: "Live Hive Inspection & Honey Extraction Workshop",
    description:
      "Our monthly hands-on session returns as the colonies prepare for the fall nectar dearth.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-the-nectar-flow",
    title: "Welcome to the Nectar Flow",
    date: "2026-06-18",
    excerpt:
      "Why late spring is the busiest — and sweetest — stretch of the year for our hives.",
    body: [
      "For a few weeks each year, the gardens around Boxwoods hit what beekeepers call \"the nectar flow\" — the stretch when blooms are so abundant that foragers can barely keep up.",
      "You'll notice it before we tell you: more bees in the air, longer lines at the hive entrance in the evening, and a noticeably heavier hum coming from the boxes.",
      "It's also when most of the honey you'll see in the shop actually gets made, capped, and cured. Everything after this is really just patient waiting.",
    ],
  },
  {
    slug: "what-a-mite-inspection-actually-looks-like",
    title: "What a Mite Inspection Actually Looks Like",
    date: "2026-05-22",
    excerpt:
      "A behind-the-veil look at the unglamorous, essential work of keeping a colony healthy.",
    body: [
      "Varroa mites are, without much competition, the single biggest threat to a backyard hive. They're small, they spread fast, and left unchecked they can take down a colony in a season.",
      "Our inspections involve a sugar-roll sample, a quick count under a hand lens, and a treatment plan if the numbers run high — usually organic acids timed around the brood cycle.",
      "None of it is glamorous. All of it is the difference between a colony that makes it through winter and one that doesn't.",
    ],
  },
  {
    slug: "why-we-plant-for-november-not-just-april",
    title: "Why We Plant for November, Not Just April",
    date: "2026-04-10",
    excerpt:
      "The unglamorous late-bloomers that keep a hive fed after the big spring flush ends.",
    body: [
      "It's easy to plant for spring — everything blooms at once and the garden looks incredible. The harder, more important work is planting for the gaps.",
      "Late-season goldenrod and aster carry a colony through the fall dearth, when little else is blooming and bees are building up stores for winter.",
      "So when you see a slightly scraggly patch of goldenrod that doesn't fit the rest of the garden's design, that's not an oversight — that's next winter's insurance.",
    ],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Is urban beekeeping legally protected in Georgia?",
    answer:
      "Yes. Georgia State Code (O.C.G.A 2-14-41.1) formally protects managed apiaries from local municipal bans, making your investment legally secure.",
  },
  {
    question:
      "How do I track my private managed hive's harvest progress?",
    answer:
      "Simply log into your Managed Service Client Account to view private hive data dashboards, check colony weight changes, and follow your honey harvest schedule live.",
  },
  {
    question: "Do I need any prior beekeeping experience?",
    answer:
      "No. The Garden Concierge program is built for first-time hosts — our master apiarists handle installation, inspections, and mite management from day one.",
  },
  {
    question: "What happens to the honey my hive produces?",
    answer:
      "Every drop is yours. As the property host, you receive the full private harvest produced by your residential landscape's colony.",
  },
];

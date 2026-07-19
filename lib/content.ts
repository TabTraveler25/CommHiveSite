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

import type { Metadata } from "next";
import BuzzHubOverview from "@/components/BuzzHubOverview";

export const metadata: Metadata = {
  title: "The Buzz Hub | Boxwoods Community Beehive",
};

export default function BuzzHubPage() {
  return <BuzzHubOverview />;
}

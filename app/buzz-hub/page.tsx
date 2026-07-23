import type { Metadata } from "next";
import BuzzHub from "@/components/BuzzHub";

export const metadata: Metadata = {
  title: "The Buzz Hub | Boxwoods Community Beehive",
};

export default function BuzzHubPage() {
  return <BuzzHub />;
}

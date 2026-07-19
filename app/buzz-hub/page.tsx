import type { Metadata } from "next";
import BuzzHub from "@/components/BuzzHub";

export const metadata: Metadata = {
  title: "The Buzz Hub | Boxwoods Community Beehive Apiary",
};

export default function BuzzHubPage() {
  return <BuzzHub />;
}

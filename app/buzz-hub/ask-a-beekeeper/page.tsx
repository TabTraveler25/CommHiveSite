import type { Metadata } from "next";
import AskABeekeeper from "@/components/AskABeekeeper";

export const metadata: Metadata = {
  title: "Ask a Beekeeper | Boxwoods Community Beehive",
};

export default function AskABeekeeperPage() {
  return <AskABeekeeper />;
}

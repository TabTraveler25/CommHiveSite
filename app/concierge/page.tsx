import type { Metadata } from "next";
import Concierge from "@/components/Concierge";

export const metadata: Metadata = {
  title: "Garden Concierge | Boxwoods Community Beehive",
};

export default function ConciergePage() {
  return <Concierge />;
}

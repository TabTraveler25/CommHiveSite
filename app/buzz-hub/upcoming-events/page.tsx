import type { Metadata } from "next";
import UpcomingEvents from "@/components/UpcomingEvents";

export const metadata: Metadata = {
  title: "Upcoming Events | Boxwoods Community Beehive",
};

export default function UpcomingEventsPage() {
  return <UpcomingEvents />;
}

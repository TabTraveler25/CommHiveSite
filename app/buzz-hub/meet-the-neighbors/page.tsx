import type { Metadata } from "next";
import MeetTheNeighbors from "@/components/MeetTheNeighbors";

export const metadata: Metadata = {
  title: "Meet The Neighbors | Boxwoods Community Beehive",
};

export default function MeetTheNeighborsPage() {
  return <MeetTheNeighbors />;
}

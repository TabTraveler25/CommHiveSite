import type { Metadata } from "next";
import Mission from "@/components/Mission";

export const metadata: Metadata = {
  title: "The Mission | Boxwoods Community Beehive",
};

export default function MissionPage() {
  return <Mission />;
}

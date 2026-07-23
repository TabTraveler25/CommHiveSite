import type { Metadata } from "next";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Sanctuary Education | Boxwoods Community Beehive",
};

export default function EducationPage() {
  return <Education />;
}

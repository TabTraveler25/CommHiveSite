import type { Metadata } from "next";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Sanctuary Education | Boxwoods Community Beehive Apiary",
};

export default function EducationPage() {
  return <Education />;
}

import type { Metadata } from "next";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Our Blog | Boxwoods Community Beehive",
};

export default function BlogPage() {
  return <Blog />;
}

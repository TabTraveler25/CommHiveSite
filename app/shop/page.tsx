import type { Metadata } from "next";
import Shop from "@/components/Shop";

export const metadata: Metadata = {
  title: "Garden Gold Shop | Boxwoods Community Beehive Apiary",
};

export default function ShopPage() {
  return <Shop />;
}

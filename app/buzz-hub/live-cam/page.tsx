import type { Metadata } from "next";
import LiveCam from "@/components/LiveCam";

export const metadata: Metadata = {
  title: "Live Hive Cam | Boxwoods Community Beehive",
};

export default function LiveCamPage() {
  return <LiveCam />;
}

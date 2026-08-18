import IndustryPage from "@/components/industry/IndustryPage";
import PartnershipBand from "@/components/industry/PartnershipBand";
import { TRAVEL } from "@/lib/industry/travel";
import { TRAVEL_PARTNERSHIP } from "@/lib/industry/travel-partnership";

export const metadata = {
  title: "Travel, Transport & Logistics",
  description:
    "Zero-latency orchestration for travel, transport and logistics — real-time tracking and operations intelligence at every node.",
  alternates: { canonical: "/travel" },
};

export default function Page() {
  return (
    <IndustryPage
      data={TRAVEL}
      // travel alone carries the Ignitho x TroyAvi partnership band
      afterHero={<PartnershipBand data={TRAVEL_PARTNERSHIP} />}
    />
  );
}

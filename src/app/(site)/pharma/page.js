import IndustryPage from "@/components/industry/IndustryPage";
import { PHARMA } from "@/lib/industry/pharma";

export const metadata = {
  title: "Pharma & Healthcare",
  description:
    "Data-driven clinical intelligence — bridging R&D and operations without disruption, with GxP and HIPAA-native integration.",
  alternates: { canonical: "/pharma" },
};

export default function Page() {
  return <IndustryPage data={PHARMA} />;
}

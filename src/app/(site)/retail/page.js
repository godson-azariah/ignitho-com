import IndustryPage from "@/components/industry/IndustryPage";
import { RETAIL } from "@/lib/industry/retail";

export const metadata = {
  title: "Retail & Ecommerce",
  description:
    "As market leaders move from AI experimentation to scale, the divide is defined by data maturity.",
  alternates: { canonical: "/retail" },
};

export default function Page() {
  return <IndustryPage data={RETAIL} />;
}

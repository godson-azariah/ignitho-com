import IndustryPage from "@/components/industry/IndustryPage";
import { BANKING } from "@/lib/industry/banking";

export const metadata = {
  title: "Banking, Financial Services & Insurance",
  description:
    "Risk intelligence and agentic operations for regulated environments.",
  alternates: { canonical: "/banking" },
};

export default function Page() {
  return <IndustryPage data={BANKING} />;
}

import DataEngineeringPage from "@/components/solutions/DataEngineeringPage";
import { APPLIED_AI } from "@/lib/pages/applied-ai";

export const metadata = {
  title: "Frugal AI Enablement",
  description:
    "AI that works in production, not just demos — governed, explainable and deployed on the stack you already own.",
  alternates: { canonical: "/applied-ai" },
};

export default function Page() {
  return <DataEngineeringPage data={APPLIED_AI} />;
}

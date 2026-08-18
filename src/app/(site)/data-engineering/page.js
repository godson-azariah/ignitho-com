import DataEngineeringPage from "@/components/solutions/DataEngineeringPage";
import { DATA_ENGINEERING } from "@/lib/pages/data-engineering";

export const metadata = {
  title: "Data Engineering & Consulting",
  description:
    "Enterprise-scale data platforms, pipelines and cloud modernization delivered in short, outcome-focused sprints.",
  alternates: { canonical: "/data-engineering" },
};

export default function Page() {
  return <DataEngineeringPage data={DATA_ENGINEERING} />;
}

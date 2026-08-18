import DataEngineeringPage from "@/components/solutions/DataEngineeringPage";
import { ANALYTICS } from "@/lib/pages/analytics";

export const metadata = {
  title: "Advanced Analytics & Data Science",
  description:
    "Self-service BI, forecasting and analytics engineering that deliver insight at the speed of the business.",
  alternates: { canonical: "/analytics" },
};

export default function Page() {
  return <DataEngineeringPage data={ANALYTICS} />;
}

import PageBands from "@/components/sections/PageBands";
import ContactCta from "@/components/sections/ContactCta";
import data from "@/lib/pages/advanced-analytics-data-science.json";

export const metadata = {
  title: "Advanced Analytics & Data Science Services",
  description: "Insight-driven decisions from self-service BI, forecasting and analytics engineering.",
  alternates: { canonical: "/advanced-analytics-data-science" },
};

export default function Page() {
  return (
    <>
      <PageBands bands={data.bands} />
      <ContactCta />
    </>
  );
}

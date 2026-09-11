import PageBands from "@/components/sections/PageBands";
import ContactCta from "@/components/sections/ContactCta";
import data from "@/lib/pages/applied-ai-smart-automation.json";

export const metadata = {
  title: "Frugal AI Enablement",
  description: "Four accelerators that take enterprise AI from pilot to production.",
  alternates: { canonical: "/applied-ai-smart-automation" },
};

export default function Page() {
  return (
    <>
      <PageBands bands={data.bands} />
      <ContactCta />
    </>
  );
}

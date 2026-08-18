import PageBands from "@/components/sections/PageBands";
import ContactCta from "@/components/sections/ContactCta";
import data from "@/lib/pages/terms-and-conditions.json";

export const metadata = {
  title: "Terms & Conditions",
  description: "The terms governing use of the Ignitho website and services.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function Page() {
  return (
    <>
      <PageBands bands={data.bands} />
      <ContactCta />
    </>
  );
}

import PageBands from "@/components/sections/PageBands";
import ContactCta from "@/components/sections/ContactCta";
import data from "@/lib/pages/privacy-policy.json";

export const metadata = {
  title: "Privacy Policy",
  description: "How Ignitho collects, uses and protects your personal data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return (
    <>
      <PageBands bands={data.bands} />
      <ContactCta />
    </>
  );
}

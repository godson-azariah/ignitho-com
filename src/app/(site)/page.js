import Hero from "@/components/sections/home/Hero";
import FrugalInnovation from "@/components/sections/home/FrugalInnovation";
import ComplexityTrap from "@/components/home/ComplexityTrap";
import ServicesGrid from "@/components/home/ServicesGrid";
import IndustryFocus from "@/components/home/IndustryFocus";
import Impact from "@/components/home/Impact";
import ContactCta from "@/components/sections/ContactCta";

export const metadata = {
  title: "Home - Ignitho",
  description:
    "Ignitho delivers Data, Analytics & AI services for the enterprise — data engineering, advanced analytics and applied AI with measurable ROI.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero and FrugalInnovation come from the pixel-accurate reference build.
          The sections below still need the same treatment. */}
      <Hero />
      <FrugalInnovation />
      <ComplexityTrap />
      <ServicesGrid />
      <IndustryFocus />
      <Impact />
      <ContactCta />
    </>
  );
}

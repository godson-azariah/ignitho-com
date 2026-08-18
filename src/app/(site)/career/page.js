import CareerPage from "@/components/career/CareerPage";
import { CAREER } from "@/lib/pages/career";

export const metadata = {
  title: "Careers at Ignitho",
  description:
    "Come and build what enterprises actually need — as a Specialist. Roles across data, analytics, AI, delivery and operations.",
  alternates: { canonical: "/career" },
};

export default function Page() {
  return <CareerPage data={CAREER} />;
}

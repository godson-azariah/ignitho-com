import AboutPage from "@/components/about/AboutPage";
import { ABOUT } from "@/lib/pages/about";

export const metadata = {
  title: "About Ignitho",
  description:
    "Where engineering excellence meets data & AI specialization — our story, leadership team and board of advisors.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutPage data={ABOUT} />;
}

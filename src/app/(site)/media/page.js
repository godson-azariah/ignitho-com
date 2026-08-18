import IndustryPage from "@/components/industry/IndustryPage";
import { MEDIA } from "@/lib/industry/media";

export const metadata = {
  title: "Media & Communications",
  description:
    "As content scales and margins compress, leaders win through data maturity – powering personalisation, monetisation, and platform resilience",
  alternates: { canonical: "/media" },
};

export default function Page() {
  return <IndustryPage data={MEDIA} />;
}

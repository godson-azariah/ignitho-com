import ContactPage from "@/components/contact/ContactPage";
import { CONTACT } from "@/lib/pages/contact";

export const metadata = {
  title: "Contact Ignitho",
  description:
    "Connecting you to specialist expertise — talk to us about scaling your data estate, joining the team, or a partnership.",
  alternates: { canonical: "/contact-us" },
};

export default function Page() {
  return <ContactPage data={CONTACT} />;
}

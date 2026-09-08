import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { site } from "@/data/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | ELOANSS" },
      {
        name: "description",
        content:
          "How ELOANSS collects, uses, shares and protects the personal information you provide when enquiring about loans, insurance or investments.",
      },
      { property: "og:title", content: "Privacy Policy | ELOANSS" },
      { property: "og:description", content: "How we handle and protect your personal information." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what information ELOANSS collects, why we collect it, and the choices you have. It applies to eloanss.com and to enquiries made by phone, WhatsApp or email."
      sections={[
        {
          h: "Information we collect",
          p: [
            "Details you give us: name, mobile number, email, city, employment type, income range and the product you are interested in.",
            "Documents you share for an application, such as identity proof, income proof and bank statements.",
            "Basic technical data such as browser type and pages viewed, used only to improve the website.",
          ],
        },
        {
          h: "How we use it",
          p: [
            "To assess your eligibility and recommend suitable loan, insurance or investment options.",
            "To submit your application to the bank, NBFC or insurer you approve.",
            "To contact you about your enquiry and provide status updates.",
            "To meet legal, regulatory and audit requirements.",
          ],
        },
        {
          h: "Who we share it with",
          p: [
            "Only with the lenders, insurers or distributors required to process the application you approved, and with service providers bound by confidentiality obligations.",
            "We do not sell your personal information to third parties.",
          ],
        },
        {
          h: "Data security and retention",
          p: [
            "We use reasonable technical and organisational safeguards to protect your information, and retain it only as long as needed for the purpose collected or as required by law.",
          ],
        },
        {
          h: "Your choices",
          p: [
            "You may ask us to correct or delete your details, or to stop contacting you, by writing to " + site.email + ".",
            "Withdrawing consent may mean we can no longer process an ongoing application.",
          ],
        },
        {
          h: "Contact",
          p: ["Questions about this policy can be sent to " + site.email + " or to our office at " + site.address + "."],
        },
      ]}
    />
  ),
});

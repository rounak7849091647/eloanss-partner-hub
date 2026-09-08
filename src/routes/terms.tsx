import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { site } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | ELOANSS" },
      {
        name: "description",
        content:
          "The terms that govern your use of eloanss.com and the loan, insurance and investment facilitation services provided by ELOANSS.",
      },
      { property: "og:title", content: "Terms & Conditions | ELOANSS" },
      { property: "og:description", content: "Terms governing use of our website and facilitation services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <LegalPage
      title="Terms & Conditions"
      intro="By using eloanss.com or submitting an enquiry, you agree to the terms below. Please read them carefully."
      sections={[
        {
          h: "Our role",
          p: [
            "ELOANSS is a facilitator and distributor. We help you compare and apply for products offered by banks, NBFCs, insurers and asset management companies.",
            "We do not lend money, underwrite insurance or guarantee approval. Sanction, interest rate, cover and all final terms are decided solely by the respective institution.",
          ],
        },
        {
          h: "Information you provide",
          p: [
            "You confirm that the information and documents you share are true, accurate and your own.",
            "Applications based on incorrect or incomplete information may be rejected by the institution, and we are not responsible for such outcomes.",
          ],
        },
        {
          h: "Charges",
          p: [
            "Any fee applicable to our services is disclosed to you in writing before you proceed.",
            "Processing fees, valuation charges, stamp duty, premium amounts and similar costs are levied by the institution or authority concerned.",
          ],
        },
        {
          h: "Website content",
          p: [
            "Interest rates, tenures, cover amounts and eligibility shown on this website are indicative and change frequently. They do not constitute an offer.",
            "Calculator results are illustrative estimates and not a commitment of any kind.",
          ],
        },
        {
          h: "Intellectual property",
          p: ["All content, branding and design on this website belong to ELOANSS and may not be copied without written permission."],
        },
        {
          h: "Governing law and contact",
          p: [
            "These terms are governed by Indian law, with jurisdiction at the courts of our registered office location.",
            "Queries: " + site.email + ".",
          ],
        },
      ]}
    />
  ),
});

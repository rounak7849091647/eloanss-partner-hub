import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { site } from "@/data/site";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | ELOANSS" },
      {
        name: "description",
        content:
          "Important disclaimers about the loan, insurance and investment information published on eloanss.com, including rates, eligibility and market risk.",
      },
      { property: "og:title", content: "Disclaimer | ELOANSS" },
      { property: "og:description", content: "What our published rates, calculators and guidance do and do not mean." },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <LegalPage
      title="Disclaimer"
      intro="Please read this alongside our Terms & Conditions before relying on any information published on this website."
      sections={[
        {
          h: "No guarantee of approval",
          p: [
            "ELOANSS is a loan broker and insurance facilitator. We do not approve loans or issue policies. Every application is subject to the credit, underwriting and documentation policy of the relevant bank, NBFC or insurer.",
          ],
        },
        {
          h: "Rates and figures are indicative",
          p: [
            "Interest rates, processing fees, loan amounts, tenures and cover values shown here are indicative ranges collected from partner institutions and can change without notice.",
            "EMI calculator output is an estimate. Your actual EMI depends on the sanctioned amount, rate, tenure and lender method of calculation.",
          ],
        },
        {
          h: "Insurance",
          p: [
            "Insurance is the subject matter of solicitation. Benefits, exclusions and waiting periods are governed entirely by the policy document issued by the insurer.",
          ],
        },
        {
          h: "Investments",
          p: [
            "Market-linked investments carry risk, including loss of capital. Past performance does not indicate future returns. Please read all scheme related documents carefully before investing.",
          ],
        },
        {
          h: "No professional advice",
          p: [
            "Content on this website is general information, not legal, tax or investment advice for your specific situation. Please consult a qualified professional where required.",
          ],
        },
        {
          h: "Placeholder content",
          p: [
            "Some contact details, statistics, team names and testimonials on this website are illustrative placeholders pending confirmation. Write to " +
              site.email +
              " for verified details.",
          ],
        },
      ]}
    />
  ),
});

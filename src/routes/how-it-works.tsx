import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CtaBanner, FaqList, SectionHead } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { steps } from "@/data/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — From Enquiry to Disbursal | ELOANSS" },
      {
        name: "description",
        content:
          "See exactly how ELOANSS works: submit an enquiry, get matched offers, verify documents and receive your disbursal — with clear updates at every stage.",
      },
      { property: "og:title", content: "How ELOANSS Works" },
      { property: "og:description", content: "Four transparent steps from enquiry to loan disbursal." },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorks,
});

const detail = [
  ["Share your requirement, city and income type", "A dedicated advisor is assigned to you", "Free eligibility check with no commitment"],
  ["We shortlist lenders whose policy fits your profile", "Offers compared on rate, tenure and total cost", "You choose — we never apply without your approval"],
  ["Checklist shared upfront so nothing is missed", "Our credit desk reviews before submission", "Queries from the lender handled by us"],
  ["Sanction letter reviewed with you line by line", "Agreement signing and disbursal tracking", "Post-disbursal support on EMIs and statements"],
];

const faqs = [
  { q: "How long does the whole process take?", a: "Unsecured loans typically 3–7 working days. Secured loans such as home or mortgage take 2–4 weeks due to legal and valuation checks." },
  { q: "Does ELOANSS charge me a fee?", a: "Any applicable charge is disclosed in writing before you apply. Lender processing fees are charged by the bank, not by us." },
  { q: "Will my details be shared widely?", a: "No. We submit your file only to the lender you approve." },
  { q: "What if my application is rejected?", a: "We find out the actual reason, fix the gaps and re-place the file with a lender whose policy suits you." },
  { q: "Can I track my application?", a: "Yes. Your advisor gives you a status update at every stage, and you can call or WhatsApp anytime." },
];

function HowItWorks() {
  return (
    <>
      <section className="bg-navy py-16">
        <div className="container-page">
          <span className="eyebrow text-gold">How it works</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
            A clear process, from first call to disbursal
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">
            No guesswork and no chasing. Here is exactly what happens after you submit an enquiry with ELOANSS.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page space-y-6">
          {steps.map((s, i) => (
            <div key={s.title} className="card-soft grid gap-6 p-7 md:grid-cols-[auto_1fr_1fr] md:items-start">
              <span className="font-display text-5xl font-bold text-gold/50">0{i + 1}</span>
              <div>
                <h2 className="font-display text-2xl font-bold text-navy">{s.title}</h2>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
              <ul className="space-y-2">
                {detail[i].map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-navy/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            center={false}
            eyebrow="Step one"
            title="Start with a free eligibility check"
            text="It takes under two minutes and does not affect your plans in any way."
          />
          <EnquiryForm title="Submit your enquiry" />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead eyebrow="FAQ" title="Process questions" />
          <div className="mt-10">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

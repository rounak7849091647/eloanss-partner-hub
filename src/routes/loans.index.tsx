import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBanner, SectionHead } from "@/components/site/blocks";
import { EmiCalculator } from "@/components/site/EmiCalculator";
import { loans } from "@/data/loans";

export const Route = createFileRoute("/loans")({
  head: () => ({
    meta: [
      { title: "Loan Products — Personal, Business, Home & Vehicle | ELOANSS" },
      {
        name: "description",
        content:
          "Explore 12 loan products from ELOANSS — personal, business, home, plot, car, two-wheeler, commercial vehicle, project, overdraft and gold loans.",
      },
      { property: "og:title", content: "Loan Products | ELOANSS" },
      { property: "og:description", content: "Compare rates, eligibility and documents for every loan we facilitate." },
      { property: "og:url", content: "/loans" },
    ],
    links: [{ rel: "canonical", href: "/loans" }],
  }),
  component: LoansIndex,
});

function LoansIndex() {
  return (
    <>
      <section className="bg-navy py-16">
        <div className="container-page">
          <span className="eyebrow text-gold">Loans</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
            Every loan you need, matched to the right lender
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">
            One enquiry, multiple offers compared on rate, tenure and charges. Pick a product below to see full
            eligibility and documentation.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loans.map((l) => (
            <article key={l.slug} className="card-soft card-hover flex flex-col p-6">
              <h2 className="font-display text-xl font-bold text-navy">{l.name}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{l.short}</p>
              <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">Interest</dt>
                  <dd className="font-semibold text-navy">{l.rate}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">Tenure</dt>
                  <dd className="font-semibold text-navy">{l.tenure}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">Amount</dt>
                  <dd className="font-semibold text-navy">{l.amount}</dd>
                </div>
              </dl>
              <Link to="/loans/$slug" params={{ slug: l.slug }} className="btn-base btn-gold mt-6">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHead eyebrow="EMI calculator" title="Check your EMI before applying" />
          <div className="mt-12">
            <EmiCalculator />
          </div>
        </div>
      </section>

      <CtaBanner title="Not sure which loan fits your need?" text="Share your requirement and we'll recommend the right product and lender." />
    </>
  );
}

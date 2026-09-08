import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, GitCompareArrows, Info } from "lucide-react";
import { SectionHead } from "@/components/site/blocks";
import { loans } from "@/data/loans";
import { getLoanVisual } from "@/data/loan-visuals";

export const Route = createFileRoute("/loans/compare")({
  head: () => ({
    meta: [
      { title: "Compare Loan Types, Rates & Terms | ELOANSS" },
      { name: "description", content: "Compare ELOANSS loan types side by side by indicative rates, amounts, tenure, security, processing time and purpose." },
      { property: "og:title", content: "Loan Comparison | ELOANSS" },
      { property: "og:description", content: "Compare popular personal, home, business, vehicle and secured loan options side by side." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/loans/compare" }],
  }),
  component: LoanComparison,
});

const defaultSlugs = ["personal-loan", "home-loan", "business-loan"];

function LoanComparison() {
  const [selected, setSelected] = useState(defaultSlugs);
  const compared = useMemo(() => selected.flatMap((slug) => {
    const loan = loans.find((item) => item.slug === slug);
    return loan ? [loan] : [];
  }), [selected]);

  function update(index: number, slug: string) {
    setSelected((current) => current.map((item, itemIndex) => itemIndex === index ? slug : item));
  }

  return (
    <>
      <section className="bg-navy py-16">
        <div className="container-page">
          <span className="eyebrow text-gold"><GitCompareArrows className="h-4 w-4" /> Loan comparison</span>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold text-primary-foreground sm:text-5xl">Compare the complete picture before you borrow.</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">Select up to three loan products and compare purpose, rate range, amount, tenure, security and expected processing time.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-3">
            {selected.map((slug, index) => (
              <label key={index} className="text-sm font-semibold text-navy">
                Loan {index + 1}
                <select value={slug} onChange={(event) => update(index, event.target.value)} className="mt-2 h-12 w-full rounded-md border border-input bg-background px-3 text-sm font-medium text-navy outline-none focus:border-gold">
                  {loans.map((loan) => <option key={loan.slug} value={loan.slug}>{loan.name}</option>)}
                </select>
              </label>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {compared.map((loan, index) => {
              const visual = getLoanVisual(loan.slug);
              return (
                <article key={`${loan.slug}-${index}`} className="card-soft overflow-hidden">
                  <img src={visual.image} alt={visual.alt} loading="lazy" width={1400} height={900} className="aspect-[16/8] w-full object-cover" />
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase text-gold-dark">{visual.category}</span>
                    <h2 className="mt-2 font-display text-2xl font-bold text-navy">{loan.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{loan.short}</p>
                    <dl className="mt-6 divide-y divide-border border-y border-border text-sm">
                      {[
                        ["Best for", visual.bestFor], ["Indicative rate", loan.rate], ["Loan amount", loan.amount],
                        ["Tenure", loan.tenure], ["Security", visual.security], ["Processing", visual.processing],
                      ].map(([label, value]) => (
                        <div key={label} className="grid grid-cols-[0.38fr_0.62fr] gap-3 py-3"><dt className="text-muted-foreground">{label}</dt><dd className="font-semibold text-navy">{value}</dd></div>
                      ))}
                    </dl>
                    <div className="mt-5 space-y-2">
                      {loan.benefits.slice(0, 3).map((benefit) => <p key={benefit} className="flex gap-2 text-sm text-navy/80"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />{benefit}</p>)}
                    </div>
                    <Link to="/loans/$slug" params={{ slug: loan.slug }} className="btn-base btn-gold mt-6 w-full">Full details <ArrowRight className="h-4 w-4" /></Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex gap-3 rounded-lg border border-border bg-surface p-5 text-sm text-muted-foreground"><Info className="h-5 w-5 shrink-0 text-gold-dark" /><p>All figures are indicative. Final approval, pricing and charges depend on lender policy, credit assessment, documentation and collateral valuation where applicable.</p></div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHead eyebrow="Decision checklist" title="Compare more than the headline interest rate" text="Before selecting an offer, review the total repayment, all one-time charges, rate-reset rules, insurance, prepayment terms and service experience." />
          <div className="mx-auto mt-9 flex max-w-3xl justify-center"><Link to="/contact" className="btn-base btn-navy">Discuss my comparison <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>
    </>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, CheckCircle2, FileSearch, GitCompareArrows, Headphones, SearchCheck } from "lucide-react";
import homeLoanImg from "@/assets/home-loan.jpg";
import { CtaBanner, FaqList, SectionHead } from "@/components/site/blocks";
import { EmiCalculator } from "@/components/site/EmiCalculator";
import { EligibilityGuide } from "@/components/site/EligibilityGuide";
import { LoanExplorer } from "@/components/site/LoanExplorer";
import { loanGuideFaqs } from "@/data/loan-visuals";

export const Route = createFileRoute("/loans/")({
  head: () => ({
    meta: [
      { title: "Compare Loan Products, Rates & Eligibility | ELOANSS" },
      { name: "description", content: "Compare personal, business, home, vehicle, gold and project loans. Review indicative rates, eligibility, documents, EMIs and repayment guidance." },
      { property: "og:title", content: "Compare Loan Products | ELOANSS" },
      { property: "og:description", content: "Explore detailed loan options, understand eligibility and compare indicative rates and terms." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/loans" }],
  }),
  component: LoansIndex,
});

const process = [
  { icon: FileSearch, title: "Tell us your requirement", text: "Share your purpose, preferred amount, income profile and current obligations." },
  { icon: SearchCheck, title: "We assess the fit", text: "Your advisor checks eligibility and narrows the lenders whose policies suit your profile." },
  { icon: GitCompareArrows, title: "Compare complete offers", text: "Review rate, fees, tenure, security, prepayment terms and total repayment—not just EMI." },
  { icon: BadgeCheck, title: "Apply with confidence", text: "We organise documents, coordinate lender queries and keep you informed until disbursal." },
];

function LoansIndex() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <img src={homeLoanImg} alt="Couple in their new home" width={1400} height={900} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/25" />
        <div className="container-page relative grid min-h-[520px] items-center py-16 lg:grid-cols-[0.68fr_0.32fr]">
          <div>
            <span className="eyebrow text-gold">Loans for every milestone</span>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Find the right loan—not simply the first offer.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">
              Explore detailed options for personal, property, business and vehicle finance. Compare practical terms, understand eligibility and plan your EMI before you apply.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#explore" className="btn-base btn-gold">Explore all loans <ArrowRight className="h-4 w-4" /></a>
              <Link to="/loans/compare" className="btn-base btn-outline-light"><GitCompareArrows className="h-4 w-4" /> Compare loans</Link>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/80 sm:grid-cols-3">
              {["Indicative rate ranges", "Complete document guidance", "Multiple products in one place"].map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="explore" className="section-pad scroll-mt-24">
        <div className="container-page">
          <SectionHead center={false} eyebrow="Loan catalogue" title="Choose by what you want to achieve" text="Filter by category, then open any product for detailed eligibility, documents, costs, repayment guidance and FAQs." />
          <div className="mt-9"><LoanExplorer /></div>
          <p className="mt-5 text-xs text-muted-foreground">Rates, amounts and timelines are indicative. Final terms depend on lender policy and assessment of your application.</p>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHead eyebrow="Eligibility guide" title="See how lenders may assess your profile" text="Select the profile closest to yours for a practical starting checklist." />
          <div className="mt-10"><EligibilityGuide /></div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead eyebrow="A clearer application" title="From requirement to disbursal" text="A structured process reduces avoidable queries and helps you compare offers on the terms that matter." />
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <article key={step.title} className="bg-background p-6">
                <div className="flex items-center justify-between"><step.icon className="h-6 w-6 text-gold-dark" /><span className="text-xs font-bold text-muted-foreground">0{index + 1}</span></div>
                <h3 className="mt-7 font-display text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <span className="eyebrow text-gold">EMI planning</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary-foreground sm:text-4xl">Plan a repayment that leaves room for life.</h2>
            <p className="mt-4 text-primary-foreground/70">Test different amounts, rates and tenures. A lower EMI can increase total interest, so compare both monthly comfort and overall cost.</p>
            <p className="mt-6 flex gap-3 text-sm text-primary-foreground/80"><Headphones className="h-5 w-5 shrink-0 text-gold" />Need help interpreting the result? An advisor can explain the trade-offs.</p>
          </div>
          <EmiCalculator />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead eyebrow="Borrowing guide" title="Important questions before you apply" />
          <div className="mt-10"><FaqList items={loanGuideFaqs} /></div>
        </div>
      </section>

      <CtaBanner title="Ready to narrow down your loan options?" text="Share your requirement for a practical discussion about suitable products, documents and next steps." />
    </>
  );
}
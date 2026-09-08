import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Check, FileCheck2, FileText, GitCompareArrows, IndianRupee, Info, Percent, ShieldCheck, Timer, WalletCards } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { EmiCalculator } from "@/components/site/EmiCalculator";
import { CtaBanner, FaqList, SectionHead } from "@/components/site/blocks";
import { loanBySlug, loans } from "@/data/loans";
import { getLoanVisual } from "@/data/loan-visuals";

export const Route = createFileRoute("/loans/$slug")({
  loader: ({ params }) => {
    const loan = loanBySlug(params.slug);
    if (!loan) throw notFound();
    return { loan };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Loan not found | ELOANSS" }, { name: "robots", content: "noindex" }] };
    const { loan } = loaderData;
    const description = `${loan.name}: compare indicative rates, loan amount, tenure, eligibility, documents, benefits, repayment guidance and FAQs with ELOANSS.`;
    return {
      meta: [
        { title: `${loan.name} — Rates, Eligibility & Documents | ELOANSS` },
        { name: "description", content: description },
        { property: "og:title", content: `${loan.name} | ELOANSS` },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/loans/${loan.slug}` }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: loan.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }],
    };
  },
  component: LoanPage,
});

const journey = [
  { icon: FileCheck2, title: "Profile review", text: "We review your requirement, income, obligations and available documents." },
  { icon: GitCompareArrows, title: "Offer matching", text: "Suitable lender policies are compared on pricing, approval fit and terms." },
  { icon: CalendarCheck, title: "Application support", text: "Your file is organised and lender follow-ups are coordinated through the process." },
  { icon: WalletCards, title: "Sanction & disbursal", text: "Review the sanction terms carefully, complete formalities and receive funds as approved." },
];

function LoanPage() {
  const { loan } = Route.useLoaderData();
  const visual = getLoanVisual(loan.slug);
  const related = loans.filter((item) => item.slug !== loan.slug && getLoanVisual(item.slug).category === visual.category).slice(0, 3);
  const fallbacks = loans.filter((item) => item.slug !== loan.slug && !related.some((relatedLoan) => relatedLoan.slug === item.slug));
  const relatedLoans = [...related, ...fallbacks].slice(0, 3);

  return (
    <>
      <section className="bg-navy">
        <div className="container-page grid min-h-[600px] items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center py-14 pr-0 lg:pr-12">
            <nav className="text-xs text-primary-foreground/60"><Link to="/" className="hover:text-gold">Home</Link> / <Link to="/loans" className="hover:text-gold">Loans</Link> / <span className="text-gold">{loan.name}</span></nav>
            <span className="mt-8 text-xs font-bold uppercase text-gold">{visual.category} finance</span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl">{loan.name}</h1>
            <p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/80">{loan.intro}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Percent, k: "Indicative rate", v: loan.rate },
                { icon: Timer, k: "Tenure", v: loan.tenure },
                { icon: IndianRupee, k: "Loan amount", v: loan.amount },
              ].map((item) => (
                <div key={item.k} className="rounded-md border border-primary-foreground/15 bg-primary-foreground/5 p-4"><item.icon className="h-5 w-5 text-gold" /><p className="mt-3 text-xs text-primary-foreground/55">{item.k}</p><p className="mt-1 text-sm font-bold text-primary-foreground">{item.v}</p></div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#apply" className="btn-base btn-gold">Apply for this loan <ArrowRight className="h-4 w-4" /></a><Link to="/loans/compare" className="btn-base btn-outline-light"><GitCompareArrows className="h-4 w-4" /> Compare</Link></div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden lg:min-h-full">
            <img src={visual.image} alt={visual.alt} width={1400} height={900} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-x-5 bottom-5 rounded-md bg-background/95 p-5 shadow-lift sm:inset-x-8 sm:bottom-8">
              <p className="text-xs font-bold uppercase text-gold-dark">Best suited for</p><p className="mt-1 font-display text-lg font-bold text-navy">{visual.bestFor}</p>
              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-border pt-3 text-xs"><span><strong className="block text-navy">Security</strong><span className="text-muted-foreground">{visual.security}</span></span><span><strong className="block text-navy">Typical processing</strong><span className="text-muted-foreground">{visual.processing}</span></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-4">
        <div className="container-page flex gap-6 overflow-x-auto text-sm font-semibold text-navy">
          {[['overview','Overview'],['eligibility','Eligibility'],['documents','Documents'],['calculator','EMI calculator'],['faq','FAQs'],['apply','Apply']].map(([id, label]) => <a key={id} href={`#${id}`} className="whitespace-nowrap hover:text-gold-dark">{label}</a>)}
        </div>
      </section>

      <section id="overview" className="section-pad scroll-mt-32">
        <div className="container-page grid gap-6 lg:grid-cols-[0.6fr_0.4fr]">
          <article className="card-soft p-7 sm:p-8"><span className="eyebrow">Why consider it</span><h2 className="mt-3 font-display text-3xl font-bold text-navy">Key benefits of {loan.name}</h2><ul className="mt-6 grid gap-4 sm:grid-cols-2">{loan.benefits.map((item) => <li key={item} className="flex gap-3 text-sm text-navy/85"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />{item}</li>)}</ul></article>
          <aside className="rounded-lg bg-navy p-7 text-primary-foreground"><ShieldCheck className="h-8 w-8 text-gold" /><h2 className="mt-5 font-display text-2xl font-bold">Product features</h2><ul className="mt-5 space-y-4">{loan.features.map((item) => <li key={item} className="flex gap-3 text-sm text-primary-foreground/80"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{item}</li>)}</ul></aside>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <article id="eligibility" className="scroll-mt-32 bg-background p-7 sm:p-8"><span className="grid h-11 w-11 place-items-center rounded-md bg-gold/20 text-gold-dark"><FileCheck2 className="h-5 w-5" /></span><h2 className="mt-5 font-display text-2xl font-bold text-navy">Eligibility criteria</h2><p className="mt-2 text-sm text-muted-foreground">These are common starting requirements; lender rules can differ.</p><ul className="mt-6 space-y-4">{loan.eligibility.map((item) => <li key={item} className="flex gap-3 text-sm text-navy/85"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />{item}</li>)}</ul></article>
          <article id="documents" className="scroll-mt-32 bg-background p-7 sm:p-8"><span className="grid h-11 w-11 place-items-center rounded-md bg-teal/25 text-navy"><FileText className="h-5 w-5" /></span><h2 className="mt-5 font-display text-2xl font-bold text-navy">Documents checklist</h2><p className="mt-2 text-sm text-muted-foreground">Clear, readable and current documents help avoid unnecessary delays.</p><ul className="mt-6 space-y-4">{loan.documents.map((item) => <li key={item} className="flex gap-3 text-sm text-navy/85"><FileText className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />{item}</li>)}</ul></article>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page"><SectionHead eyebrow="Application journey" title={`How a ${loan.name} application works`} text="Timelines vary by product, lender, document readiness and any valuation or legal checks." /><div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">{journey.map((step, index) => <article key={step.title} className="bg-background p-6"><step.icon className="h-6 w-6 text-gold-dark" /><span className="mt-6 block text-xs font-bold text-muted-foreground">STEP 0{index + 1}</span><h3 className="mt-2 font-display text-lg font-bold text-navy">{step.title}</h3><p className="mt-2 text-sm text-muted-foreground">{step.text}</p></article>)}</div></div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <div><span className="eyebrow">Costs and repayment</span><h2 className="mt-3 font-display text-3xl font-bold text-navy">Read the offer beyond the rate.</h2><p className="mt-4 text-muted-foreground">Review processing, documentation, valuation, insurance, prepayment and late-payment charges. Ask whether the rate is fixed or floating and how changes affect your EMI or tenure.</p><div className="mt-6 flex gap-3 rounded-md border border-border bg-background p-4 text-sm text-muted-foreground"><Info className="h-5 w-5 shrink-0 text-gold-dark" />Only accept an EMI that leaves enough room for regular expenses, savings and emergencies.</div></div>
          <div id="calculator" className="scroll-mt-32"><EmiCalculator /></div>
        </div>
      </section>

      <section id="faq" className="section-pad scroll-mt-32"><div className="container-page"><SectionHead eyebrow="Detailed answers" title={`${loan.name} frequently asked questions`} /><div className="mt-10"><FaqList items={loan.faqs} /></div></div></section>

      <section id="apply" className="section-pad scroll-mt-24 bg-navy">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div><span className="eyebrow text-gold">Request a callback</span><h2 className="mt-3 font-display text-3xl font-bold text-primary-foreground">Discuss your {loan.name} requirement.</h2><p className="mt-4 text-primary-foreground/70">Share a few details so an advisor can help with suitable options and document readiness. Submission does not guarantee approval.</p><div className="mt-8 space-y-3">{["Your requirement stays central", "Indicative lender comparison", "Support through documentation"].map((item) => <p key={item} className="flex gap-3 text-sm text-primary-foreground/80"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{item}</p>)}</div></div>
          <EnquiryForm defaultInterest={loan.name} title={`${loan.name} enquiry`} />
        </div>
      </section>

      <section className="section-pad"><div className="container-page"><SectionHead eyebrow="Related finance" title="Other options worth exploring" /><div className="mt-10 grid gap-5 md:grid-cols-3">{relatedLoans.map((item) => { const itemVisual = getLoanVisual(item.slug); return <Link key={item.slug} to="/loans/$slug" params={{ slug: item.slug }} className="card-soft card-hover group overflow-hidden"><img src={itemVisual.image} alt={itemVisual.alt} loading="lazy" width={1400} height={900} className="aspect-[16/8] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><div className="p-5"><span className="text-xs font-bold uppercase text-gold-dark">{itemVisual.category}</span><h3 className="mt-2 font-display text-xl font-bold text-navy">{item.name}</h3><p className="mt-2 text-sm text-muted-foreground">{item.short}</p><p className="mt-4 flex items-center gap-2 text-sm font-semibold text-gold-dark">View full details <ArrowRight className="h-4 w-4" /></p></div></Link>; })}</div></div></section>
      <CtaBanner title="Still deciding between loan options?" text="Compare popular products side by side or discuss your goals with an ELOANSS advisor." />
    </>
  );
}
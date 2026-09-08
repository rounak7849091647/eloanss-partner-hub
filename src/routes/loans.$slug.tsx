import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, FileText, IndianRupee, Percent, Timer } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { EmiCalculator } from "@/components/site/EmiCalculator";
import { CtaBanner, FaqList, SectionHead } from "@/components/site/blocks";
import { loanBySlug, loans } from "@/data/loans";

export const Route = createFileRoute("/loans/$slug")({
  loader: ({ params }) => {
    const loan = loanBySlug(params.slug);
    if (!loan) throw notFound();
    return { loan };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Loan not found | ELOANSS" }, { name: "robots", content: "noindex" }] };
    }
    const { loan } = loaderData;
    const description = `${loan.name} from ELOANSS: ${loan.rate} interest, ${loan.tenure} tenure, ${loan.amount}. Eligibility, documents and FAQs explained.`;
    return {
      meta: [
        { title: `${loan.name} — Rates, Eligibility & Documents | ELOANSS` },
        { name: "description", content: description },
        { property: "og:title", content: `${loan.name} | ELOANSS` },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/loans/${loan.slug}` },
      ],
      links: [{ rel: "canonical", href: `/loans/${loan.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: loan.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: LoanPage,
});

function LoanPage() {
  const { loan } = Route.useLoaderData();
  const related = loans.filter((l) => l.slug !== loan.slug).slice(0, 3);

  return (
    <>
      <section className="bg-navy py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <nav className="text-xs text-primary-foreground/60">
              <Link to="/" className="hover:text-gold">
                Home
              </Link>{" "}
              /{" "}
              <Link to="/loans" className="hover:text-gold">
                Loans
              </Link>{" "}
              / <span className="text-gold">{loan.name}</span>
            </nav>
            <h1 className="mt-4 font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
              {loan.name}
            </h1>
            <p className="mt-4 max-w-xl text-primary-foreground/80">{loan.intro}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Percent, k: "Interest rate", v: loan.rate },
                { icon: Timer, k: "Tenure", v: loan.tenure },
                { icon: IndianRupee, k: "Loan amount", v: loan.amount },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4">
                  <s.icon className="h-5 w-5 text-gold" />
                  <p className="mt-2 text-xs uppercase tracking-wider text-primary-foreground/60">{s.k}</p>
                  <p className="font-display text-base font-bold text-primary-foreground">{s.v}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#apply" className="btn-base btn-gold">
                Apply Now
              </a>
              <Link to="/contact" className="btn-base btn-outline-light">
                Talk to an advisor
              </Link>
            </div>
          </div>
          <div>
            <EnquiryForm compact defaultInterest={loan.name} title={`Apply for ${loan.name}`} />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="card-soft p-7">
            <h2 className="font-display text-2xl font-bold text-navy">Key Benefits</h2>
            <ul className="mt-5 space-y-3">
              {loan.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-navy/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-soft p-7">
            <h2 className="font-display text-2xl font-bold text-navy">Eligibility Criteria</h2>
            <ul className="mt-5 space-y-3">
              {loan.eligibility.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-navy/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-soft p-7">
            <h2 className="font-display text-2xl font-bold text-navy">Documents Required</h2>
            <ul className="mt-5 space-y-3">
              {loan.documents.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-navy/85">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-soft p-7">
            <h2 className="font-display text-2xl font-bold text-navy">Features</h2>
            <ul className="mt-5 space-y-3">
              {loan.features.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-navy/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHead eyebrow="Plan ahead" title={`Estimate your ${loan.name} EMI`} />
          <div className="mt-12">
            <EmiCalculator />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead eyebrow="FAQ" title={`${loan.name} — common questions`} />
          <div className="mt-10">
            <FaqList items={loan.faqs} />
          </div>
        </div>
      </section>

      <section id="apply" className="section-pad bg-surface scroll-mt-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead
              center={false}
              eyebrow="Apply now"
              title={`Ready to apply for your ${loan.name}?`}
              text="Fill the short form and an ELOANSS advisor will call you back the same working day with matched offers."
            />
            <div className="mt-8 space-y-3">
              {["No hidden charges", "Multiple lender comparison", "End-to-end documentation support"].map((x) => (
                <p key={x} className="flex gap-3 text-sm text-navy/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {x}
                </p>
              ))}
            </div>
          </div>
          <EnquiryForm defaultInterest={loan.name} title={`${loan.name} application`} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead eyebrow="Related products" title="You may also be interested in" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((l) => (
              <Link
                key={l.slug}
                to="/loans/$slug"
                params={{ slug: l.slug }}
                className="card-soft card-hover p-6"
              >
                <h3 className="font-display text-lg font-bold text-navy">{l.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{l.short}</p>
                <p className="mt-4 text-sm font-semibold text-gold-dark">View details →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

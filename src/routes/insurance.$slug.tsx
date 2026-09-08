import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ShieldCheck, Users } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { CtaBanner, FaqList, SectionHead } from "@/components/site/blocks";
import { insuranceBySlug, insurances } from "@/data/insurance";

export const Route = createFileRoute("/insurance/$slug")({
  loader: ({ params }) => {
    const plan = insuranceBySlug(params.slug);
    if (!plan) throw notFound();
    return { plan };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Plan not found | ELOANSS" }, { name: "robots", content: "noindex" }] };
    }
    const { plan } = loaderData;
    const description = `${plan.name} through ELOANSS: cover of ${plan.cover}, key benefits, who it suits and answers to common questions.`;
    return {
      meta: [
        { title: `${plan.name} — Free Quote & Cover Details | ELOANSS` },
        { name: "description", content: description },
        { property: "og:title", content: `${plan.name} | ELOANSS` },
        { property: "og:description", content: description },
        { property: "og:url", content: `/insurance/${plan.slug}` },
      ],
      links: [{ rel: "canonical", href: `/insurance/${plan.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: plan.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: InsurancePage,
});

function InsurancePage() {
  const { plan } = Route.useLoaderData();
  const related = insurances.filter((i) => i.slug !== plan.slug).slice(0, 3);

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
              <Link to="/insurance" className="hover:text-gold">
                Insurance
              </Link>{" "}
              / <span className="text-gold">{plan.name}</span>
            </nav>
            <h1 className="mt-4 font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
              {plan.name}
            </h1>
            <p className="mt-4 max-w-xl text-primary-foreground/80">{plan.intro}</p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-4">
              <ShieldCheck className="h-6 w-6 text-gold" />
              <span>
                <span className="block text-xs uppercase tracking-wider text-primary-foreground/60">
                  Typical cover
                </span>
                <span className="font-display text-lg font-bold text-primary-foreground">{plan.cover}</span>
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quote" className="btn-base btn-gold">
                Get Free Quote
              </a>
              <Link to="/contact" className="btn-base btn-outline-light">
                Talk to an advisor
              </Link>
            </div>
          </div>
          <EnquiryForm compact defaultInterest={plan.name} title={`Quote for ${plan.name}`} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="card-soft p-7">
            <h2 className="font-display text-2xl font-bold text-navy">What's covered</h2>
            <ul className="mt-5 space-y-3">
              {plan.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-navy/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-soft p-7">
            <h2 className="font-display text-2xl font-bold text-navy">Who it suits</h2>
            <ul className="mt-5 space-y-3">
              {plan.whoFor.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-navy/85">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHead eyebrow="FAQ" title={`${plan.name} — common questions`} />
          <div className="mt-10">
            <FaqList items={plan.faqs} />
          </div>
        </div>
      </section>

      <section id="quote" className="section-pad scroll-mt-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            center={false}
            eyebrow="Free quote"
            title={`Get your ${plan.name} quote`}
            text="No spam calls and no pressure — just comparable options with the fine print explained."
          />
          <EnquiryForm defaultInterest={plan.name} title={`${plan.name} quote request`} />
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHead eyebrow="Related cover" title="Other plans to consider" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((i) => (
              <Link key={i.slug} to="/insurance/$slug" params={{ slug: i.slug }} className="card-soft card-hover p-6">
                <h3 className="font-display text-lg font-bold text-navy">{i.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{i.short}</p>
                <p className="mt-4 text-sm font-semibold text-gold-dark">Get quote →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { CtaBanner, SectionHead } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { insurances } from "@/data/insurance";

export const Route = createFileRoute("/insurance/")({
  head: () => ({
    meta: [
      { title: "Insurance — Life, Health, Term, Travel & Vehicle | ELOANSS" },
      {
        name: "description",
        content:
          "Compare life, health, term, travel, property, vehicle and heavy vehicle insurance with ELOANSS. Free quotes and honest advice on the cover you actually need.",
      },
      { property: "og:title", content: "Insurance Plans | ELOANSS" },
      { property: "og:description", content: "Free quotes on life, health, term, travel, property and vehicle insurance." },
      { property: "og:url", content: "/insurance" },
    ],
    links: [{ rel: "canonical", href: "/insurance" }],
  }),
  component: InsuranceIndex,
});

function InsuranceIndex() {
  return (
    <>
      <section className="bg-navy py-16">
        <div className="container-page">
          <span className="eyebrow text-gold">Insurance</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
            Protection that fits your life, not a sales target
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">
            We compare plans on claim settlement record, exclusions and real cover — then recommend only what you
            need. Free quotes, no pressure.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insurances.map((i) => (
            <article key={i.slug} className="card-soft card-hover flex flex-col p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal/25 text-navy">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-display text-xl font-bold text-navy">{i.name}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{i.short}</p>
              <p className="mt-4 text-sm text-navy">
                <span className="text-muted-foreground">Cover: </span>
                <span className="font-semibold">{i.cover}</span>
              </p>
              <Link to="/insurance/$slug" params={{ slug: i.slug }} className="btn-base btn-gold mt-5">
                Get Free Quote
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            center={false}
            eyebrow="Free quote"
            title="Tell us who you want to protect"
            text="Share a few details and we'll send comparable quotes with the differences explained in plain language."
          />
          <EnquiryForm defaultInterest="Health Insurance" title="Request an insurance quote" />
        </div>
      </section>

      <CtaBanner title="Not sure how much cover you need?" text="Our advisors calculate the right sum assured based on your income, loans and dependants." />
    </>
  );
}

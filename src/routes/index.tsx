import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Banknote,
  Bike,
  Briefcase,
  Building2,
  Car,
  Coins,
  Compass,
  Globe2,
  HeartHandshake,
  Home as HomeIcon,
  ShieldCheck,
  Target,
  TrendingUp,
  User,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import partnerImg from "@/assets/partner.jpg";
import { EmiCalculator } from "@/components/site/EmiCalculator";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { CtaBanner, MapEmbed, SectionHead, Testimonials, TrustBar } from "@/components/site/blocks";
import { loans } from "@/data/loans";
import { site, steps } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELOANSS — Loans, Insurance & Investments Made Simple" },
      {
        name: "description",
        content:
          "Compare loan and insurance offers from top banks, NBFCs and insurers. Fast approvals, transparent charges and expert guidance from ELOANSS.",
      },
      { property: "og:title", content: "ELOANSS — Loans, Insurance & Investments Made Simple" },
      {
        property: "og:description",
        content: "Compare offers from top banks & NBFCs. Expert guidance. Quick approval.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const categories = [
  { icon: User, label: "Personal", slug: "personal-loan" },
  { icon: Briefcase, label: "Business", slug: "business-loan" },
  { icon: HomeIcon, label: "Home", slug: "home-loan" },
  { icon: Car, label: "Vehicle", slug: "new-car-loan" },
  { icon: Coins, label: "Gold", slug: "gold-loan" },
  { icon: Bike, label: "Two-Wheeler", slug: "two-wheeler-loan" },
];

const featured = ["home-loan", "personal-loan", "business-loan", "gold-loan", "used-car-loan", "overdraft-loan"];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <img
          src={heroImg}
          alt="ELOANSS advisors guiding a couple through their loan options"
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative container-page grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
              <ShieldCheck className="h-4 w-4" /> Licensed loan & insurance facilitator
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
              Get the Best Loan & Insurance Solutions – Fast, Simple & Transparent
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/80">
              Compare offers from top banks & NBFCs | Expert Guidance | Quick Approval
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/loans" className="btn-base btn-gold">
                Apply for Loan
              </Link>
              <Link to="/insurance" className="btn-base btn-outline-light">
                Get Insurance Quote
              </Link>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-primary-foreground/15 pt-6">
              {[
                ["₹500 Cr+", "Loans facilitated"],
                ["25+", "Partner lenders"],
                ["48 hrs", "Average sanction"],
              ].map(([big, small]) => (
                <div key={big}>
                  <dt className="font-display text-2xl font-bold text-gold">{big}</dt>
                  <dd className="text-xs text-primary-foreground/70">{small}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <EnquiryForm compact title="Check your eligibility free" />
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="section-pad">
        <div className="container-page">
          <SectionHead
            eyebrow="Quick categories"
            title="What would you like to finance today?"
            text="Pick a category to see rates, eligibility and documents — or tell us your requirement and we'll match the lender."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((c) => (
              <Link
                key={c.label}
                to="/loans/$slug"
                params={{ slug: c.slug }}
                className="card-soft card-hover flex flex-col items-center gap-3 p-6 text-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy/5 text-navy">
                  <c.icon className="h-7 w-7" />
                </span>
                <span className="font-semibold text-navy">{c.label}</span>
              </Link>
            ))}
            <Link to="/insurance" className="card-soft card-hover flex flex-col items-center gap-3 bg-navy p-6 text-center sm:col-span-3 lg:col-span-6">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/20 text-gold">
                <ShieldCheck className="h-7 w-7" />
              </span>
              <span className="font-semibold text-primary-foreground">
                Insurance — life, health, term, travel, property & vehicle
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: Compass,
              label: "Our Vision",
              text: "To become the most trusted financial partner helping individuals and businesses achieve their goals with the right loan and insurance solutions.",
            },
            {
              icon: Target,
              label: "Our Mission",
              text: "We simplify complex financial products, connect customers with the best lenders and insurers, and deliver transparent, fast, and personalized service.",
            },
          ].map((v) => (
            <div key={v.label} className="card-soft p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/20 text-gold-dark">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-navy">{v.label}</h3>
              <p className="mt-3 text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead
            eyebrow="Featured products"
            title="Popular loan products this month"
            text="Indicative rates from our partner lenders. Your final rate depends on income, credit profile and loan size."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((slug) => {
              const loan = loans.find((l) => l.slug === slug)!;
              return (
                <article key={slug} className="card-soft card-hover flex flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-navy">{loan.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{loan.short}</p>
                  <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
                    <div className="flex justify-between gap-3">
                      <dt className="text-muted-foreground">Interest</dt>
                      <dd className="font-semibold text-navy">{loan.rate}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-muted-foreground">Amount</dt>
                      <dd className="font-semibold text-navy">{loan.amount}</dd>
                    </div>
                  </dl>
                  <Link to="/loans/$slug" params={{ slug: loan.slug }} className="btn-base btn-gold mt-6">
                    Apply Now
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHead
            eyebrow="EMI calculator"
            title="Plan your EMI before you apply"
            text="Move the sliders to see how amount, rate and tenure change your monthly outflow."
          />
          <div className="mt-12">
            <EmiCalculator />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead eyebrow="How it works" title="Four simple steps to disbursal" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="card-soft card-hover p-6">
                <span className="font-display text-4xl font-bold text-gold/60">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-page">
          <div className="card-soft grid items-center gap-8 overflow-hidden bg-navy p-0 lg:grid-cols-2">
            <img
              src={partnerImg}
              alt="ELOANSS distributor partnership handshake"
              loading="lazy"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
            />
            <div className="p-8 lg:p-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold">
                <Globe2 className="h-4 w-4" /> Global distributor programme
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-primary-foreground">
                Want to become our Global Distributor?
              </h2>
              <p className="mt-3 text-primary-foreground/75">
                Partner with ELOANSS and grow your financial business with our lender network, training and
                payout support.
              </p>
              <Link to="/partner" className="btn-base btn-gold mt-7">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section-pad">
        <div className="container-page">
          <SectionHead
            eyebrow="Visit or write to us"
            title="Talk to an advisor near you"
            text="Drop into our office or send your requirement — we respond within one working day."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="card-soft p-6">
                <h3 className="font-display text-lg font-bold text-navy">Head Office</h3>
                <p className="mt-2 text-sm text-muted-foreground">{site.address}</p>
                <p className="mt-3 text-sm text-navy">
                  <a href={site.phoneHref} className="font-semibold">
                    {site.phone}
                  </a>{" "}
                  ·{" "}
                  <a href={`mailto:${site.email}`} className="font-semibold">
                    {site.email}
                  </a>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{site.hours}</p>
              </div>
              <MapEmbed />
            </div>
            <EnquiryForm title="Send us your requirement" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page grid gap-6 sm:grid-cols-3">
          {[
            { icon: TrendingUp, t: "Share Markets", d: "Demat, mutual funds and SIP guidance for long-term wealth.", to: "/investments" },
            { icon: HeartHandshake, t: "Insurance", d: "Right-sized cover for life, health, property and vehicles.", to: "/insurance" },
            { icon: Banknote, t: "All Loans", d: "Twelve loan products across personal, business and vehicle.", to: "/loans" },
          ].map((c) => (
            <Link key={c.t} to={c.to} className="card-soft card-hover p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy/5 text-navy">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />

      <section className="border-t border-border py-10">
        <div className="container-page flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <Building2 className="h-5 w-5 text-gold-dark" />
          <span>ELOANSS is a facilitator. Sanction, rate and insurance terms rest with the lender or insurer.</span>
        </div>
      </section>
    </>
  );
}

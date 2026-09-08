import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Banknote,
  Bike,
  Briefcase,
  Building2,
  Car,
  CheckCircle2,
  Coins,
  Globe2,
  HeartHandshake,
  Home as HomeIcon,
  Landmark,
  ShieldCheck,
  TrendingUp,
  User,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import partnerImg from "@/assets/partner.jpg";
import { EmiCalculator } from "@/components/site/EmiCalculator";
import { CtaBanner, MapEmbed, SectionHead, Testimonials, TrustBar } from "@/components/site/blocks";
import { loans } from "@/data/loans";
import { insurances } from "@/data/insurance";
import { site, steps } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELOANSS — Loans, Insurance & Investments" },
      { name: "description", content: "Compare loans and insurance from leading banks and insurers with clear guidance from ELOANSS." },
      { property: "og:title", content: "ELOANSS — Finance Made Simple" },
      { property: "og:description", content: "Loans, insurance and investments with transparent expert guidance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const categories = [
  { icon: User, label: "Personal Loan", slug: "personal-loan", note: "For your personal needs" },
  { icon: Briefcase, label: "Business Loan", slug: "business-loan", note: "Fuel your business" },
  { icon: HomeIcon, label: "Home Loan", slug: "home-loan", note: "Turn your dream home real" },
  { icon: Landmark, label: "Mortgage Loan", slug: "mortgage-loan", note: "Unlock property value" },
  { icon: Car, label: "Car Loan", slug: "new-car-loan", note: "Drive your dreams" },
  { icon: Bike, label: "Two-Wheeler", slug: "two-wheeler-loan", note: "Ride towards independence" },
  { icon: Coins, label: "Gold Loan", slug: "gold-loan", note: "Funds when you need them" },
  { icon: Building2, label: "Project Loan", slug: "project-loan", note: "Build with confidence" },
];

const featuredSlugs = ["home-loan", "personal-loan", "business-loan", "gold-loan"];
const featuredLoans = featuredSlugs.flatMap((slug) => {
  const loan = loans.find((item) => item.slug === slug);
  return loan ? [loan] : [];
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface">
        <div className="container-page grid min-h-[620px] items-center gap-7 py-10 lg:grid-cols-12 lg:py-12">
          <div className="relative z-10 lg:col-span-5">
            <span className="eyebrow"><ShieldCheck className="h-4 w-4" /> Your trusted financial partner</span>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.15] text-navy sm:text-5xl lg:text-[3.45rem]">
              Finance made simple. <span className="text-gold-dark">Possibilities made real.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Loans, insurance and investments in one place—with expert guidance and clear choices at every step.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-navy">Start your application <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/loans" className="btn-base btn-outline-navy">Explore loan options</Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-border pt-6 text-sm text-navy sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {["Wide choice", "Quick process", "Trusted partners", "Expert help"].map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-gold-dark" />{item}</span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[390px] overflow-hidden rounded-lg lg:col-span-4 lg:min-h-[520px]">
            <img src={heroImg} alt="A family planning their finances with ELOANSS" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1100} />
            <div className="absolute inset-x-0 bottom-0 bg-navy/85 p-5 text-primary-foreground">
              <p className="font-display text-lg font-bold">Your goals. Our guidance.</p>
              <p className="mt-1 text-sm text-primary-foreground/75">Clear support from enquiry to disbursal.</p>
            </div>
          </div>

          <div className="relative z-10 lg:col-span-3">
            <div className="border border-border bg-background p-5 shadow-lift sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div><p className="text-xs font-bold uppercase text-gold-dark">Quick estimate</p><h2 className="mt-1 font-display text-xl font-bold text-navy">Loan calculator</h2></div>
                <span className="rounded-md bg-surface px-2.5 py-1 text-xs font-semibold text-navy">Free</span>
              </div>
              <div className="mt-5"><EmiCalculator compact /></div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="section-pad">
        <div className="container-page">
          <div className="flex items-end justify-between gap-5">
            <SectionHead eyebrow="Loan solutions" title="Explore finance for every milestone" text="Compare clear options across personal, property, vehicle and business needs." center={false} />
            <Link to="/loans" className="hidden items-center gap-2 text-sm font-semibold text-gold-dark sm:flex">View all loans <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map((category) => (
              <Link key={category.slug} to="/loans/$slug" params={{ slug: category.slug }} className="card-soft card-hover group min-h-44 p-4">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-surface text-navy transition-colors group-hover:bg-navy group-hover:text-primary-foreground"><category.icon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-sm font-bold text-navy">{category.label}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{category.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="bg-background p-6 sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <SectionHead eyebrow="Insurance solutions" title="Protection that fits real life" text="Straightforward cover for the people, places and journeys that matter." center={false} />
              <Link to="/insurance" className="hidden text-sm font-semibold text-gold-dark sm:block">View all →</Link>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {insurances.slice(0, 7).map((item) => (
                <Link key={item.slug} to="/insurance/$slug" params={{ slug: item.slug }} className="rounded-md border border-border p-4 transition-colors hover:border-gold">
                  <ShieldCheck className="h-6 w-6 text-gold-dark" />
                  <h3 className="mt-3 text-sm font-bold text-navy">{item.name}</h3>
                </Link>
              ))}
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-lg bg-navy">
            <img src={heroImg} alt="Family protected with ELOANSS insurance guidance" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-35" />
            <div className="relative flex h-full flex-col justify-end p-7 text-primary-foreground">
              <HeartHandshake className="h-9 w-9 text-gold" />
              <h2 className="mt-5 font-display text-3xl font-bold">Secure what matters.</h2>
              <p className="mt-3 text-sm text-primary-foreground/75">Plans for your family, health, vehicle and future.</p>
              <Link to="/insurance" className="btn-base btn-gold mt-6 self-start">Get a free quote <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-5 lg:grid-cols-2">
          <article className="relative min-h-96 overflow-hidden rounded-lg bg-navy p-7 text-primary-foreground sm:p-9">
            <TrendingUp className="h-9 w-9 text-gold" />
            <p className="mt-8 text-xs font-bold uppercase text-gold">Share markets & investments</p>
            <h2 className="mt-3 max-w-md font-display text-3xl font-bold">Grow your wealth with patient, informed choices.</h2>
            <p className="mt-4 max-w-lg text-primary-foreground/70">Explore demat, mutual funds and SIP guidance aligned to your long-term goals.</p>
            <Link to="/investments" className="btn-base btn-gold mt-7">Explore investments <ArrowRight className="h-4 w-4" /></Link>
            <div className="absolute bottom-8 right-8 hidden items-end gap-2 opacity-25 sm:flex">
              {[40, 74, 55, 110, 88, 140, 120].map((height, index) => <span key={index} className="w-5 bg-gold" style={{ height }} />)}
            </div>
          </article>
          <article className="relative min-h-96 overflow-hidden rounded-lg">
            <img src={partnerImg} alt="ELOANSS business partnership" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-navy/70" />
            <div className="relative flex h-full flex-col justify-end p-7 text-primary-foreground sm:p-9">
              <Globe2 className="h-9 w-9 text-gold" />
              <p className="mt-8 text-xs font-bold uppercase text-gold">Global business opportunities</p>
              <h2 className="mt-3 font-display text-3xl font-bold">Build your financial services business with us.</h2>
              <p className="mt-4 text-primary-foreground/75">Join our distributor network with product access, training and support.</p>
              <Link to="/partner" className="btn-base btn-gold mt-7 self-start">Partner with us <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHead eyebrow="Your financial journey" title="A clear path from enquiry to disbursal" text="Simple steps, timely updates and personal support throughout." />
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="bg-background p-6">
                <span className="text-xs font-bold text-gold-dark">0{index + 1}</span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead eyebrow="Popular products" title="Frequently chosen finance options" text="Indicative terms only—your final offer depends on lender assessment." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featuredLoans.map((loan) => (
              <article key={loan.slug} className="card-soft card-hover flex flex-col p-5">
                <Banknote className="h-6 w-6 text-gold-dark" />
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{loan.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{loan.short}</p>
                <div className="mt-5 border-t border-border pt-4 text-sm"><span className="text-muted-foreground">Indicative interest</span><strong className="mt-1 block text-navy">{loan.rate}</strong></div>
                <Link to="/loans/$slug" params={{ slug: loan.slug }} className="mt-5 flex items-center gap-2 text-sm font-semibold text-gold-dark">View details <ArrowRight className="h-4 w-4" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section-pad">
        <div className="container-page grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-surface p-7 sm:p-9">
            <p className="eyebrow">Visit or write to us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy">Talk to an ELOANSS advisor</h2>
            <p className="mt-5 text-muted-foreground">{site.address}</p>
            <a href={site.phoneHref} className="mt-5 block font-semibold text-navy">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="mt-2 block font-semibold text-gold-dark">{site.email}</a>
            <p className="mt-5 text-sm text-muted-foreground">{site.hours}</p>
            <Link to="/contact" className="btn-base btn-navy mt-7">Send your requirement <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <MapEmbed className="rounded-lg" />
        </div>
      </section>

      <CtaBanner title="Bigger dreams. Brighter tomorrows." text="Let ELOANSS be part of your journey with clear, expert-guided financial choices." />
    </>
  );
}
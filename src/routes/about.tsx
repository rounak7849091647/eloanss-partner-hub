import { createFileRoute } from "@tanstack/react-router";
import { Award, Compass, Eye, Handshake, ShieldCheck, Target, Users, Zap } from "lucide-react";
import teamImg from "@/assets/team.jpg";
import { CtaBanner, SectionHead, Testimonials, TrustBar } from "@/components/site/blocks";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ELOANSS — Our Story, Vision & Values" },
      {
        name: "description",
        content:
          "ELOANSS is a loan broker and financial facilitator helping individuals and businesses across India access the right loans, insurance and investments.",
      },
      { property: "og:title", content: "About ELOANSS" },
      { property: "og:description", content: "Our story, vision, mission and the values behind every recommendation." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, t: "Transparency", d: "Every charge, condition and exclusion is explained before you sign anything." },
  { icon: Zap, t: "Speed", d: "Files are checked before submission so approvals happen in days, not weeks." },
  { icon: Handshake, t: "Fair advice", d: "We recommend what fits your profile, not what pays us the most." },
  { icon: Users, t: "Long relationships", d: "Most of our business comes from repeat customers and referrals." },
];

const why = [
  "25+ partner banks, NBFCs and insurers compared in one enquiry",
  "Dedicated advisor from first call to disbursal",
  "Documentation checked before it reaches the lender",
  "Support with previously rejected applications",
  "Loans, insurance and investments handled under one roof",
  "No hidden broker charges — ever",
];

const team = [
  { name: "Founder & CEO", role: "18 years in retail and business lending" },
  { name: "Head of Credit", role: "Ex-banker, specialises in MSME and project finance" },
  { name: "Insurance Lead", role: "Advises on life, health and commercial cover" },
  { name: "Customer Success Head", role: "Owns your experience from enquiry to disbursal" },
];

function About() {
  return (
    <>
      <section className="bg-navy py-16">
        <div className="container-page">
          <span className="eyebrow text-gold">About us</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
            Your Trusted Partner for Loans, Insurance & Investments
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">
            ELOANSS was built on a simple observation: most people don't get a bad deal because they made a bad
            choice — they get one because nobody explained the choices.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <img
            src={teamImg}
            alt="The ELOANSS advisory team at work"
            loading="lazy"
            width={1400}
            height={900}
            className="w-full rounded-3xl border border-border object-cover shadow-card"
          />
          <div>
            <SectionHead center={false} eyebrow="Our story" title="Built to make finance understandable" />
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                We started as a small team of former bankers who kept meeting the same frustrated customer: a
                salaried professional confused by shifting interest rates, or a business owner whose file had been
                rejected without explanation.
              </p>
              <p>
                Today ELOANSS works with more than 25 banks, NBFCs and insurers. We sit on your side of the table
                — reading the fine print, negotiating the rate, and preparing your file so it clears review the
                first time.
              </p>
              <p>
                From a first two-wheeler loan to a multi-crore project facility, the promise stays the same: fast,
                transparent and expert-guided financial solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="section-pad">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: Compass,
              label: "Vision",
              text: "To become the most trusted financial partner helping individuals and businesses achieve their goals with the right loan and insurance solutions.",
            },
            {
              icon: Target,
              label: "Mission",
              text: "We simplify complex financial products, connect customers with the best lenders and insurers, and deliver transparent, fast, and personalized service.",
            },
          ].map((v) => (
            <div key={v.label} className="card-soft p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/20 text-gold-dark">
                <v.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-navy">Our {v.label}</h2>
              <p className="mt-3 text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHead center={false} eyebrow="Why ELOANSS" title="Why customers choose us" />
            <ul className="mt-8 space-y-3">
              {why.map((w) => (
                <li key={w} className="flex gap-3 text-sm text-navy/85">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="card-soft p-6">
                <v.icon className="h-6 w-6 text-gold-dark" />
                <h3 className="mt-3 font-display text-lg font-bold text-navy">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead
            eyebrow="Our team"
            title="People behind your approvals"
            text="Names and photographs will be added shortly — share your team details and we'll place them here."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="card-soft card-hover p-6 text-center">
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-surface text-navy/40">
                  <Eye className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
}

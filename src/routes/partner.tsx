import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Building2, GraduationCap, IndianRupee, PlayCircle, Rocket, Users } from "lucide-react";
import partnerImg from "@/assets/partner.jpg";
import { CtaBanner, FaqList, SectionHead } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { site } from "@/data/site";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Global Distributor Programme — Partner With ELOANSS" },
      {
        name: "description",
        content:
          "Become an ELOANSS global distributor. Earn attractive payouts on loans and insurance with our lender network, training and back-office support.",
      },
      { property: "og:title", content: "Partner With ELOANSS — Global Distributor" },
      { property: "og:description", content: "Grow your financial business with our lender network, training and payout support." },
      { property: "og:url", content: "/partner" },
    ],
    links: [{ rel: "canonical", href: "/partner" }],
  }),
  component: Partner,
});

const benefits = [
  { icon: IndianRupee, t: "Attractive payouts", d: "Competitive commission on every disbursed loan and issued policy, paid on a fixed monthly cycle." },
  { icon: Building2, t: "25+ lender network", d: "Offer your clients products from leading banks, NBFCs and insurers without individual tie-ups." },
  { icon: GraduationCap, t: "Training & certification", d: "Product training, objection handling and compliance basics so you sell with confidence." },
  { icon: Users, t: "Back-office support", d: "Our credit team handles file preparation, follow-ups and lender coordination for you." },
  { icon: Rocket, t: "Marketing kit", d: "Ready creatives, brochures and a co-branded landing presence to help you acquire clients." },
  { icon: BadgeCheck, t: "Transparent tracking", d: "Know exactly where each file stands and what payout is due, with no chasing required." },
];

const whoCanApply = [
  "Insurance agents and mutual fund distributors",
  "Chartered accountants, tax consultants and auditors",
  "Property dealers, builders and vehicle dealerships",
  "Existing DSAs looking for a wider lender panel",
  "Business consultants with SME client networks",
  "Motivated individuals ready to build a financial services practice",
];

const faqs = [
  { q: "Is there a joining fee?", a: "There is no franchise fee. We only ask for KYC documents and a signed distributor agreement." },
  { q: "How and when are payouts made?", a: "Payouts are released on a fixed monthly cycle after the lender confirms disbursal or policy issuance." },
  { q: "Do I need prior finance experience?", a: "Helpful but not mandatory. Our onboarding training covers the products and processes you need." },
  { q: "Can I work part-time?", a: "Yes. Many partners start alongside an existing practice and scale as their pipeline grows." },
  { q: "Which locations are eligible?", a: "We onboard partners across India, and international partners for NRI-focused business." },
  { q: "Who handles my client's paperwork?", a: "Our credit desk does the heavy lifting — you bring the client, we run the file." },
];

function Partner() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <img
          src={partnerImg}
          alt="ELOANSS distributor partners shaking hands"
          loading="lazy"
          width={1400}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="container-page relative grid gap-10 py-16 lg:grid-cols-[1fr_0.85fr] lg:py-20">
          <div>
            <span className="eyebrow text-gold">Global distributor programme</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
              Build your own financial business — powered by ELOANSS
            </h1>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              Bring the clients. We bring the lender panel, the credit expertise and the back office. You earn on
              every disbursal and policy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#apply" className="btn-base btn-gold">
                Become a Partner
              </a>
              <a href={site.phoneHref} className="btn-base btn-outline-light">
                Call {site.phone}
              </a>
            </div>
          </div>
          <EnquiryForm
            compact
            defaultInterest="Global Distributor Enquiry"
            title="Distributor application"
            subtitle="Tell us about your practice and location. Our partnership team will call you."
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead eyebrow="Benefits" title="What you get as an ELOANSS distributor" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.t} className="card-soft card-hover p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/20 text-gold-dark">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHead center={false} eyebrow="Eligibility" title="Who can apply" />
            <ul className="mt-8 space-y-3">
              {whoCanApply.map((w) => (
                <li key={w} className="flex gap-3 text-sm text-navy/85">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-soft grid min-h-[280px] place-items-center bg-navy p-8 text-center">
            <div>
              <PlayCircle className="mx-auto h-14 w-14 text-gold" />
              <h3 className="mt-4 font-display text-xl font-bold text-primary-foreground">
                Partner walkthrough video
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                A 3-minute overview of the programme will appear here. Share your video link and we'll embed it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="section-pad scroll-mt-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            center={false}
            eyebrow="Apply"
            title="Start your distributor application"
            text="Onboarding usually takes 3–5 working days once your documents are in."
          />
          <EnquiryForm defaultInterest="Global Distributor Enquiry" title="Partner with ELOANSS" />
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHead eyebrow="FAQ" title="Partnership questions" />
          <div className="mt-10">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <CtaBanner title="Ready to grow with ELOANSS?" text="Speak to our partnership team about territories, payouts and onboarding." />
    </>
  );
}

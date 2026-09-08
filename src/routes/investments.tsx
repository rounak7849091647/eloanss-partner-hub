import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, BookOpen, LineChart, PieChart, Wallet } from "lucide-react";
import { CtaBanner, FaqList, SectionHead } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/investments")({
  head: () => ({
    meta: [
      { title: "Share Markets & Investments — Demat, SIP & Mutual Funds | ELOANSS" },
      {
        name: "description",
        content:
          "Open a demat account, start a SIP or build a mutual fund portfolio with ELOANSS. Guided investing for long-term wealth, explained without jargon.",
      },
      { property: "og:title", content: "Share Markets & Investments | ELOANSS" },
      { property: "og:description", content: "Demat accounts, SIPs and mutual fund portfolios with guided advice." },
      { property: "og:url", content: "/investments" },
    ],
    links: [{ rel: "canonical", href: "/investments" }],
  }),
  component: Investments,
});

const services = [
  { icon: Wallet, t: "Demat & Trading Account", d: "Account opening with our partner brokers, including guidance on charges and platform basics." },
  { icon: PieChart, t: "Mutual Fund Portfolios", d: "Goal-based fund selection across equity, debt and hybrid categories, reviewed periodically." },
  { icon: LineChart, t: "SIP Planning", d: "Start small and stay consistent. We map SIP amounts to goals like education, home or retirement." },
  { icon: BarChart3, t: "Portfolio Review", d: "Already investing? We review overlap, risk and costs and suggest practical corrections." },
  { icon: BookOpen, t: "Investor Education", d: "Simple sessions on market basics, risk and asset allocation for first-time investors." },
];

const faqs = [
  { q: "How much do I need to start investing?", a: "A SIP can start from ₹500 a month. What matters more than the amount is starting early and staying consistent." },
  { q: "Are returns guaranteed?", a: "No. Market-linked investments carry risk and returns vary. We help you choose a risk level you can hold through market falls." },
  { q: "Do you manage my money directly?", a: "No. Your money stays in your own demat or folio. We advise, you approve, and the broker or fund house executes." },
  { q: "Should I invest while repaying a loan?", a: "Usually a balance works — clear high-interest debt first, keep an emergency fund, then invest the rest." },
  { q: "Can NRIs invest through ELOANSS?", a: "Yes, subject to NRE/NRO account requirements and fund-house eligibility rules." },
];

function Investments() {
  return (
    <>
      <section className="bg-navy py-16">
        <div className="container-page">
          <span className="eyebrow text-gold">Share markets & investments</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
            Build wealth steadily, with guidance you can understand
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">
            Loans solve today. Investing solves tomorrow. We help you open the right account, pick sensible funds
            and stay invested through market noise.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead eyebrow="What we offer" title="Investment services" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.t} className="card-soft card-hover p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy/5 text-navy">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            center={false}
            eyebrow="Get started"
            title="Talk to an investment advisor"
            text="Tell us your goal and time horizon. We'll suggest a starting plan — no lock-in, no pushy calls."
          />
          <EnquiryForm defaultInterest="Share Market / Investments" title="Investment enquiry" />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead eyebrow="FAQ" title="Investing questions, answered" />
          <div className="mt-10">
            <FaqList items={faqs} />
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-muted-foreground">
            Market investments are subject to market risk. Please read all scheme related documents carefully
            before investing. ELOANSS provides distribution and guidance services only.
          </p>
        </div>
      </section>

      <CtaBanner title="Start your first SIP this month" text="A short call is enough to set up a plan that matches your income and goals." />
    </>
  );
}

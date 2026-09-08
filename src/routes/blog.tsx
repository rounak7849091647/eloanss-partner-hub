import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";
import { CtaBanner, SectionHead } from "@/components/site/blocks";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Resources — Loan and Insurance Guides | ELOANSS" },
      {
        name: "description",
        content:
          "Practical guides on loan eligibility, credit scores, EMI planning, insurance cover and investing basics, written in plain language by the ELOANSS team.",
      },
      { property: "og:title", content: "ELOANSS Blog & Resources" },
      { property: "og:description", content: "Guides on loans, credit scores, insurance cover and investing basics." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog;
});

const posts = [
  {
    title: "How your CIBIL score decides your interest rate",
    cat: "Credit",
    read: "6 min read",
    date: "Guide",
    excerpt:
      "A 40-point difference in your score can change your EMI by thousands. Here's what actually moves the number, and how to improve it in 90 days.",
  },
  {
    title: "Home loan or plot loan first? A practical comparison",
    cat: "Home loans",
    read: "7 min read",
    date: "Guide",
    excerpt:
      "Buying land and building later can cost less overall — or much more. We break down funding limits, tenure and tax treatment for both routes.",
  },
  {
    title: "Term insurance: how much cover is actually enough?",
    cat: "Insurance",
    read: "5 min read",
    date: "Guide",
    excerpt:
      "The 10x-income rule is a starting point, not an answer. Factor in loans, dependants and inflation to arrive at a number you can defend.",
  },
  {
    title: "Business loan rejected? Six reasons we see most often",
    cat: "Business",
    read: "8 min read",
    date: "Guide",
    excerpt:
      "Most rejections come down to banking conduct rather than turnover. Learn what lenders read in your statements before they read your ITR.",
  },
  {
    title: "Should you prepay your loan or invest the surplus?",
    cat: "Planning",
    read: "6 min read",
    date: "Guide",
    excerpt:
      "Compare your loan's effective post-tax rate against realistic investment returns — the answer changes with tenure and tax slab.",
  },
  {
    title: "Health insurance: room rent limits and other traps",
    cat: "Insurance",
    read: "5 min read",
    date: "Guide",
    excerpt:
      "The cheapest premium often hides the costliest clauses. Here are the five policy conditions to check before you buy.",
  },
];

function Blog() {
  return (
    <>
      <section className="bg-navy py-16">
        <div className="container-page">
          <span className="eyebrow text-gold">Blog & resources</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
            Straight answers on loans, insurance and money
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">
            No jargon, no sales pitch — just the explanations we give our own customers every day.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead eyebrow="Latest guides" title="Read before you borrow" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article key={p.title} className="card-soft card-hover flex flex-col p-6">
                <span className="w-fit rounded-full bg-surface px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-dark">
                  {p.cat}
                </span>
                <h2 className="mt-4 font-display text-lg font-bold text-navy">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" /> {p.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {p.read}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Full articles are being published shortly. Meanwhile,{" "}
            <Link to="/contact" className="font-semibold text-gold-dark">
              ask us your question directly
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBanner title="Have a question we haven't covered?" text="Send it across — an advisor will answer, whether or not you apply with us." />
    </>
  );
}

import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, GitCompareArrows } from "lucide-react";
import { loans } from "@/data/loans";
import { getLoanVisual, loanCategories, type LoanCategory } from "@/data/loan-visuals";

export function LoanExplorer() {
  const [category, setCategory] = useState<"All" | LoanCategory>("All");
  const visible = useMemo(
    () => loans.filter((loan) => category === "All" || getLoanVisual(loan.slug).category === category),
    [category],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" aria-label="Filter loans by category">
        {loanCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
            className={`rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${
              category === item
                ? "border-navy bg-navy text-primary-foreground"
                : "border-border bg-background text-navy hover:border-gold"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((loan) => {
          const visual = getLoanVisual(loan.slug);
          return (
            <article key={loan.slug} className="card-soft card-hover flex min-h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={visual.image}
                  alt={visual.alt}
                  loading="lazy"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-md bg-background/95 px-3 py-1 text-xs font-bold text-navy shadow-card">
                  {visual.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-xl font-bold text-navy">{loan.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{loan.short}</p>
                <dl className="mt-5 grid grid-cols-2 gap-3 border-y border-border py-4 text-sm">
                  <div>
                    <dt className="text-xs text-muted-foreground">Indicative rate</dt>
                    <dd className="mt-1 font-semibold text-navy">{loan.rate}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">Tenure</dt>
                    <dd className="mt-1 font-semibold text-navy">{loan.tenure}</dd>
                  </div>
                </dl>
                <p className="mt-4 flex gap-2 text-sm text-navy/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {visual.bestFor}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <Link
                    to="/loans/$slug"
                    params={{ slug: loan.slug }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark"
                  >
                    View full details <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="text-xs text-muted-foreground">Up to {loan.amount.replace(/^.*–\s*/, "")}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/loans/compare" className="btn-base btn-outline-navy">
          <GitCompareArrows className="h-4 w-4" /> Compare popular loans
        </Link>
      </div>
    </div>
  );
}
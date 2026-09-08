import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const profiles = [
  {
    id: "salaried",
    label: "Salaried",
    title: "For salaried professionals",
    points: ["Regular monthly salary credits", "Stable employment history", "Manageable existing EMIs", "A clean repayment record"],
    suggestion: "Personal, home, vehicle and balance transfer options",
  },
  {
    id: "self-employed",
    label: "Self-employed",
    title: "For business owners and professionals",
    points: ["Usually 2+ years in business", "Filed ITR and financial statements", "Consistent bank and GST activity", "Positive business cash flow"],
    suggestion: "Business, overdraft, property-backed and project finance",
  },
  {
    id: "asset-backed",
    label: "Asset-backed",
    title: "For property or gold owners",
    points: ["Clear ownership documents", "Acceptable asset valuation", "Income sufficient for repayment", "No material legal dispute"],
    suggestion: "Mortgage, plot, project and gold loan options",
  },
] as const;

export function EligibilityGuide() {
  const [selected, setSelected] = useState<(typeof profiles)[number]["id"]>("salaried");
  const profile = profiles.find((item) => item.id === selected) ?? profiles[0];

  return (
    <div className="grid overflow-hidden rounded-lg border border-border bg-background lg:grid-cols-[0.38fr_0.62fr]">
      <div className="border-b border-border bg-navy p-5 lg:border-b-0 lg:border-r">
        <p className="text-xs font-bold uppercase text-gold">Choose your profile</p>
        <div className="mt-4 grid gap-2">
          {profiles.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item.id)}
              className={`rounded-md px-4 py-3 text-left text-sm font-semibold transition-colors ${
                selected === item.id ? "bg-gold text-navy" : "text-primary-foreground/75 hover:bg-primary-foreground/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="font-display text-2xl font-bold text-navy">{profile.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">Lenders commonly review the following before confirming an offer.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {profile.points.map((point) => (
            <p key={point} className="flex gap-3 text-sm text-navy/85">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" /> {point}
            </p>
          ))}
        </div>
        <div className="mt-7 border-l-4 border-gold bg-surface p-4">
          <p className="text-xs font-bold uppercase text-gold-dark">Products to explore</p>
          <p className="mt-1 font-semibold text-navy">{profile.suggestion}</p>
        </div>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
          Check my eligibility with an advisor <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
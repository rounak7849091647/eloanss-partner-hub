import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";

const inr = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });

export function EmiCalculator() {
  const [amount, setAmount] = useState(1500000);
  const [rate, setRate] = useState(9.5);
  const [years, setYears] = useState(15);

  const { emi, interest, total } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    const e = r === 0 ? amount / n : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const t = e * n;
    return { emi: e, interest: t - amount, total: t };
  }, [amount, rate, years]);

  const principalShare = (amount / total) * 100;

  return (
    <div className="card-soft grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-7">
        <Field
          label="Loan Amount"
          value={inr(amount)}
          min={50000}
          max={20000000}
          step={50000}
          current={amount}
          onChange={setAmount}
        />
        <Field
          label="Interest Rate (p.a.)"
          value={`${rate.toFixed(2)}%`}
          min={6}
          max={24}
          step={0.05}
          current={rate}
          onChange={setRate}
        />
        <Field
          label="Tenure"
          value={`${years} ${years === 1 ? "year" : "years"}`}
          min={1}
          max={30}
          step={1}
          current={years}
          onChange={setYears}
        />
      </div>

      <div className="rounded-2xl bg-navy p-6 text-primary-foreground">
        <p className="text-sm text-primary-foreground/70">Your monthly EMI</p>
        <p className="mt-1 font-display text-4xl font-bold text-gold">{inr(emi)}</p>

        <dl className="mt-6 space-y-3 text-sm">
          <Row label="Principal amount" value={inr(amount)} />
          <Row label="Total interest" value={inr(interest)} />
          <Row label="Total payable" value={inr(total)} />
        </dl>

        <div className="mt-6">
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-primary-foreground/15">
            <div className="h-full bg-gold" style={{ width: `${principalShare}%` }} />
          </div>
          <div className="mt-2 flex justify-between text-xs text-primary-foreground/70">
            <span>Principal {principalShare.toFixed(0)}%</span>
            <span>Interest {(100 - principalShare).toFixed(0)}%</span>
          </div>
        </div>

        <Link to="/contact" className="btn-base btn-gold mt-7 w-full">
          Get My Best Offer
        </Link>
        <p className="mt-3 text-center text-xs text-primary-foreground/60">
          Indicative figures only. Final EMI depends on lender terms.
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step,
  current,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  current: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        <span className="rounded-lg bg-surface px-3 py-1 font-display text-sm font-bold text-navy">
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-surface accent-gold"
        style={{ accentColor: "var(--gold)" }}
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-primary-foreground/10 pb-2">
      <dt className="text-primary-foreground/70">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}

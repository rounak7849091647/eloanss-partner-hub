import { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { loans } from "@/data/loans";
import { insurances } from "@/data/insurance";

type Props = {
  title?: string;
  subtitle?: string;
  defaultInterest?: string;
  compact?: boolean;
};

const interests = [
  ...loans.map((l) => l.name),
  ...insurances.map((i) => i.name),
  "Share Market / Investments",
  "Global Distributor Enquiry",
];

const steps = ["Requirement", "Your details", "Confirm"];

export function EnquiryForm({
  title = "Start your application",
  subtitle = "Takes under 2 minutes. An advisor calls you back the same working day.",
  defaultInterest,
  compact = false,
}: Props) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    interest: defaultInterest ?? interests[0],
    amount: "",
    city: "",
    employment: "Salaried",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const canNext =
    step === 0 ? form.interest && form.city.trim().length > 1 : step === 1 ? form.name.trim().length > 1 && /^[0-9+\s-]{10,15}$/.test(form.phone) : true;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    toast.success("Enquiry received", {
      description: "Our advisor will contact you on the number provided.",
    });
  };

  if (done) {
    return (
      <div className="card-soft p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-teal/30 text-navy">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-navy">Thank you, {form.name || "friend"}!</h3>
        <p className="mt-2 text-muted-foreground">
          Your enquiry for <strong className="text-navy">{form.interest}</strong> has been received. An ELOANSS
          advisor will call you shortly on {form.phone}.
        </p>
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setStep(0);
          }}
          className="btn-base btn-outline-navy mt-6"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`card-soft ${compact ? "p-6" : "p-6 sm:p-8"}`}>
      <h3 className="font-display text-2xl font-bold text-navy">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>

      <ol className="mt-6 flex items-center gap-2">
        {steps.map((s, i) => (
          <li key={s} className="flex flex-1 items-center gap-2">
            <span
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                i <= step ? "bg-gold text-navy" : "bg-surface text-muted-foreground"
              }`}
            >
              {i + 1}
            </span>
            <span className={`hidden text-xs font-semibold sm:block ${i <= step ? "text-navy" : "text-muted-foreground"}`}>
              {s}
            </span>
            {i < steps.length - 1 && <span className="h-px flex-1 bg-border" />}
          </li>
        ))}
      </ol>

      <div className="mt-6 space-y-4">
        {step === 0 && (
          <>
            <Select label="I am interested in" value={form.interest} onChange={set("interest")} options={interests} />
            <Input label="Required amount / cover (optional)" value={form.amount} onChange={set("amount")} placeholder="e.g. ₹15,00,000" />
            <Input label="City" value={form.city} onChange={set("city")} placeholder="e.g. Hyderabad" required />
            <Select
              label="Employment type"
              value={form.employment}
              onChange={set("employment")}
              options={["Salaried", "Self-employed / Business", "Professional", "Other"]}
            />
          </>
        )}
        {step === 1 && (
          <>
            <Input label="Full name" value={form.name} onChange={set("name")} placeholder="Your name" required />
            <Input label="Mobile number" value={form.phone} onChange={set("phone")} placeholder="10-digit mobile" required />
            <Input label="Email (optional)" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" />
            <div>
              <label className="text-sm font-medium text-navy">Anything we should know?</label>
              <textarea
                value={form.message}
                onChange={set("message")}
                rows={3}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                placeholder="Tell us briefly about your requirement"
              />
            </div>
          </>
        )}
        {step === 2 && (
          <dl className="divide-y divide-border rounded-xl bg-surface p-4 text-sm">
            {[
              ["Interest", form.interest],
              ["Amount", form.amount || "Not specified"],
              ["City", form.city],
              ["Employment", form.employment],
              ["Name", form.name],
              ["Mobile", form.phone],
              ["Email", form.email || "Not provided"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="text-right font-semibold text-navy">{v}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {step > 0 && (
          <button type="button" onClick={() => setStep(step - 1)} className="btn-base btn-outline-navy">
            <ChevronLeft className="h-4 w-4" /> Back
          </button>
        )}
        {step < 2 ? (
          <button
            type="button"
            disabled={!canNext}
            onClick={() => setStep(step + 1)}
            className="btn-base btn-gold flex-1 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continue <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button type="submit" className="btn-base btn-gold flex-1">
            Submit Enquiry
          </button>
        )}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        By submitting, you allow ELOANSS to contact you about your enquiry. We never sell your data.
      </p>
    </form>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-navy">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="text-sm font-medium text-navy">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

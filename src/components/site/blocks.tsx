import { Link } from "@tanstack/react-router";
import { Check, Star } from "lucide-react";
import { partnerBanks, site, testimonials } from "@/data/site";

export function SectionHead({
  eyebrow,
  title,
  text,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface py-8">
      <div className="container-page">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { big: "Licensed", small: "Loan broker & insurance facilitator" },
            { big: "12,000+", small: "Happy customers across India" },
            { big: "4.8 / 5", small: "Average customer rating" },
          ].map((s, i) => (
            <div key={s.big} className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/20 text-gold-dark">
                {i === 2 ? <Star className="h-5 w-5" /> : <Check className="h-5 w-5" />}
              </div>
              <div className="min-w-0">
                <p className="font-display text-lg font-bold text-navy">{s.big}</p>
                <p className="text-sm text-muted-foreground">{s.small}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Offers compared from leading banks & NBFCs
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {partnerBanks.map((b) => (
              <span
                key={b}
                className="rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold text-navy/70"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHead
          eyebrow="Customer stories"
          title="Trusted by families and businesses"
          text="Real experiences from customers who financed a home, grew a business or protected their family with ELOANSS."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-soft card-hover p-6">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-navy/85">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy font-display font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-navy">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">
                    {t.role} · {t.city}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <iframe
      title="ELOANSS office location"
      src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
      loading="lazy"
      className={`h-full min-h-[320px] w-full rounded-2xl border border-border ${className}`}
    />
  );
}

export function CtaBanner({
  title = "Ready to get the best offer on your loan or insurance?",
  text = "Talk to an ELOANSS advisor today. No obligation, no hidden charges — just clear guidance.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section-pad bg-navy">
      <div className="container-page text-center">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/75">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn-base btn-gold">
            Apply Now
          </Link>
          <a href={site.phoneHref} className="btn-base btn-outline-light">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
      {items.map((f) => (
        <details key={f.q} className="group p-5 open:bg-surface">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-navy">
            {f.q}
            <span className="text-gold-dark transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { loans } from "@/data/loans";
import { insurances } from "@/data/insurance";
import { site } from "@/data/site";

const mainLinks = [
  { to: "/investments", label: "Share Markets" },
  { to: "/about", label: "About Us" },
  { to: "/partner", label: "Partner With Us" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/blog", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<"loans" | "insurance" | null>(null);
  const [mobileGroup, setMobileGroup] = useState<"loans" | "insurance" | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="container-page grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:flex lg:h-[72px] lg:justify-between">
        <Link to="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-md bg-navy font-display text-xl font-bold italic text-gold">
            E
          </span>
          <span className="min-w-0">
            <span className="block font-display text-lg font-bold leading-none text-navy">
              ELOANSS
            </span>
            <span className="hidden text-[11px] font-medium text-muted-foreground sm:block">
              Finance Today. A Better Tomorrow.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink to="/" label="Home" />
          <MegaTrigger
            label="Loans"
            active={dropdown === "loans"}
            onToggle={() => setDropdown(dropdown === "loans" ? null : "loans")}
            onClose={() => setDropdown(null)}
            items={loans.map((l) => ({ to: "/loans/$slug", params: { slug: l.slug }, label: l.name }))}
            allHref="/loans"
            allLabel="View all loan products"
          />
          <MegaTrigger
            label="Insurance"
            active={dropdown === "insurance"}
            onToggle={() => setDropdown(dropdown === "insurance" ? null : "insurance")}
            onClose={() => setDropdown(null)}
            items={insurances.map((i) => ({ to: "/insurance/$slug", params: { slug: i.slug }, label: i.name }))}
            allHref="/insurance"
            allLabel="View all insurance plans"
          />
          {mainLinks.map((l) => (
            <NavLink key={l.to} to={l.to} label={l.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-navy xl:inline-flex"
          >
            <Phone className="h-4 w-4 text-gold-dark" />
            {site.phone}
          </a>
          <Link to="/contact" className="btn-base btn-gold hidden px-5 py-2.5 text-sm sm:inline-flex">
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border text-navy lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border bg-background lg:hidden">
          <div className="container-page space-y-1 py-4">
            <MobileLink to="/" label="Home" onClick={() => setOpen(false)} />
            <MobileGroup
              label="Loans"
              open={mobileGroup === "loans"}
              onToggle={() => setMobileGroup(mobileGroup === "loans" ? null : "loans")}
            >
              <MobileLink to="/loans" label="All Loans" onClick={() => setOpen(false)} />
              <MobileLink to="/loans/compare" label="Compare Loans" onClick={() => setOpen(false)} />
              {loans.map((l) => (
                <MobileLink
                  key={l.slug}
                  to="/loans/$slug"
                  params={{ slug: l.slug }}
                  label={l.name}
                  onClick={() => setOpen(false)}
                />
              ))}
            </MobileGroup>
            <MobileGroup
              label="Insurance"
              open={mobileGroup === "insurance"}
              onToggle={() => setMobileGroup(mobileGroup === "insurance" ? null : "insurance")}
            >
              <MobileLink to="/insurance" label="All Insurance" onClick={() => setOpen(false)} />
              {insurances.map((i) => (
                <MobileLink
                  key={i.slug}
                  to="/insurance/$slug"
                  params={{ slug: i.slug }}
                  label={i.name}
                  onClick={() => setOpen(false)}
                />
              ))}
            </MobileGroup>
            {mainLinks.map((l) => (
              <MobileLink key={l.to} to={l.to} label={l.label} onClick={() => setOpen(false)} />
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-base btn-gold mt-3 w-full"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium text-navy/80 transition-colors hover:bg-surface hover:text-navy xl:text-sm"
      activeProps={{ className: "whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-semibold text-navy bg-surface xl:text-sm" }}
      activeOptions={{ exact: to === "/" }}
    >
      {label}
    </Link>
  );
}

type MegaItem = { to: string; params: { slug: string }; label: string };

function MegaTrigger({
  label,
  items,
  active,
  onToggle,
  onClose,
  allHref,
  allLabel,
}: {
  label: string;
  items: MegaItem[];
  active: boolean;
  onToggle: () => void;
  onClose: () => void;
  allHref: string;
  allLabel: string;
}) {
  return (
    <div className="relative" onMouseLeave={onClose}>
      <button
        type="button"
        onClick={onToggle}
        onMouseEnter={() => !active && onToggle()}
        className="inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium xl:text-sm text-navy/80 transition-colors hover:bg-surface hover:text-navy"
      >
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>
      {active && (
        <div className="animate-in fade-in slide-in-from-top-1 absolute left-0 top-full w-[34rem] pt-2">
          <div className="card-soft grid grid-cols-2 gap-1 p-3">
            {items.map((item) => (
              <Link
                key={item.params.slug}
                to={item.to}
                params={item.params}
                onClick={onClose}
                className="rounded-lg px-3 py-2 text-sm text-navy/85 transition-colors hover:bg-surface hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={allHref}
              onClick={onClose}
              className="col-span-2 mt-1 rounded-lg bg-surface px-3 py-2 text-sm font-semibold text-gold-dark"
            >
              {allLabel} →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileGroup({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-navy"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="ml-3 border-l border-border pl-2">{children}</div>}
    </div>
  );
}

function MobileLink({
  to,
  params,
  label,
  onClick,
}: {
  to: string;
  params?: { slug: string };
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      {...(params ? { params } : {})}
      onClick={onClick}
      className="block rounded-lg px-3 py-2.5 text-[15px] text-navy/85"
    >
      {label}
    </Link>
  );
}

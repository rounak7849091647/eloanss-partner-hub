import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { loans } from "@/data/loans";
import { insurances } from "@/data/insurance";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold font-display text-lg font-bold text-navy">
              e
            </span>
            <span className="font-display text-xl font-bold">ELOANSS</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">{site.tagline}</p>
          <p className="mt-4 text-sm text-primary-foreground/70">
            We are a loan and insurance facilitator. Final approval, interest rate and terms rest with the
            respective bank, NBFC or insurer.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="https://eloanss.com"
                aria-label="Social profile"
                className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gold">Loans</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {loans.slice(0, 8).map((l) => (
              <li key={l.slug}>
                <Link
                  to="/loans/$slug"
                  params={{ slug: l.slug }}
                  className="text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  {l.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/loans" className="font-semibold text-gold">
                All loan products →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gold">Insurance & More</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {insurances.map((i) => (
              <li key={i.slug}>
                <Link
                  to="/insurance/$slug"
                  params={{ slug: i.slug }}
                  className="text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  {i.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/investments" className="text-primary-foreground/75 hover:text-gold">
                Share Markets & Investments
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gold">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/partner", label: "Global Distributor" },
              { to: "/how-it-works", label: "How It Works" },
              { to: "/blog", label: "Blog & Resources" },
              { to: "/contact", label: "Contact / Apply" },
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms & Conditions" },
              { to: "/disclaimer", label: "Disclaimer" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/75 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ELOANSS. All rights reserved.</p>
          <p>eloanss.com · {site.hours}</p>
        </div>
      </div>
    </footer>
  );
}

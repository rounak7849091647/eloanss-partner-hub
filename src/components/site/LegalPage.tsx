import { Link } from "@tanstack/react-router";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { h: string; p: string[] }[];
}) {
  return (
    <>
      <section className="bg-navy py-14">
        <div className="container-page">
          <nav className="text-xs text-primary-foreground/60">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>{" "}
            / <span className="text-gold">{title}</span>
          </nav>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary-foreground">{title}</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">{intro}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-xl font-bold text-navy">{s.h}</h2>
              <div className="mt-3 space-y-3">
                {s.p.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <p className="border-t border-border pt-6 text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
          </p>
        </div>
      </section>
    </>
  );
}

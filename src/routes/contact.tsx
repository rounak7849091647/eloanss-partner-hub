import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CtaBanner, MapEmbed, SectionHead } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ELOANSS — Apply Now or Talk to an Advisor" },
      {
        name: "description",
        content:
          "Call, WhatsApp, email or visit ELOANSS. Submit a loan or insurance enquiry and an advisor will get back to you the same working day.",
      },
      { property: "og:title", content: "Contact ELOANSS" },
      { property: "og:description", content: "Office address, phone, WhatsApp, working hours and enquiry form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-navy py-16">
        <div className="container-page">
          <span className="eyebrow text-gold">Contact & apply</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
            Let's find your best offer today
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">
            Call us, message us on WhatsApp or send your requirement below. Every enquiry gets a response within
            one working day.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="card-soft space-y-5 p-7">
              <h2 className="font-display text-2xl font-bold text-navy">Head office</h2>
              <p className="flex gap-3 text-sm text-navy/85">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                {site.address}
              </p>
              <p className="flex gap-3 text-sm text-navy/85">
                <Phone className="h-5 w-5 shrink-0 text-gold-dark" />
                <a href={site.phoneHref} className="font-semibold">
                  {site.phone}
                </a>
              </p>
              <p className="flex gap-3 text-sm text-navy/85">
                <Mail className="h-5 w-5 shrink-0 text-gold-dark" />
                <a href={`mailto:${site.email}`} className="font-semibold">
                  {site.email}
                </a>
              </p>
              <p className="flex gap-3 text-sm text-navy/85">
                <MessageCircle className="h-5 w-5 shrink-0 text-gold-dark" />
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="font-semibold">
                  Chat on WhatsApp
                </a>
              </p>
              <p className="flex gap-3 text-sm text-navy/85">
                <Clock className="h-5 w-5 shrink-0 text-gold-dark" />
                {site.hours}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={site.phoneHref} className="btn-base btn-gold">
                  Call Now
                </a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-base btn-outline-navy">
                  WhatsApp Us
                </a>
              </div>
            </div>
            <MapEmbed />
          </div>
          <div className="space-y-6">
            <EnquiryForm title="Loan / insurance enquiry" />
            <div className="card-soft p-7">
              <h2 className="font-display text-xl font-bold text-navy">Prefer email?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Write to {site.email} with your requirement, city and preferred call time. Please do not send
                sensitive documents by email — your advisor will share a secure upload link.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-page">
          <SectionHead
            eyebrow="Note"
            title="Details to confirm"
            text="The phone number, email and address shown here are placeholders. Send us your real contact details and office address and we'll update every page."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

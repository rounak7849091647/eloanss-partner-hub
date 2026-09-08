import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function FloatingActions() {
  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with ELOANSS on WhatsApp"
        className="fixed bottom-20 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-teal text-navy shadow-lift transition-transform hover:scale-105 sm:bottom-6"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
        <Link to="/contact" className="btn-base btn-gold w-full">
          Apply Now
        </Link>
      </div>
    </>
  );
}

import { Phone } from "lucide-react";

export function UrgencyBanner() {
  return (
    <section id="urgence" className="bg-urgent text-white py-4 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center md:text-left">
          <span className="w-3 h-3 bg-white rounded-full animate-pulse-dot shrink-0" />
          <span className="font-bold uppercase tracking-wide text-sm md:text-base">
            Intervention d'urgence — Disponible maintenant
          </span>
        </div>
        <a
          href="tel:0100000000"
          className="inline-flex items-center gap-2 bg-white text-urgent font-bold px-5 py-2.5 rounded-lg hover:bg-white/90 transition whitespace-nowrap"
        >
          <Phone className="w-4 h-4" />
          Appeler 01 XX XX XX XX →
        </a>
      </div>
    </section>
  );
}

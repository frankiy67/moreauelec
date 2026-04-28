import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "En combien de temps pouvez-vous intervenir ?",
    a: "Pour une urgence, je me déplace sous 2h sur Toulouse et 30km. Pour une installation planifiée, généralement le jour même ou le lendemain.",
  },
  {
    q: "Comment se passe concrètement une intervention ?",
    a: "Vous m'appelez, on parle 5 minutes de votre problème. Je vous annonce une fourchette. Je viens, je confirme sur place, vous validez. Je réalise, je range. Facture claire.",
  },
  {
    q: "Faites-vous un devis avant d'intervenir ?",
    a: "Toujours. Pas d'intervention sans que vous ayez validé le prix. Pas de mauvaise surprise.",
  },
  {
    q: "Dans quelles zones intervenez-vous ?",
    a: "Toulouse et 30km autour : Blagnac, Colomiers, Tournefeuille, Muret, Ramonville, Castanet, L'Union, Labège, Balma, Saint-Orens, Portet-sur-Garonne.",
  },
  {
    q: "Êtes-vous assuré ?",
    a: "Oui. Assurance décennale en cours de validité. Je peux vous fournir l'attestation sur demande.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item py-4">
      <button
        className="faq-trigger w-full flex items-center justify-between gap-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1A1A1A] text-sm pr-4">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#1E3A5F] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-250 ${open ? "max-h-48 mt-3" : "max-h-0"}`}
      >
        <p className="text-[#666666] leading-relaxed text-sm pr-6">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-10 fade-on-scroll">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mb-3">
            Questions fréquentes
          </h2>
          <p className="text-[#555555]">
            Ce que mes clients me demandent le plus souvent.
          </p>
        </div>

        <div className="bg-white border border-[#E0E6EF] rounded-lg px-6 md:px-8 fade-on-scroll">
          <div className="border-t border-[#E0E6EF] first:border-t-0">
            {faqs.map((f, i) => (
              <FaqItem key={i} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

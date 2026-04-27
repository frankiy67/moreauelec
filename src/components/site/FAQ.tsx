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
    <div className="faq-item py-5">
      <button
        className="faq-trigger w-full flex items-center justify-between gap-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-bold text-[#0A0F1E] text-base pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#666666] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 mt-3" : "max-h-0"}`}
      >
        <p className="text-[#666666] leading-relaxed text-sm pr-8">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-14 fade-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0F1E] mb-4">
            Questions fréquentes
          </h2>
          <p className="text-[#666666] text-lg">
            Ce que mes clients me demandent le plus souvent.
          </p>
        </div>

        <div className="fade-on-scroll border-t border-[#E8E8E8]">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

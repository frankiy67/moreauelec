import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white pt-14 pb-6">
      <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-10 mb-10">
        {/* Col 1 */}
        <div>
          <a href="#top" className="inline-block font-bold text-base mb-4">
            <span className="text-[#E8541A]">KB</span>
            <span className="text-white"> Électricité</span>
          </a>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Artisan électricien à Toulouse depuis 12 ans.
          </p>
          <p className="text-white/35 text-xs">
            SIRET : 481 293 107 00034
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-bold text-sm text-white uppercase tracking-wide mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-white/65">
            {[
              { label: "Services", href: "#services" },
              { label: "Réalisations", href: "#realisations" },
              { label: "Comment ça marche", href: "#process" },
              { label: "Contact", href: "#contact" },
              { label: "Mentions légales", href: "#" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-[#E8541A] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-bold text-sm text-white uppercase tracking-wide mb-4">
            Contact
          </h4>
          <ul className="space-y-3.5 text-sm text-white/65">
            <li>
              <a
                href="tel:0612345678"
                className="flex items-center gap-2.5 hover:text-[#E8541A] transition-colors font-semibold text-white"
              >
                <Phone className="w-4 h-4 shrink-0 text-[#E8541A]" strokeWidth={2} />
                06 12 34 56 78
              </a>
            </li>
            <li>
              <a
                href="mailto:karim.kbelec@gmail.com"
                className="flex items-center gap-2.5 hover:text-[#E8541A] transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#E8541A]" strokeWidth={2} />
                karim.kbelec@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 shrink-0 text-[#E8541A] mt-0.5" strokeWidth={2} />
              <span>Toulouse et 30km autour</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 shrink-0 text-[#E8541A]" strokeWidth={2} />
              <span>Lun–Sam 8h–19h</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 border-t border-white/10 pt-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/35">
        <span>© 2026 KB Électricité — Tous droits réservés</span>
        <span>
          Site réalisé par{" "}
          <a href="tel:0756950273" className="hover:text-[#E8541A] transition-colors">
            François Vallat — 07 56 95 02 73
          </a>
        </span>
      </div>
    </footer>
  );
}

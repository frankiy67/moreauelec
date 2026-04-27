export function Footer() {
  return (
    <footer className="bg-[#0A0F1E] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-10 mb-10">
        {/* Col 1 */}
        <div>
          <a href="#top" className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#FFD700]">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                <path d="M13 2L4.5 13H11L10 22L20.5 11H14L13 2Z" fill="#0A0F1E" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-bold text-white text-base">KB Électricité</span>
          </a>
          <p className="text-white/70 text-sm mb-2 leading-relaxed">
            Artisan électricien à Toulouse depuis 12 ans.
          </p>
          <p className="text-white/40 text-xs">
            SIRET : 481 293 107 00034
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-bold text-sm text-[#FFD700] uppercase tracking-wider mb-4">
            Liens rapides
          </h4>
          <ul className="space-y-2 text-sm text-white/75">
            {[
              { label: "Services", href: "#services" },
              { label: "Réalisations", href: "#realisations" },
              { label: "Comment ça marche", href: "#process" },
              { label: "Contact", href: "#contact" },
              { label: "Mentions légales", href: "#" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-[#FFD700] transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-bold text-sm text-[#FFD700] uppercase tracking-wider mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li>
              <a href="tel:0612345678" className="hover:text-[#FFD700] transition font-semibold text-white">
                📞 06 12 34 56 78
              </a>
            </li>
            <li>
              <a href="mailto:karim.kbelec@gmail.com" className="hover:text-[#FFD700] transition break-all">
                ✉️ karim.kbelec@gmail.com
              </a>
            </li>
            <li>📍 Toulouse et 30km autour</li>
            <li>🕐 Lun-Sam 8h-19h</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
        <span>© 2026 KB Électricité — Tous droits réservés</span>
        <span>
          Site réalisé par{" "}
          <a href="tel:0756950273" className="hover:text-[#FFD700] transition">
            François Vallat — 07 56 95 02 73
          </a>
        </span>
      </div>
    </footer>
  );
}

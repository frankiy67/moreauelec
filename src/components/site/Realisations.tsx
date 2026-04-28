const cards = [
  {
    src: "/images/tableau-avant-apres.jpg",
    alt: "Tableau électrique avant et après mise aux normes, Rangueil Toulouse",
    label: "Mise aux normes — Rangueil, Toulouse",
    desc: "Tableau des années 80 remplacé en conformité NF C 15-100. Le client voulait vendre son appartement — le diagnostic bloquait la transaction.",
  },
  {
    src: "/images/tableau-3-etapes.jpg",
    alt: "Réfection complète d'un tableau électrique en trois étapes, Blagnac",
    label: "Réfection complète — Blagnac",
    desc: "Installation entière reprise, câblage et tableau neuf. Avant : fils nus, disjoncteurs hors normes. Après : installation propre et sécurisée.",
  },
  {
    src: "/images/prise-installation.jpg",
    alt: "Installation d'une prise électrique encastrée, Colomiers",
    label: "Installation prises — Colomiers",
    desc: "Remplacement de toutes les prises d'un appartement rénové. Boîtes encastrées, connexions soignées, finition propre.",
  },
  {
    src: "/images/diagnostic-tableau.jpg",
    alt: "Diagnostic électrique au multimètre sur tableau industriel, Tournefeuille",
    label: "Diagnostic complet — Tournefeuille",
    desc: "Bilan complet avant vente. Mesures au multimètre, contrôle de chaque circuit, rapport remis au notaire.",
  },
];

export function Realisations() {
  return (
    <section id="realisations" className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-3 fade-on-scroll">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mb-3">
            Quelques chantiers récents
          </h2>
        </div>
        <p className="text-center text-[#666666] text-sm mb-10 fade-on-scroll">
          Des vraies photos de mes travaux, pas des images de stock.
        </p>

        {/* Mobile: horizontal scroll | Desktop: 2×2 grid */}
        <div className="flex md:grid md:grid-cols-2 gap-5 overflow-x-auto md:overflow-visible pb-3 md:pb-0 snap-x md:snap-none">
          {cards.map((c, i) => (
            <div
              key={i}
              className="realisation-card bg-white border border-[#E2E2E2] rounded-lg overflow-hidden fade-on-scroll shrink-0 w-72 md:w-auto snap-start"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#F5F5F5]">
                <img
                  src={c.src}
                  alt={c.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="text-[#FF6B35] font-bold text-xs uppercase tracking-wide mb-2">
                  {c.label}
                </div>
                <p className="text-[#555555] text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

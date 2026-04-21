const offers = [
  { title: "Tableau électrique", price: "dès 79€/mois", desc: "Financement disponible. Appelez pour détails.", cta: "Profiter de l'offre", highlight: true },
  { title: "Devis tableau", price: "GRATUIT", desc: "Évaluation sur place sans engagement.", cta: "Prendre RDV" },
  { title: "Diagnostic électrique", price: "49€", desc: "Inclut 2 prises ou 1 luminaire.", cta: "Réserver" },
  { title: "Vérification panne", price: "19€", desc: "Identification + recommandations.", cta: "Réserver" },
];

export function Offers() {
  return (
    <section id="offres" className="bg-light-bg py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14 fade-on-scroll">
          <div className="text-accent font-bold text-sm tracking-widest mb-3">OFFRES SPÉCIALES</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Nos offres du moment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((o, i) => (
            <div
              key={i}
              className={`relative bg-card rounded-xl p-6 border-2 fade-on-scroll service-card ${
                o.highlight ? "border-accent" : "border-border"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="absolute -top-3 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                OFFRE
              </span>
              <h3 className="text-primary font-bold text-lg mb-1">{o.title}</h3>
              <div className="text-3xl font-extrabold text-primary mb-3">{o.price}</div>
              <p className="text-muted-foreground text-sm mb-5 min-h-[40px]">{o.desc}</p>
              <a
                href="#contact"
                className="block text-center bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition"
              >
                {o.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

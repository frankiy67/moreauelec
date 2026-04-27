const left = [
  {
    title: "Dépannage urgence",
    desc: "Panne, disjoncteur qui saute, odeur de brûlé. J'interviens sous 2h sur Toulouse et les communes alentours.",
  },
  {
    title: "Tableau électrique",
    desc: "Remplacement, mise en conformité NF C 15-100, diagnostic avant vente ou location.",
  },
  {
    title: "Mise aux normes",
    desc: "Logements anciens, conformité totale, rapport officiel. Je vous accompagne du diagnostic jusqu'au certificat.",
  },
  {
    title: "Diagnostic électrique",
    desc: "État des lieux complet de votre installation. Utile avant un achat immobilier ou une mise en location.",
  },
];

const right = [
  {
    title: "Installation & rénovation",
    desc: "Câblage, prises, interrupteurs, éclairage. Devis sur place, travaux propres et soignés.",
  },
  {
    title: "Éclairage LED",
    desc: "Spots encastrés, rails, variateurs, éclairage extérieur. Je vous conseille sur les meilleures options.",
  },
  {
    title: "Borne de recharge IRVE",
    desc: "Installation au domicile, circuit dédié, mise en service complète. Compatible toutes marques de véhicules.",
  },
  {
    title: "Interphonie & sécurité",
    desc: "Digicode, sonnette connectée, visiophone. Installation et dépannage de toutes marques.",
  },
];

function ServiceItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border-l-2 border-[#FFD700] pl-5 py-1 fade-on-scroll">
      <h3 className="font-bold text-[#0A0F1E] text-base mb-1">{title}</h3>
      <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 fade-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0F1E] mb-4">
            Mes prestations à Toulouse
          </h2>
          <p className="text-[#666666] text-lg">
            Tout ce qu'un électricien indépendant fait mieux qu'un grand réseau.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-8">
            {left.map((s, i) => (
              <ServiceItem key={i} {...s} />
            ))}
          </div>
          <div className="space-y-8">
            {right.map((s, i) => (
              <ServiceItem key={i} {...s} />
            ))}
          </div>
        </div>

        <div className="text-center mt-14 fade-on-scroll">
          <p className="text-[#666666] mb-4">Vous ne trouvez pas ce que vous cherchez ?</p>
          <a
            href="#contact"
            className="inline-flex items-center bg-[#0A0F1E] text-white font-bold px-6 py-3.5 rounded-lg hover:bg-[#0A0F1E]/90 transition"
          >
            Décrivez-moi votre besoin →
          </a>
        </div>
      </div>
    </section>
  );
}

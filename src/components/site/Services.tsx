const left = [
  { title: "Dépannage urgence", desc: "Panne, disjoncteur qui saute, odeur de brûlé. J'interviens sous 2h sur Toulouse et les communes alentours." },
  { title: "Tableau électrique", desc: "Remplacement, mise en conformité NF C 15-100, diagnostic avant vente ou location." },
  { title: "Mise aux normes", desc: "Logements anciens, conformité totale, rapport officiel. Je vous accompagne du diagnostic jusqu'au certificat." },
  { title: "Diagnostic électrique", desc: "État des lieux complet de votre installation. Utile avant un achat immobilier ou une mise en location." },
];

const right = [
  { title: "Installation & rénovation", desc: "Câblage, prises, interrupteurs, éclairage. Devis sur place, travaux propres et soignés." },
  { title: "Éclairage LED", desc: "Spots encastrés, rails, variateurs, éclairage extérieur. Je vous conseille sur les meilleures options." },
  { title: "Borne de recharge IRVE", desc: "Installation au domicile, circuit dédié, mise en service complète. Compatible toutes marques de véhicules." },
  { title: "Interphonie & sécurité", desc: "Digicode, sonnette connectée, visiophone. Installation et dépannage de toutes marques." },
];

function ServiceItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border-l-2 border-[#E63946] pl-5 py-0.5">
      <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">{title}</h3>
      <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-[#F4F7FB] py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mb-3">Mes prestations à Toulouse</h2>
          <p className="text-[#555555]">Tout ce qu'un électricien indépendant fait mieux qu'un grand réseau.</p>
        </div>
        <div className="bg-white border border-[#E0E6EF] rounded-lg p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-7">
            <div className="space-y-7">{left.map((s, i) => <ServiceItem key={i} {...s} />)}</div>
            <div className="space-y-7">{right.map((s, i) => <ServiceItem key={i} {...s} />)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

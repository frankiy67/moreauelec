import {
  Zap,
  PlugZap,
  Lightbulb,
  Car,
  Wrench,
  Home,
  ClipboardCheck,
  Bell,
  CloudLightning,
  Search,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Zap, title: "Dépannage urgence", desc: "Panne, disjoncteur, odeur de brûlé. 24h/24, intervention en 60-90 min.", color: "bg-red-100 text-red-600" },
  { icon: PlugZap, title: "Tableau électrique", desc: "Remplacement NF C 15-100. Financement dès 79€/mois.", color: "bg-blue-100 text-blue-600" },
  { icon: Lightbulb, title: "Éclairage", desc: "Spots, luminaires, LED, rails. Câblage + installation même jour.", color: "bg-yellow-100 text-yellow-600" },
  { icon: Car, title: "Borne recharge VE", desc: "Installation Level 2 domicile. Circuit dédié, mise en service complète.", color: "bg-green-100 text-green-600" },
  { icon: Wrench, title: "Prises & Interrupteurs", desc: "Prises, USB, GFCI, remplacement. Finition assortie à votre décor.", color: "bg-gray-100 text-gray-600" },
  { icon: Home, title: "Rénovation électrique", desc: "Mise aux normes logements anciens. Minimum de perturbation.", color: "bg-orange-100 text-orange-600" },
  { icon: ClipboardCheck, title: "Diagnostic NF C 15-100", desc: "Pour vente ou location. Rapport officiel certifié.", color: "bg-purple-100 text-purple-600" },
  { icon: Bell, title: "Interphonie & Digicode", desc: "Urmet, Noralsy, Aiphone, Intratone. Installation et dépannage.", color: "bg-teal-100 text-teal-600" },
  { icon: CloudLightning, title: "Protection surtension", desc: "Parafoudre tableau principal. Protection totale équipements.", color: "bg-indigo-100 text-indigo-600" },
  { icon: Search, title: "Inspection sécurité", desc: "Audit complet + rapport écrit. Idéal avant achat immobilier.", color: "bg-rose-100 text-rose-600" },
];

export function Services() {
  return (
    <section id="services" className="bg-light-bg py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 fade-on-scroll">
          <div className="text-accent font-bold text-sm tracking-widest mb-3">
            NOS PRESTATIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Services électriques pour votre domicile
          </h2>
          <p className="text-muted-foreground text-lg">
            On diagnostique, on explique, on chiffre, et on attend votre accord avant de commencer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card bg-card rounded-xl p-7 shadow-sm fade-on-scroll"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${s.color}`}>
                <s.icon className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-xl text-primary mb-2">{s.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-accent-foreground font-semibold text-sm hover:gap-2 transition-all" style={{ color: "#B8860B" }}>
                Voir détails <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}

          <div className="service-card bg-primary text-white rounded-xl p-7 shadow-sm fade-on-scroll flex flex-col justify-center items-start">
            <h3 className="font-bold text-xl mb-3">Vous ne trouvez pas votre service ?</h3>
            <p className="text-white/70 mb-5">
              Notre équipe traite tous les besoins électriques résidentiels.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-accent font-bold">
              Contactez-nous <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

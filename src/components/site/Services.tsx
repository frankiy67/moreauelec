import { AlertTriangle, Zap, Wrench, Plug } from "lucide-react";

const services = [
  {
    icon: AlertTriangle,
    title: "Dépannage urgence",
    body:
      "Panne, disjoncteur qui saute, odeur de brûlé. J'interviens dans les 2 h sur [VILLE] dès que je peux libérer mon planning.",
  },
  {
    icon: Zap,
    title: "Tableau électrique",
    body:
      "Remplacement, mise aux normes NF C 15-100, diagnostic avant vente ou location. Je vous explique ce qui doit vraiment être changé.",
  },
  {
    icon: Wrench,
    title: "Installation & rénovation",
    body:
      "Prises, éclairage, câblage, petits chantiers. Devis gratuit sur place — souvent en moins d'une demi-heure.",
  },
  {
    icon: Plug,
    title: "Borne de recharge IRVE",
    body:
      "Installation à domicile, circuit dédié, mise en service complète. Habilitation IRVE à jour.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-14 fade-on-scroll">
          <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">
            Ce que je fais
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
            4 choses, <span className="marker">bien faites</span>.
          </h2>
          <p className="text-lg text-foreground/70">
            Je préfère faire un nombre limité d'interventions et les faire
            correctement, plutôt que tout promettre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`fade-on-scroll bg-paper border border-border p-7 md:p-8 rounded-lg ${
                i % 2 === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <s.icon className="w-7 h-7 text-primary mb-5" strokeWidth={1.6} />
              <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
              <p className="text-foreground/75 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-foreground/60 text-sm fade-on-scroll">
          Un doute ? Appelez-moi — si je ne peux pas faire,
          je vous oriente honnêtement vers quelqu'un qui peut.
        </p>
      </div>
    </section>
  );
}

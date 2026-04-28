<<<<<<< Updated upstream
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
=======
import { Zap, PlugZap, Lightbulb, Home, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Dépannage",
    desc: "Panne, disjoncteur qui saute, odeur suspecte. Je viens le jour même, souvent dans la journée. Vous m'expliquez ce qui se passe, j'arrive.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: PlugZap,
    title: "Tableau électrique",
    desc: "Remplacement ou mise aux normes NF C 15-100. Je fais un état des lieux avant, je vous explique ce qui est vraiment nécessaire — et ce qui ne l'est pas.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Éclairage & prises",
    desc: "Spots, luminaires, prises supplémentaires, interrupteurs. Du simple au complet. Finition soignée, câbles dissimulés.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Home,
    title: "Rénovation & mise aux normes",
    desc: "Logements anciens, installations à refaire. Je regarde, j'évalue honnêtement. Je vous dis ce qui est urgent — et ce qui peut attendre.",
    color: "bg-orange-100 text-orange-600",
>>>>>>> Stashed changes
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
    <div className="border-l-2 border-[#FF6B35] pl-5 py-0.5 fade-on-scroll">
      <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">{title}</h3>
      <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-[#F5F5F5] py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
<<<<<<< Updated upstream
        <div className="text-center max-w-2xl mx-auto mb-12 fade-on-scroll">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mb-3">
            Mes prestations à Toulouse
          </h2>
          <p className="text-[#555555]">
            Tout ce qu'un électricien indépendant fait mieux qu'un grand réseau.
          </p>
        </div>

        <div className="bg-white border border-[#E2E2E2] rounded-lg p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-7">
            <div className="space-y-7">
              {left.map((s, i) => <ServiceItem key={i} {...s} />)}
            </div>
            <div className="space-y-7">
              {right.map((s, i) => <ServiceItem key={i} {...s} />)}
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[#E2E2E2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#555555] text-sm">
              Vous ne trouvez pas ce que vous cherchez ?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-[#FF6B35] text-white font-bold px-5 py-2.5 rounded text-sm hover:bg-[#E55A20] transition-colors"
            >
              Décrivez-moi votre besoin →
=======
        <div className="max-w-2xl mb-14 fade-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Ce que je fais
          </h2>
          <p className="text-muted-foreground text-lg">
            Je ne fais pas tout. Je fais ça bien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card bg-card rounded-xl p-7 shadow-sm fade-on-scroll"
              style={{ transitionDelay: `${(i % 2) * 60}ms` }}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${s.color}`}>
                <s.icon className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-xl text-primary mb-2">{s.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 font-semibold text-sm hover:gap-2 transition-all"
                style={{ color: "#B8860B" }}
              >
                Me demander un devis <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 fade-on-scroll">
          <p className="text-muted-foreground">
            Autre chose ?{" "}
            <a
              href="#contact"
              className="text-primary font-bold underline decoration-accent decoration-2 underline-offset-4"
            >
              Appelez, on voit ensemble →
>>>>>>> Stashed changes
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

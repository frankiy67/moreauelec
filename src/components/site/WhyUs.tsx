import multimeterImg from "@/assets/electrician-multimeter.jpeg";

const blocks = [
  {
    label: "NOS PRINCIPES",
    text: "Pas de vente forcée. Si votre disjoncteur a juste besoin d'être réenclenché, on vous le dit. Si quelque chose nécessite attention, on vous explique clairement avec options.",
  },
  {
    label: "NOS VALEURS",
    text: "On traite votre domicile comme on voudrait qu'on traite le nôtre. Arriver à l'heure, protéger vos sols, finir proprement.",
  },
  {
    label: "NOTRE VISION",
    text: "Être l'électricien que les Français recommandent automatiquement — pas grâce à la pub, mais grâce au bouche-à-oreille. Plus de 4 000 avis 5 étoiles.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-primary text-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="fade-on-scroll">
          <div className="relative" style={{ transform: "rotate(-2deg)" }}>
            <img
              src={multimeterImg}
              alt="Électricien Moreau utilisant un multimètre sur un tableau électrique"
              className="w-full rounded-xl border-[3px] border-accent shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-5 py-3 rounded-lg font-bold shadow-xl">
              ⚡ Certifié Qualifelec RGE
            </div>
          </div>
        </div>

        <div className="space-y-8 fade-on-scroll">
          {blocks.map((b, i) => (
            <div key={i} className="border-l-4 border-accent pl-6 py-1">
              <div className="text-accent font-bold text-xs tracking-widest mb-2">
                {b.label}
              </div>
              <p className="text-white/90 leading-relaxed text-base md:text-lg">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

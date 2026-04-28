const engagements = [
  {
    emoji: "💬",
    title: "Je vous dis le prix avant — toujours.",
    desc: "Avant de commencer quoi que ce soit, je vous donne un chiffre précis. Pas d'estimation floue, pas de surprise sur la facture.",
  },
  {
    emoji: "⏱️",
    title: "Si ça prend 20 min, je facture pas 2h.",
    desc: "Je facture ce que j'ai fait. Si votre disjoncteur a juste besoin d'être réenclenché, je vous le dis et je repars.",
  },
  {
    emoji: "🧹",
    title: "Je protège vos sols et range derrière moi.",
    desc: "Bâches, aspirateur, emballages récupérés. Je rends la pièce dans l'état où je l'ai trouvée — ou mieux.",
  },
  {
    emoji: "🤝",
    title: "Si c'est pas grave, je vous le dis franchement.",
    desc: "Pas de vente forcée. Si votre installation est correcte, je le dis. Ça m'arrive souvent, et c'est tant mieux.",
  },
];

export function Reviews() {
  return (
    <section id="avis" className="bg-primary py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,215,0,0.1), transparent 60%)",
        }}
      />
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="mb-14 fade-on-scroll max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Comment je travaille
          </h2>
          <p className="text-white/60 text-lg">
            Pas de promesses marketing. Juste ce que je fais vraiment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {engagements.map((e, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-7 fade-on-scroll"
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            >
              <div className="text-4xl mb-4">{e.emoji}</div>
              <h3 className="text-white font-bold text-lg mb-2">{e.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

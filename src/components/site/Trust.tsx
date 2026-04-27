const promises = [
  {
    n: "01",
    t: "Le prix avant, pas après",
    d: "Je vous annonce le tarif avant de commencer. Toujours. Pas de devis qui gonfle en cours de route.",
  },
  {
    n: "02",
    t: "Le temps réel passé",
    d: "Si une intervention prend 20 minutes, je ne vous facture pas 2 heures. C'est la base.",
  },
  {
    n: "03",
    t: "Vos sols, vos murs",
    d: "Je protège ce que je touche, et je range derrière moi. Vous ne devez pas faire le ménage après mon passage.",
  },
  {
    n: "04",
    t: "Franchement",
    d: "Si ce n'est pas grave, je vous le dis. Si vous pouvez faire vous-même, je vous explique comment.",
  },
];

export function Trust() {
  return (
    <section id="trust" className="py-20 md:py-28 bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-14 fade-on-scroll">
          <p className="text-accent text-sm mb-3 uppercase tracking-wider">
            Ma façon de bosser
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
            Pas de promesse marketing.
            <br />
            <span className="italic text-white/80">Juste ce que je fais vraiment.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl">
          {promises.map((p) => (
            <div key={p.n} className="fade-on-scroll flex gap-5">
              <span className="font-serif text-3xl text-accent shrink-0">{p.n}</span>
              <div>
                <h3 className="font-serif text-xl mb-2">{p.t}</h3>
                <p className="text-white/70 leading-relaxed">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

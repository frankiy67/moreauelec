const engagements = [
  {
    icon: "💬",
    text: "Je vous dis le prix avant de commencer — toujours",
  },
  {
    icon: "⏱",
    text: "Si ça prend 20 minutes, je ne facture pas 2 heures",
  },
  {
    icon: "🧹",
    text: "Je protège vos sols et range derrière moi",
  },
  {
    icon: "✋",
    text: "Si c'est pas grave, je vous le dis franchement",
  },
];

export function Engagements() {
  return (
    <section className="bg-[#F8F8F6] py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 fade-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0F1E] mb-4">
            Mes engagements
          </h2>
          <p className="text-[#666666] text-lg">
            Pas une liste marketing. Ce que j'applique à chaque intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagements.map((e, i) => (
            <div
              key={i}
              className="bg-white border border-[#E8E8E8] rounded-xl p-7 fade-on-scroll"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="text-3xl mb-4 block">{e.icon}</span>
              <p className="font-bold text-[#0A0F1E] text-base leading-snug">
                {e.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MessageSquare, Timer, Sparkles, ThumbsUp } from "lucide-react";

const engagements = [
  {
    Icon: MessageSquare,
    text: "Je vous dis le prix avant de commencer — toujours",
  },
  {
    Icon: Timer,
    text: "Si ça prend 20 minutes, je ne facture pas 2 heures",
  },
  {
    Icon: Sparkles,
    text: "Je protège vos sols et range derrière moi",
  },
  {
    Icon: ThumbsUp,
    text: "Si c'est pas grave, je vous le dis franchement",
  },
];

export function Engagements() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 fade-on-scroll">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mb-3">
            Mes engagements
          </h2>
          <p className="text-[#555555]">
            Pas une liste marketing. Ce que j'applique à chaque intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {engagements.map(({ Icon, text }, i) => (
            <div
              key={i}
              className="border border-[#E0E6EF] rounded-lg p-6 fade-on-scroll"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Icon className="w-7 h-7 text-[#1E3A5F] mb-4" strokeWidth={1.5} />
              <p className="font-semibold text-[#1A1A1A] text-sm leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

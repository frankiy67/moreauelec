import { Star } from "lucide-react";

const reviews = [
  { name: "Thomas B.", city: "Lyon", color: "bg-blue-500", text: "Intervention le soir même pour une panne totale. Rapide, efficace, prix honnête. Je recommande." },
  { name: "Marie-Claire D.", city: "Marseille", color: "bg-pink-500", text: "Rénovation complète impeccable. Très propre, M. Moreau explique chaque étape clairement." },
  { name: "François L.", city: "Bordeaux", color: "bg-green-500", text: "Appelé pour un luminaire, 2h après il était là. Service excellent, ponctuel et professionnel." },
  { name: "Nadia M.", city: "Toulouse", color: "bg-purple-500", text: "Excellent électricien ! Très compétent, sympa et vraiment serviable !" },
  { name: "Robert K.", city: "Nantes", color: "bg-orange-500", text: "Problème résolu en un rien de temps. Service au top, je recommande vivement." },
  { name: "Christine P.", city: "Lille", color: "bg-teal-500", text: "Service impeccable. Intervention rapide, travail soigné, prix honnête." },
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
        <div className="text-center mb-14 fade-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Ce que nos clients disent
          </h2>
          <p className="text-accent font-semibold flex items-center justify-center gap-2">
            <Star className="w-5 h-5 fill-accent" />
            Plus de 4 000 avis 5 étoiles sur Google
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 fade-on-scroll"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-xs text-white/50 bg-white/10 px-2 py-1 rounded">via Google</span>
              </div>
              <p className="text-white/90 leading-relaxed mb-5 italic">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${r.color} text-white font-bold flex items-center justify-center`}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{r.name}</div>
                  <div className="text-white/60 text-xs">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

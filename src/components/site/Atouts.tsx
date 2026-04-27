const atouts = [
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#FFD700" strokeWidth="2.5" />
        <path d="M16 24l5 5 11-11" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Estimation par téléphone en 30 min",
    desc: "Vous décrivez votre problème, je vous donne une fourchette de prix sans me déplacer.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <rect x="8" y="10" width="32" height="30" rx="3" stroke="#FFD700" strokeWidth="2.5" />
        <path d="M8 18h32M18 10v4M30 10v4" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 26h6M16 32h10" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Visite technique le jour même",
    desc: "Vous validez, je viens confirmer sur place et je commence.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <path d="M12 36L20 16l8 12 5-8 6 16" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="12" r="4" stroke="#FFD700" strokeWidth="2.5" />
      </svg>
    ),
    title: "Intervention en 24-48h",
    desc: "Installation ou dépannage réalisé rapidement, sans traîner.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <path d="M24 8C15.2 8 8 15.2 8 24s7.2 16 16 16 16-7.2 16-16" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 10l4 4-8 8" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 28v-8M24 32v2" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Suivi après intervention",
    desc: "Je reste joignable si vous avez une question après mon passage.",
  },
];

export function Atouts() {
  return (
    <section id="atouts" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 fade-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0F1E] mb-4">
            Nos atouts
          </h2>
          <p className="text-[#666666] text-lg">
            Ce qui me distingue d'un grand réseau.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {atouts.map((a, i) => (
            <div
              key={i}
              className="atout-card bg-white border border-[#E8E8E8] rounded-xl p-7 fade-on-scroll"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-14 h-14 bg-[#0A0F1E] rounded-xl flex items-center justify-center mb-5">
                {a.icon}
              </div>
              <h3 className="font-bold text-[#0A0F1E] text-base mb-3 leading-snug">
                {a.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

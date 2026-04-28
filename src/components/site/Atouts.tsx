const atouts = [
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="2.5" />
        <path d="M16 24l5 5 11-11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Estimation par téléphone en 30 min",
    desc: "Vous décrivez votre problème, je vous donne une fourchette de prix sans me déplacer.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        <rect x="8" y="10" width="32" height="30" rx="3" stroke="white" strokeWidth="2.5" />
        <path d="M8 18h32M18 10v4M30 10v4" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 26h6M16 32h10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Visite technique le jour même",
    desc: "Vous validez, je viens confirmer sur place et je commence.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        <path d="M10 24h8l5-12 6 24 5-16 4 8h6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Intervention en 24-48h",
    desc: "Installation ou dépannage réalisé rapidement, sans traîner.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        <path d="M24 8C15.2 8 8 15.2 8 24s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8z" stroke="white" strokeWidth="2.5" />
        <path d="M24 16v9l6 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Suivi après intervention",
    desc: "Je reste joignable si vous avez une question après mon passage.",
  },
];

export function Atouts() {
  return (
    <section id="atouts" className="bg-[#F4F7FB] py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 fade-on-scroll">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mb-3">
            Nos atouts
          </h2>
          <p className="text-[#555555]">
            Ce qui me distingue d'un grand réseau.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {atouts.map((a, i) => (
            <div
              key={i}
              className="atout-card bg-white border border-[#E0E6EF] rounded-lg p-6 fade-on-scroll"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 bg-[#1E3A5F] rounded-lg flex items-center justify-center mb-5">
                {a.icon}
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-2 leading-snug">
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

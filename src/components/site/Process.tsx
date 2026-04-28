const steps = [
  {
    num: "1",
    title: "Vous appelez",
    desc: "Je décroche moi-même. On parle 5 minutes de votre problème.",
  },
  {
    num: "2",
    title: "Je vous donne un prix",
    desc: "Pas de déplacement surprise — le tarif est annoncé avant.",
  },
  {
    num: "3",
    title: "J'interviens",
    desc: "Je viens, je répare, je range.",
  },
  {
    num: "4",
    title: "C'est réglé",
    desc: "Facture claire, garantie sur tous les travaux.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 fade-on-scroll">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mb-3">
            Comment ça se passe ?
          </h2>
          <p className="text-[#555555]">
            Simple. Direct. Sans mauvaise surprise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Ligne de connexion desktop */}
          <div className="hidden lg:block absolute top-6 left-[14%] right-[14%] h-px bg-[#E2E2E2] z-0" />

          {steps.map((s, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center fade-on-scroll"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center mb-4 shrink-0">
                <span className="text-white font-extrabold text-base">{s.num}</span>
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-1.5">{s.title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed max-w-[180px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

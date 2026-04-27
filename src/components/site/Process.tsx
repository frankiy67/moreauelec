const steps = [
  {
    num: "01",
    title: "Vous appelez",
    desc: "Je décroche moi-même. On parle 5 minutes de votre problème.",
  },
  {
    num: "02",
    title: "Je vous donne un prix",
    desc: "Pas de déplacement surprise — le tarif est annoncé avant.",
  },
  {
    num: "03",
    title: "J'interviens",
    desc: "Je viens, je répare, je range.",
  },
  {
    num: "04",
    title: "C'est réglé",
    desc: "Facture claire, garantie sur tous les travaux.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#F8F8F6] py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 fade-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0F1E] mb-4">
            Comment ça se passe ?
          </h2>
          <p className="text-[#666666] text-lg">
            Simple. Direct. Sans mauvaise surprise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-[#E8E8E8] z-0" />

          {steps.map((s, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center fade-on-scroll"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-[#0A0F1E] flex items-center justify-center mb-5 shadow-lg">
                <span className="text-[#FFD700] font-extrabold text-lg">{s.num}</span>
              </div>
              <h3 className="font-bold text-[#0A0F1E] text-base mb-2">{s.title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed max-w-[200px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Photo */}
        <div className="fade-on-scroll order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
            <img
              src="/images/about-electrician.jpg"
              alt="Karim Benali, électricien indépendant à Toulouse"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 20%" }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/30 to-transparent" />
          </div>
        </div>

        {/* Text */}
        <div className="fade-on-scroll order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0F1E] mb-8">
            Bonjour, moi c'est Karim.
          </h2>

          <div className="space-y-4 text-[#1A1A1A] leading-relaxed text-base">
            <p>
              Électricien à Toulouse depuis 12 ans.
            </p>
            <p>
              J'ai commencé en apprentissage à 16 ans dans les Minimes.
              Aujourd'hui je travaille seul — au moins vous savez exactement qui vient chez vous.
            </p>
            <p>
              Hier encore j'intervenais sur un tableau des années 80 à Rangueil.
              Ce sont ces photos que vous voyez juste au-dessus.
            </p>
            <p>
              Je fais simple : vous appelez, je viens, je vous dis le prix avant.
              C'est tout.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-10">
            <span className="inline-flex items-center gap-2 border border-[#E8E8E8] px-4 py-2 rounded-full text-sm font-semibold text-[#0A0F1E]">
              🛡 Assuré décennale
            </span>
            <span className="inline-flex items-center gap-2 border border-[#E8E8E8] px-4 py-2 rounded-full text-sm font-semibold text-[#0A0F1E]">
              SIRET : 481 293 107 00034
            </span>
            <span className="inline-flex items-center gap-2 border border-[#E8E8E8] px-4 py-2 rounded-full text-sm font-semibold text-[#0A0F1E]">
              ⚡ 12 ans d'expérience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

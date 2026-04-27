export function About() {
  return (
    <section id="about" className="bg-[#F5F5F5] py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Photo */}
        <div className="fade-on-scroll order-2 lg:order-1">
          <div className="rounded-lg overflow-hidden aspect-[4/3]">
            <img
              src="/images/tableau-cables.jpg"
              alt="Mains d'électricien au travail sur un tableau électrique, câblage professionnel"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center center" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div className="fade-on-scroll order-1 lg:order-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mb-6">
            Bonjour, moi c'est Karim.
          </h2>

          <div className="space-y-4 text-[#444444] leading-relaxed text-sm">
            <p>Électricien à Toulouse depuis 12 ans.</p>
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
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Assuré décennale",
              "SIRET : 481 293 107 00034",
              "12 ans d'expérience",
            ].map((b) => (
              <span
                key={b}
                className="inline-flex items-center border border-[#E2E2E2] bg-white px-3.5 py-1.5 rounded text-xs font-semibold text-[#1A1A1A]"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

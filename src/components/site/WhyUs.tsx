export function WhyUs() {
  return (
    <section className="bg-primary text-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="fade-on-scroll">
          <div className="relative" style={{ transform: "rotate(-2deg)" }}>
            <img
              src="/images/tableau-multimetre.jpg"
              alt="Karim, électricien à Toulouse, contrôle un tableau électrique au multimètre"
              className="w-full rounded-xl border-[3px] border-accent shadow-2xl"
            />
          </div>
        </div>

        <div className="space-y-5 fade-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Bonjour, je suis{" "}
            <span className="text-accent">Karim</span>.
          </h2>

          <p className="text-white/90 text-lg leading-relaxed">
            Électricien à Toulouse depuis 12 ans. Je travaille seul, avec
            ma camionnette et mon matériel. Pas de sous-traitance, pas de
            standardiste entre vous et moi. C'est moi qui décroche, c'est
            moi qui viens.
          </p>

          <p className="text-white/75 leading-relaxed">
            Encore hier, j'étais sur un tableau dans un appartement des
            années 70 à Blagnac. L'installation n'avait pas été touchée
            depuis 30 ans — ça se voit tout de suite. Ce genre de situation,
            je connais bien.
          </p>

          <p className="text-white/75 leading-relaxed">
            Je travaille pas vite pour partir vite.
            Je travaille bien pour pas revenir.
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3.5 rounded-lg hover:brightness-95 transition"
            >
              Me contacter directement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

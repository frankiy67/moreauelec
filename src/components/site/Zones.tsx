const zones = [
  { icon: "🗼", title: "Île-de-France", cities: "Paris 1er–20e, Boulogne, Versailles, Neuilly, Vincennes", header: "bg-accent text-accent-foreground" },
  { icon: "🌊", title: "Sud-Est", cities: "Marseille, Lyon, Nice, Toulon, Montpellier, Grenoble", header: "bg-blue-600 text-white" },
  { icon: "🍷", title: "Sud-Ouest", cities: "Bordeaux, Toulouse, Nantes, Rennes, La Rochelle, Bayonne", header: "bg-orange-500 text-white" },
  { icon: "❄️", title: "Nord & Est", cities: "Lille, Strasbourg, Metz, Nancy, Reims, Rouen", header: "bg-primary text-white" },
];

export function Zones() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14 fade-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-3">
            Nous intervenons partout en France
          </h2>
          <p className="text-muted-foreground text-lg">
            Aucun défi n'est trop grand pour notre équipe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((z, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md service-card bg-light-bg fade-on-scroll"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`${z.header} px-5 py-4 font-bold flex items-center gap-2 text-lg`}>
                <span className="text-2xl">{z.icon}</span> {z.title}
              </div>
              <div className="p-5 text-muted-foreground text-sm leading-relaxed">
                {z.cities}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-muted-foreground fade-on-scroll">
          Votre ville n'est pas listée ?{" "}
          <a href="#contact" className="text-primary font-bold underline decoration-accent decoration-2 underline-offset-4">
            Contactez-nous →
          </a>
        </p>
      </div>
    </section>
  );
}

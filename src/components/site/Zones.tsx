const communes = [
  "Toulouse",
  "Blagnac",
  "Colomiers",
  "Tournefeuille",
  "Muret",
  "Ramonville",
  "Castanet",
  "Balma",
  "Saint-Orens",
];

export function Zones() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="mb-10 fade-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
            Je travaille à Toulouse
            <br />
            et 30 km autour.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Je ne travaille pas partout en France. Je travaille bien sur Toulouse
            et les communes autour. C'est plus honnête pour tout le monde.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10 fade-on-scroll">
          {communes.map((c, i) => (
            <span
              key={i}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                i === 0
                  ? "bg-accent text-accent-foreground"
                  : "bg-light-bg text-primary border border-border"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        <p className="text-muted-foreground text-sm fade-on-scroll">
          Vous êtes juste à la limite de la zone ?{" "}
          <a
            href="#contact"
            className="text-primary font-bold underline decoration-accent decoration-2 underline-offset-4"
          >
            Appelez, on se débrouille →
          </a>
        </p>
      </div>
    </section>
  );
}

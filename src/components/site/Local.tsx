import { MapPin } from "lucide-react";

const communes = [
  "[COMMUNE 1]",
  "[COMMUNE 2]",
  "[COMMUNE 3]",
  "[COMMUNE 4]",
  "[COMMUNE 5]",
  "[COMMUNE 6]",
  "[COMMUNE 7]",
  "[COMMUNE 8]",
];

export function Local() {
  return (
    <section id="zone" className="py-20 md:py-28 bg-paper">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6 fade-on-scroll">
          <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">
            Zone d'intervention
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            Je n'interviens pas{" "}
            <span className="line-through text-foreground/40">partout en France</span>.
          </h2>
          <p className="text-lg text-foreground/80 mb-3 leading-relaxed">
            J'interviens bien sur <strong>[VILLE]</strong> et environ{" "}
            <strong>30 km autour</strong>.
          </p>
          <p className="text-foreground/65 leading-relaxed">
            Au-delà, je préfère vous orienter vers un confrère du coin —
            ce sera plus rapide et moins cher pour vous.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {communes.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 bg-white border border-border px-3 py-1.5 rounded-full text-sm text-foreground/75"
              >
                <MapPin className="w-3 h-3 text-accent" />
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 fade-on-scroll space-y-5">
          <div className="bg-white border-l-4 border-accent p-5 md:p-6 rounded-r-md shadow-sm">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Encore hier
            </p>
            <p className="text-foreground/85 font-serif text-lg italic leading-snug">
              "Tableau remplacé sur une maison à [QUARTIER]. Ancien tableau
              d'origine, plus aux normes — fait dans la journée."
            </p>
          </div>
          <div className="bg-white border-l-4 border-primary p-5 md:p-6 rounded-r-md shadow-sm">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Cette semaine
            </p>
            <p className="text-foreground/85 font-serif text-lg italic leading-snug">
              "Réfection complète d'un appartement des années 70 à
              [VILLE PROCHE]. Câblage refait, prises remises aux normes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

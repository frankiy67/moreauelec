import { Shield, FileText, BadgeCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-paper">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-12 items-start">
        {/* Left: photo placeholder */}
        <div className="lg:col-span-5 fade-on-scroll">
          <div className="relative max-w-md">
            <div className="bg-white p-3 pb-12 shadow-xl tilt-l">
              <div className="placeholder-photo aspect-[4/5] flex items-center justify-center text-center p-6">
                <p className="text-primary/70 text-sm font-medium leading-snug">
                  📷 Votre vraie photo ici
                  <br />
                  <span className="text-xs text-primary/50 font-normal">
                    pas une image stock
                  </span>
                </p>
              </div>
              <p className="absolute bottom-3 left-0 right-0 text-center font-serif italic text-primary/80 text-sm">
                [PRÉNOM], dans l'atelier
              </p>
            </div>
            {/* small second photo */}
            <div className="absolute -bottom-8 -right-4 bg-white p-2 pb-8 shadow-xl tilt-r w-40 hidden md:block">
              <div className="placeholder-photo aspect-square flex items-center justify-center text-center p-2">
                <p className="text-primary/60 text-[10px]">📷 Photo chantier réel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="lg:col-span-7 fade-on-scroll">
          <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">
            L'artisan
          </p>
          <h2
            className="font-serif mb-7 leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Bonjour, moi c'est{" "}
            <span className="marker">[PRÉNOM]</span>.
          </h2>

          <div className="space-y-4 text-lg text-foreground/85 leading-relaxed max-w-xl">
            <p>
              Je suis électricien à <strong>[VILLE]</strong> depuis{" "}
              <strong>[X] ans</strong>. J'ai commencé en apprentissage chez un
              artisan du coin, et aujourd'hui je travaille seul.
            </p>
            <p>
              Au moins, vous savez qui intervient chez vous — pas un sous-traitant
              différent à chaque visite.
            </p>
            <p className="font-serif italic text-xl text-primary">
              "Je fais simple : vous appelez, je passe, je vous dis le prix
              avant. Pas de surprise sur la facture."
            </p>
          </div>

          {/* Real badges only */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Badge icon={Shield}>Assuré décennale</Badge>
            <Badge icon={BadgeCheck}>SIRET : [À COMPLÉTER]</Badge>
            <Badge icon={FileText}>Devis écrit avant intervention</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white border border-border px-3.5 py-2 rounded-md text-sm">
      <Icon className="w-4 h-4 text-primary" />
      <span className="text-foreground/80">{children}</span>
    </div>
  );
}

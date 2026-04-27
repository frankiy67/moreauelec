import { Phone, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
      style={{ background: "#0A0F1E" }}
    >
      {/* Subtle paper grain */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,215,0,0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft warm glow */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, #FFD700 0%, transparent 60%)" }}
      />

      <div className="relative container mx-auto px-4 lg:px-8 text-white grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 max-w-2xl">
          <p className="text-accent/90 text-sm mb-5 font-medium animate-fade-up">
            ⚡ Artisan indépendant — [VILLE] et 30 km autour
          </p>

          <h1
            className="font-serif font-semibold leading-[1.05] mb-6 animate-fade-up"
            style={{ fontSize: "clamp(2.4rem, 5.8vw, 4.2rem)" }}
          >
            Électricien à <span className="marker text-primary">[VILLE]</span>.
            <br />
            <span className="italic font-normal text-white/95">
              Appelez,
            </span>{" "}
            <span className="italic font-normal text-accent">
              c'est moi qui réponds.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl mb-9 max-w-xl text-white/75 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.15s", animationFillMode: "both" }}
          >
            Pas de standard, pas de répondeur à rallonge. Vous tombez sur moi —
            et c'est moi qui passe chez vous.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-up"
            style={{ animationDelay: "0.25s", animationFillMode: "both" }}
          >
            <a
              href="tel:[PHONE]"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-4 rounded-md text-base hover:brightness-95 transition shadow-lg shadow-accent/20"
            >
              <Phone className="w-5 h-5" />
              Appeler [PHONE]
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-6 py-4 rounded-md text-base hover:bg-white/5 transition"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p
            className="text-white/55 text-sm animate-fade-up"
            style={{ animationDelay: "0.35s", animationFillMode: "both" }}
          >
            Intervention rapide · Devis annoncé avant · Assuré décennale · SIRET vérifié
          </p>
        </div>

        {/* Polaroid placeholder */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative max-w-sm ml-auto">
            <div
              className="bg-white p-3 pb-14 shadow-2xl tilt-r"
              style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5)" }}
            >
              <div className="placeholder-photo aspect-[4/5] flex items-center justify-center text-center p-6">
                <p className="text-primary/70 text-sm font-medium leading-snug">
                  📷 Votre vraie photo ici
                  <br />
                  <span className="text-xs text-primary/50 font-normal">
                    (en intervention, pas une image stock)
                  </span>
                </p>
              </div>
              <p className="absolute bottom-4 left-0 right-0 text-center font-serif italic text-primary/80 text-sm">
                [PRÉNOM] — depuis [X] ans
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

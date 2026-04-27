import { Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-[#0A0F1E] pt-16 md:pt-0 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-20 md:py-28">
        {/* Left: text */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/15 border border-[#FFD700]/30 text-[#FFD700] px-4 py-1.5 rounded-full text-sm font-bold mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
            Électricien à Toulouse depuis 12 ans
          </div>

          <h1
            className="font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: 1.08 }}
          >
            Électricien à Toulouse —<br />
            <span className="text-[#FFD700]">Dépannage</span> et installation
          </h1>

          <p className="text-white/75 text-lg mb-10 leading-relaxed">
            Karim, artisan indépendant depuis 12 ans.<br />
            Intervention sous 2h. Devis gratuit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#FFD700] text-[#0A0F1E] font-bold px-7 py-4 rounded-lg text-base hover:brightness-95 transition shadow-lg"
            >
              Demander un devis
            </a>
            <a
              href="tel:0612345678"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-bold px-7 py-4 rounded-lg text-base hover:bg-white hover:text-[#0A0F1E] transition"
            >
              <Phone className="w-5 h-5" />
              06 12 34 56 78
            </a>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/80 px-3 py-1.5 rounded-full text-sm">
              ⚡ Intervention sous 2h
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/80 px-3 py-1.5 rounded-full text-sm">
              ✓ Devis gratuit avant intervention
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/80 px-3 py-1.5 rounded-full text-sm">
              🛡 Assuré décennale
            </span>
          </div>
        </div>

        {/* Right: real photo */}
        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s", animationFillMode: "both" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4]">
            <img
              src="/images/hero-electrician.jpg"
              alt="Karim, électricien à Toulouse, contrôle un tableau électrique avec un multimètre"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/40 to-transparent" />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-4 -left-4 bg-[#FFD700] text-[#0A0F1E] px-5 py-3 rounded-xl font-bold text-sm shadow-xl">
            12 ans d'expérience
          </div>
        </div>
      </div>
    </section>
  );
}

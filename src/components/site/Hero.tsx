import { useState } from "react";
import { Phone, CheckCircle2, Shield, Clock } from "lucide-react";

export function Hero() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="top" className="bg-white pt-[60px]">
      {/* Top bar orange */}
      <div className="bg-[#FF6B35] py-2 px-4 text-center text-white text-sm font-semibold">
        Intervention sous 2h sur Toulouse et 30km — Devis gratuit avant toute intervention
      </div>

      {/* Photo pleine largeur — limitée en hauteur */}
      <div className="w-full overflow-hidden max-h-64 md:max-h-80">
        <img
          src="/images/tableau-multimetre.jpg"
          alt="Karim, électricien à Toulouse, contrôle un tableau électrique"
          className="w-full h-full object-cover object-center"
          fetchpriority="high"
        />
      </div>

      {/* Contenu : 2 colonnes */}
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start py-8 md:py-10">

        {/* Gauche — col-span-7 */}
        <div className="lg:col-span-7">
          <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wide mb-2">
            Électricien indépendant — Toulouse &amp; 30km
          </p>

          <h1
            className="font-extrabold text-[#1A1A1A] mb-3"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.15 }}
          >
            Électricien à Toulouse —<br />
            Dépannage et installation
          </h1>

          <p className="text-[#555555] text-sm mb-5 leading-relaxed">
            Karim, artisan indépendant depuis 12 ans. Je décroche moi-même,
            je vous dis le prix avant, et je range après mon passage.
          </p>

          {/* Téléphone */}
          <a href="tel:0756950273" className="inline-flex items-center gap-3 mb-5 group">
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#FF6B35] text-white group-hover:bg-[#E55A20] transition-colors shrink-0">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
            </span>
            <div>
              <div className="text-[#FF6B35] font-extrabold text-2xl leading-none">07 56 95 02 73</div>
              <div className="text-[#777777] text-xs mt-0.5">Lun–Sam 8h–19h · Je réponds moi-même</div>
            </div>
          </a>

          {/* Garanties */}
          <ul className="space-y-2">
            {[
              { icon: Clock, text: "Intervention sous 2h pour les urgences" },
              { icon: CheckCircle2, text: "Devis gratuit, prix annoncé avant intervention" },
              { icon: Shield, text: "Assuré décennale — SIRET 481 293 107 00034" },
            ].map(({ icon: Icon, text }, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-[#444444]">
                <Icon className="w-4 h-4 text-[#FF6B35] shrink-0" strokeWidth={2} />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Droite — col-span-5 : formulaire */}
        <div className="lg:col-span-5 bg-[#FF6B35] rounded-lg p-6 text-white shadow-md">
          {sent ? (
            <div className="text-center py-4">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-white" />
              <h3 className="font-bold text-lg mb-1">Demande reçue !</h3>
              <p className="text-white/85 text-sm">Karim vous rappelle dans la journée.</p>
            </div>
          ) : (
            <>
              <h2 className="font-bold text-lg mb-4">Être rappelé gratuitement</h2>

              <form onSubmit={onSubmit} className="space-y-2">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-white/90">Votre nom *</label>
                  <input
                    type="text"
                    name="nom"
                    required
                    placeholder="Jean Dupont"
                    className="w-full bg-white/15 border border-white/30 rounded px-3 py-2 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-white/90">Votre téléphone *</label>
                  <input
                    type="tel"
                    name="telephone"
                    required
                    placeholder="07 56 95 02 73"
                    className="w-full bg-white/15 border border-white/30 rounded px-3 py-2 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-white/90">Votre besoin</label>
                  <select
                    name="service"
                    defaultValue=""
                    className="w-full bg-white/15 border border-white/30 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="" disabled className="text-[#1A1A1A]">Choisir...</option>
                    <option className="text-[#1A1A1A]">Dépannage urgent</option>
                    <option className="text-[#1A1A1A]">Tableau électrique</option>
                    <option className="text-[#1A1A1A]">Installation / rénovation</option>
                    <option className="text-[#1A1A1A]">Mise aux normes</option>
                    <option className="text-[#1A1A1A]">Diagnostic</option>
                    <option className="text-[#1A1A1A]">Autre</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-[#FF6B35] font-bold py-2.5 rounded text-sm hover:bg-[#f9f9f9] transition-colors mt-1"
                >
                  Être rappelé gratuitement →
                </button>
              </form>

              <p className="text-white/60 text-xs text-center mt-3">
                Aucun engagement · Réponse rapide garantie
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

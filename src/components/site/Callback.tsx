import { useState } from "react";
import { Lock } from "lucide-react";

export function Callback() {
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-[#111827] py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-6">
          Être rappelé par un électricien en 15 minutes
        </h3>
        {sent ? (
          <div className="max-w-2xl mx-auto text-center text-white bg-white/5 border border-accent/30 rounded-xl p-6">
            ✅ Merci ! Un électricien vous rappelle dans 15 minutes.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="grid grid-cols-1 md:grid-cols-5 gap-3 max-w-5xl mx-auto"
          >
            <input
              required
              placeholder="Prénom"
              className="bg-white/5 border border-white/10 text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
            />
            <input
              required
              type="tel"
              placeholder="Téléphone"
              className="bg-white/5 border border-white/10 text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-white/5 border border-white/10 text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
            />
            <select
              className="bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
              defaultValue=""
            >
              <option value="" disabled className="text-black">
                Problème
              </option>
              <option className="text-black">Panne urgente</option>
              <option className="text-black">Tableau électrique</option>
              <option className="text-black">Éclairage</option>
              <option className="text-black">Autre</option>
            </select>
            <button
              type="submit"
              className="bg-accent text-accent-foreground font-bold rounded-lg px-4 py-3 hover:brightness-95 transition"
            >
              Être rappelé →
            </button>
          </form>
        )}
        <p className="text-center text-white/60 text-sm mt-4 flex items-center justify-center gap-2">
          <Lock className="w-3 h-3" /> Données protégées • Réponse sous 15 min garantie
        </p>
      </div>
    </section>
  );
}

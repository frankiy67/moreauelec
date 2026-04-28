import { useState } from "react";

export function Callback() {
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-[#111827] py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">
          Vous préférez que je vous rappelle ?
        </h3>
        <p className="text-white/60 text-center text-sm mb-6">
          Laissez votre numéro — je rappelle dans la journée.
        </p>
        {sent ? (
          <div className="max-w-2xl mx-auto text-center text-white bg-white/5 border border-accent/30 rounded-xl p-6">
            ✅ Reçu. Je vous rappelle dès que possible.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
          >
            <input
              required
              placeholder="Votre prénom"
              className="bg-white/5 border border-white/10 text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
            />
            <input
              required
              type="tel"
              placeholder="Votre téléphone"
              className="bg-white/5 border border-white/10 text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
            />
            <select
              className="bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
              defaultValue=""
            >
              <option value="" disabled className="text-black">
                C'est pour quoi ?
              </option>
              <option className="text-black">Panne urgente</option>
              <option className="text-black">Tableau électrique</option>
              <option className="text-black">Éclairage / prises</option>
              <option className="text-black">Devis rénovation</option>
              <option className="text-black">Autre</option>
            </select>
            <button
              type="submit"
              className="bg-accent text-accent-foreground font-bold rounded-lg px-4 py-3 hover:brightness-95 transition"
            >
              Me rappeler →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

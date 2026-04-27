export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <p className="font-serif text-xl mb-3">[NOM ENTREPRISE]</p>
          <p className="text-white/70 text-sm leading-relaxed">
            Électricien artisan à [VILLE]
            <br />
            et 30 km alentours.
          </p>
        </div>

        <div className="text-sm text-white/80 space-y-1.5">
          <p><a href="tel:[PHONE]" className="hover:text-accent">[PHONE]</a></p>
          <p><a href="mailto:[EMAIL]" className="hover:text-accent">[EMAIL]</a></p>
          <p className="text-white/60">SIRET : [À COMPLÉTER]</p>
          <p className="text-white/60">Assuré décennale</p>
        </div>

        <div className="text-sm text-white/70 space-y-1.5">
          <p className="font-medium text-white">Horaires d'appel</p>
          <p>Lundi → Samedi : 8h–19h</p>
          <p className="text-white/50 text-xs mt-3">
            (Hors urgences : si je suis sur un chantier, je rappelle dans la journée.)
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
        <div className="flex gap-4">
          <a href="#" className="hover:text-accent">Mentions légales</a>
          <a href="#" className="hover:text-accent">Confidentialité</a>
        </div>
        <p>
          © 2026 — Site réalisé par{" "}
          <a href="tel:0756950273" className="hover:text-accent">
            François Vallat · 07 56 95 02 73
          </a>
        </p>
      </div>
    </footer>
  );
}

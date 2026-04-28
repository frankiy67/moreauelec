import { Zap, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-14 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <a href="#top" className="flex items-center gap-2 font-bold text-lg mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-accent-foreground">
              <Zap className="w-5 h-5" strokeWidth={2.5} />
            </span>
            Voltane Élec
          </a>
          <p className="text-white/70 text-sm mb-2">
            Artisan indépendant à Toulouse.
          </p>
          <p className="text-white/50 text-sm italic">
            On arrive. On répare. On garantit.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">Navigation</h4>
          <ul className="flex flex-col gap-2 text-sm text-white/80">
            {[
              { label: "Services", href: "#services" },
              { label: "Urgence", href: "#urgence" },
              { label: "Engagements", href: "#avis" },
              { label: "Contact", href: "#contact" },
              { label: "Mentions légales", href: "#" },
            ].map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-accent transition">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">Horaires</h4>
          <ul className="text-sm text-white/80 space-y-2">
            <li><span className="font-semibold text-white">Lun–Sam :</span> 8h–19h</li>
            <li><span className="font-semibold text-white">Urgences :</span> 7j/7</li>
          </ul>
          <a
            href="tel:0756950273"
            className="mt-5 inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-4 py-2.5 rounded-lg text-sm hover:brightness-95 transition"
          >
            <Phone className="w-4 h-4" />
            07 56 95 02 73
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-6 border-t border-white/10 text-center text-xs text-white/40">
        © 2026 Voltane Élec — Tous droits réservés
      </div>
    </footer>
  );
}

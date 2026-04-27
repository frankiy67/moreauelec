import { Zap, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <a href="#top" className="flex items-center gap-2 font-bold text-lg mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-accent-foreground">
              <Zap className="w-5 h-5" strokeWidth={2.5} />
            </span>
            Moreau Électricité
          </a>
          <p className="text-white/70 text-sm mb-5 italic">
            On arrive. On répare. On garantit.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition text-xs font-bold">
              G
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">Liens</h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm text-white/80">
            {[
              "Nos Services",
              "Urgence 24h/24",
              "Zones",
              "Blog",
              "Contact",
              "Mentions légales",
              "Politique confidentialité",
            ].map((l) => (
              <li key={l}><a href="#" className="hover:text-accent transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">Horaires</h4>
          <ul className="text-sm text-white/80 space-y-2">
            <li><span className="font-semibold text-white">Lun–Sam :</span> 8h–20h</li>
            <li><span className="font-semibold text-white">Urgences :</span> 7j/7 24h/24</li>
          </ul>
          <p className="text-xs text-white/40 mt-6">Site réalisé avec ⚡ par Moreau Studio</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
        © 2026 Moreau Électricité — Tous droits réservés
      </div>
    </footer>
  );
}

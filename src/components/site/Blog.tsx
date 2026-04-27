import { ArrowRight } from "lucide-react";

const posts = [
  { date: "23 Jan 2026", tag: "SÉCURITÉ", title: "Prises GFCI : protection essentielle pour cuisine et salle de bain", excerpt: "Découvrez pourquoi ces prises spéciales sont obligatoires dans les pièces humides." },
  { date: "16 Jan 2026", tag: "TABLEAU", title: "Remplacement tableau électrique : votre logement en a-t-il besoin ?", excerpt: "Les signes qui indiquent qu'il est temps de mettre votre installation aux normes." },
  { date: "9 Jan 2026", tag: "URGENCE", title: "Quand appeler un électricien d'urgence : les signes qui ne trompent pas", excerpt: "Identifiez les situations qui exigent une intervention immédiate d'un professionnel." },
];

export function Blog() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14 fade-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Nos derniers conseils
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-7 hover:border-accent/40 transition fade-on-scroll group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 text-sm mb-4">
                <span className="text-white/50">{p.date}</span>
                <span className="bg-accent text-accent-foreground font-bold px-2 py-0.5 rounded text-xs">
                  {p.tag}
                </span>
              </div>
              <h3 className="text-white font-bold text-xl leading-snug mb-3 group-hover:text-accent transition">
                {p.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">{p.excerpt}</p>
              <a href="#" className="inline-flex items-center gap-1 text-accent font-semibold text-sm">
                Lire l'article <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const articles = [
  {
    title: "Pourquoi le disjoncteur saute sans rien de branché et que faire ?",
    href: "https://www.lesbonsartisans.fr/pourquoi-le-disjoncteur-saute-sans-rien-de-branche-et-que-faire/",
    photo: null,
  },
  {
    title: "Tout ce qu'il y a à savoir sur les interrupteurs temporisés",
    href: "https://www.lesbonsartisans.fr/interrupteur-temporise/",
    photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
  },
  {
    title: "La prise en saillie, quelle différence avec une prise normale ?",
    href: "https://www.lesbonsartisans.fr/prise-en-saillie/",
    photo: "https://images.unsplash.com/photo-1621905251189-08b45249c6b6?w=600",
  },
  {
    title: "Tout savoir pour réaliser correctement un branchement à 4 fils",
    href: "https://www.lesbonsartisans.fr/branchement-quatre-fils/",
    photo: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600",
  },
  {
    title: "Le circuit électrique d'une maison : réalisation de schéma et chiffrage",
    href: "https://www.lesbonsartisans.fr/circuit-electrique-maison/",
    photo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600",
  },
  {
    title: "Rallonger un câble électrique, c'est possible ?",
    href: "https://www.lesbonsartisans.fr/rallonger-cable-electrique/",
    photo: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600",
  },
];

function ArticleLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
      {children}
    </a>
  );
}

export function Blog() {
  const [textOnly, ...rest] = articles;
  const row1Photos = rest.slice(0, 2);
  const row2Photos = rest.slice(2);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-bold text-2xl text-[#1F1F1F] text-center mb-10">
          Ces articles pourraient vous intéresser
        </h2>

        {/* Ligne 1 : article texte seul (gauche) + 2 articles avec photo (droite) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Texte seul */}
          <ArticleLink href={textOnly.href}>
            <div className="flex items-center justify-center h-full min-h-[180px] bg-[#F5F5F5] rounded-sm px-6 py-8">
              <p className="text-[#1F1F1F] font-semibold text-sm text-center leading-snug group-hover:text-[#E8541A] transition-colors">
                {textOnly.title}
              </p>
            </div>
          </ArticleLink>

          {/* 2 articles avec photo */}
          {row1Photos.map((a) => (
            <ArticleLink key={a.href} href={a.href}>
              <div className="overflow-hidden rounded-sm aspect-[4/3]">
                <img
                  src={a.photo!}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-200"
                  loading="lazy"
                />
              </div>
              <p className="text-[#666] text-sm text-center mt-3 leading-snug px-1">
                {a.title}
              </p>
            </ArticleLink>
          ))}
        </div>

        {/* Ligne 2 : 3 articles avec photo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {row2Photos.map((a) => (
            <ArticleLink key={a.href} href={a.href}>
              <div className="overflow-hidden rounded-sm aspect-[4/3]">
                <img
                  src={a.photo!}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-200"
                  loading="lazy"
                />
              </div>
              <p className="text-[#666] text-sm text-center mt-3 leading-snug px-1">
                {a.title}
              </p>
            </ArticleLink>
          ))}
        </div>
      </div>
    </section>
  );
}

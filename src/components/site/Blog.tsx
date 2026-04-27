const articles = [
  {
    title: "Pourquoi le disjoncteur saute sans rien de branché et que faire ?",
    href: "/blog/disjoncteur-qui-saute",
    photo: "/images/blog/disjoncteur.jpg",
  },
  {
    title: "Tout ce qu'il y a à savoir sur les interrupteurs temporisés",
    href: "/blog/interrupteur-temporise",
    photo: "/images/blog/interrupteur.jpg",
  },
  {
    title: "La prise en saillie, quelle différence avec une prise normale ?",
    href: "/blog/prise-en-saillie",
    photo: "/images/blog/prises-cables.jpg",
  },
  {
    title: "Tout savoir pour réaliser correctement un branchement à 4 fils",
    href: "/blog/branchement-quatre-fils",
    photo: "/images/blog/cables-mur.jpg",
  },
  {
    title: "Le circuit électrique d'une maison : réalisation de schéma et chiffrage",
    href: "/blog/circuit-electrique-maison",
    photo: "/images/blog/tableau-complet.jpg",
  },
  {
    title: "Rallonger un câble électrique, c'est possible ?",
    href: "/blog/rallonger-cable-electrique",
    photo: "/images/blog/cables-preparation.jpg",
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
    <a href={href} className="block group">
      {children}
    </a>
  );
}

export function Blog() {
  const row1 = articles.slice(0, 3);
  const row2 = articles.slice(3);

  return (
    <section id="blog" className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-bold text-2xl text-[#1F1F1F] text-center mb-10">
          Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {row1.map((a) => (
            <ArticleLink key={a.href} href={a.href}>
              <div className="overflow-hidden rounded-sm aspect-[4/3]">
                <img
                  src={a.photo}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {row2.map((a) => (
            <ArticleLink key={a.href} href={a.href}>
              <div className="overflow-hidden rounded-sm aspect-[4/3]">
                <img
                  src={a.photo}
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

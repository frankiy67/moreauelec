import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-[#1A1A1A]">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[#1A1A1A]">Page introuvable</h2>
        <p className="mt-2 text-sm text-[#555555]">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded bg-[#FF6B35] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#E55A20] transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Électricien Toulouse — Voltane Élec | Karim Benali" },
      {
        name: "description",
        content:
          "Karim Benali, électricien indépendant à Toulouse depuis 12 ans. Dépannage sous 2h, devis gratuit, assuré décennale. Toulouse et 30km autour.",
      },
      { property: "og:title", content: "Voltane Élec — Électricien Toulouse" },
      {
        property: "og:description",
        content:
          "Dépannage urgence, tableau électrique, mise aux normes. Intervention sous 2h sur Toulouse et 30km. Devis gratuit.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap",
      },
      { rel: "preload", href: "/images/hero-electrician.jpg", as: "image" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

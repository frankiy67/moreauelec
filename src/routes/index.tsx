import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Trust } from "@/components/site/Trust";
import { Local } from "@/components/site/Local";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Électricien à [VILLE] — [NOM ENTREPRISE]" },
      {
        name: "description",
        content:
          "Électricien artisan à [VILLE] et 30 km autour. Devis annoncé avant intervention, assuré décennale. Appelez, c'est moi qui réponds.",
      },
      { property: "og:title", content: "Électricien à [VILLE] — [NOM ENTREPRISE]" },
      {
        property: "og:description",
        content:
          "Artisan indépendant. Pas de standard, pas de sous-traitant. Devis avant intervention.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Trust />
        <Local />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

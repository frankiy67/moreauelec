import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Atouts } from "@/components/site/Atouts";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { Realisations } from "@/components/site/Realisations";
import { About } from "@/components/site/About";
import { Engagements } from "@/components/site/Engagements";
import { Blog } from "@/components/site/Blog";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Floating } from "@/components/site/Floating";
import { ScrollReveal } from "@/components/site/ScrollReveal";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "KB Électricité",
  description: "Karim Benali, électricien indépendant à Toulouse depuis 12 ans. Dépannage sous 2h, devis gratuit, assuré décennale.",
  telephone: "+336XXXXXXXX",
  email: "karim.kbelec@gmail.com",
  areaServed: [
    "Toulouse", "Blagnac", "Colomiers", "Tournefeuille", "Muret",
    "Ramonville-Saint-Agne", "Castanet-Tolosan", "L'Union", "Labège",
    "Balma", "Saint-Orens-de-Gameville", "Portet-sur-Garonne"
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toulouse",
    addressRegion: "Haute-Garonne",
    addressCountry: "FR",
  },
  identifier: { "@type": "PropertyValue", name: "SIRET", value: "481 293 107 00034" },
  openingHours: ["Mo-Sa 08:00-19:00"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Électricien Toulouse — KB Électricité | Karim Benali | Devis Gratuit" },
      {
        name: "description",
        content: "Karim Benali, électricien indépendant à Toulouse depuis 12 ans. Dépannage urgence sous 2h, tableau électrique, mise aux normes. Devis gratuit. Toulouse et 30km.",
      },
      { property: "og:title", content: "KB Électricité — Électricien Toulouse" },
      {
        property: "og:description",
        content: "Artisan électricien à Toulouse. Dépannage sous 2h, tableau électrique, installation. Devis gratuit, assuré décennale.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Atouts />
        <Process />
        <Services />
        <Realisations />
        <About />
        <Engagements />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Floating />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { UrgencyBanner } from "@/components/site/UrgencyBanner";
import { Atouts } from "@/components/site/Atouts";
import { WhyUs } from "@/components/site/WhyUs";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Realisations } from "@/components/site/Realisations";
import { Reviews } from "@/components/site/Reviews";
import { Blog } from "@/components/site/Blog";
import { FAQ } from "@/components/site/FAQ";
import { Zones } from "@/components/site/Zones";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Floating } from "@/components/site/Floating";
import { ScrollReveal } from "@/components/site/ScrollReveal";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Voltane Élec",
  description:
    "Karim Benali, électricien indépendant à Toulouse depuis 12 ans. Dépannage sous 2h, devis gratuit, assuré décennale.",
  telephone: "+330756950273",
  email: "contact@voltane-elec.fr",
  areaServed: [
    "Toulouse", "Blagnac", "Colomiers", "Tournefeuille", "Muret",
    "Ramonville-Saint-Agne", "Castanet-Tolosan", "Balma", "Saint-Orens-de-Gameville"
  ],
  address: { "@type": "PostalAddress", addressLocality: "Toulouse", addressRegion: "Haute-Garonne", addressCountry: "FR" },
  openingHours: ["Mo-Sa 08:00-19:00"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Électricien Toulouse — Voltane Élec | Karim Benali | Devis Gratuit" },
      {
        name: "description",
        content:
          "Karim Benali, électricien indépendant à Toulouse depuis 12 ans. Dépannage urgence sous 2h, tableau électrique, mise aux normes. Devis gratuit. Toulouse et 30km.",
      },
      { property: "og:title", content: "Voltane Élec — Électricien Toulouse" },
      {
        property: "og:description",
        content:
          "Artisan électricien à Toulouse. Dépannage sous 2h, tableau électrique, installation. Devis gratuit, assuré décennale.",
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
    <div className="min-h-screen bg-background">
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <UrgencyBanner />
        <Atouts />
        <WhyUs />
        <Services />
        <Process />
        <Realisations />
        <Reviews />
        <Blog />
        <FAQ />
        <Zones />
        <Contact />
      </main>
      <Footer />
      <Floating />
    </div>
  );
}

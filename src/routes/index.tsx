import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { UrgencyBanner } from "@/components/site/UrgencyBanner";
import { Callback } from "@/components/site/Callback";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Offers } from "@/components/site/Offers";
import { Reviews } from "@/components/site/Reviews";
import { Tools } from "@/components/site/Tools";
import { Zones } from "@/components/site/Zones";
import { Blog } from "@/components/site/Blog";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Floating } from "@/components/site/Floating";
import { ScrollReveal } from "@/components/site/ScrollReveal";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Moreau Électricité",
  description:
    "Électricien certifié Qualifelec RGE intervenant partout en France. Dépannage d'urgence 24h/24, devis gratuit, assurance décennale.",
  telephone: "+33100000000",
  email: "contact@moreau-electricite.fr",
  areaServed: "FR",
  address: { "@type": "PostalAddress", addressCountry: "FR" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "4000" },
  openingHours: ["Mo-Sa 08:00-20:00"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Électricien France — Moreau Électricité | Devis Gratuit 24h/24" },
      {
        name: "description",
        content:
          "Électricien certifié Qualifelec partout en France. Intervention sous 2h, 7j/7. Devis gratuit. 4000+ avis Google.",
      },
      { property: "og:title", content: "Moreau Électricité — Électricien certifié Qualifelec France" },
      {
        property: "og:description",
        content:
          "Dépannage urgence, tableau électrique, mise aux normes. Intervention 60-90 min, 7j/7. Devis gratuit.",
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
        <Callback />
        <Services />
        <WhyUs />
        <Offers />
        <Reviews />
        <Tools />
        <Zones />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Floating />
    </div>
  );
}

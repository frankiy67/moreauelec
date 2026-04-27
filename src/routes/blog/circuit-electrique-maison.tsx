import { createFileRoute } from "@tanstack/react-router";
import { BlogLayout } from "@/components/site/BlogLayout";

export const Route = createFileRoute("/blog/circuit-electrique-maison")({
  head: () => ({
    meta: [
      { title: "Circuit électrique d'une maison : schéma et chiffrage — KB Électricité" },
      {
        name: "description",
        content:
          "Comment fonctionne le circuit électrique d'une maison ? Karim, électricien à Toulouse, vous explique l'organisation du tableau, les circuits obligatoires et comment chiffrer une installation neuve.",
      },
    ],
  }),
  component: CircuitElectrique,
});

function CircuitElectrique() {
  return (
    <BlogLayout
      title="Le circuit électrique d'une maison : réalisation de schéma et chiffrage"
      breadcrumb="Circuit électrique maison"
    >
      <img
        src="/images/blog/tableau-complet.jpg"
        alt="Tableau électrique complet avec disjoncteurs orange"
        className="w-full rounded-lg mb-8 aspect-[16/9] object-cover"
        loading="eager"
      />

      <p>
        L'installation électrique d'une maison ressemble à un arbre. Le tronc, c'est le tableau général. Les branches, ce sont les circuits qui partent vers chaque pièce. Comprendre cette organisation permet de mieux diagnostiquer une panne, de préparer une rénovation ou simplement de savoir si votre installation est en ordre.
      </p>

      <h2>Comment est organisé un tableau électrique ?</h2>
      <p>
        En haut du tableau, le disjoncteur de branchement (ou disjoncteur d'abonné) : c'est celui que vous ne touchez pas, il appartient à Enedis. Juste en dessous, les disjoncteurs différentiels — généralement un ou deux, de type 30 mA. Ils protègent les personnes contre les contacts électriques indirects.
      </p>
      <p>
        Sous ces différentiels, les disjoncteurs de circuit. Chaque disjoncteur protège un circuit spécifique : prises du salon, éclairage chambres, cuisine, lave-linge, four, chauffe-eau... La norme NF C 15-100 impose d'avoir au minimum un certain nombre de circuits selon la surface du logement.
      </p>

      <h2>Les circuits obligatoires selon la norme</h2>
      <p>
        Pour un logement de 35 à 100 m², la norme impose au minimum : 1 circuit éclairage par tranche de 8 points lumineux, au moins 5 circuits de prises 16 A, 1 circuit dédié pour le lave-linge, 1 pour le lave-vaisselle, 1 ou 2 circuits cuisine 20 A pour les appareils de cuisson, 1 circuit pour le four, 1 pour le réfrigérateur.
      </p>
      <p>
        Ces exigences minimales sont souvent dépassées dans une maison moderne bien équipée. En pratique, sur une maison de 100 m², je compte généralement entre 12 et 18 circuits au tableau.
      </p>

      <h2>Comment réaliser le schéma d'une installation</h2>
      <p>
        Un schéma électrique de maison se fait en deux temps : le plan de masse (positions des prises, interrupteurs, luminaires sur plan de sol) et le schéma unifilaire (organisation du tableau, sections de câbles, calibres des disjoncteurs).
      </p>
      <p>
        Pour le plan de masse, on indique chaque point d'utilisation avec les symboles normalisés. La position des prises suit des règles : en cuisine, une prise tous les 0,80 m de plan de travail, une à chaque angle. Dans les chambres, au moins 3 prises 2P+T par pièce.
      </p>
      <p>
        Le schéma unifilaire précise les sections de câble pour chaque circuit (1,5 mm² pour l'éclairage, 2,5 mm² pour les prises, 4 ou 6 mm² pour les gros consommateurs), et les calibres des disjoncteurs (10 A éclairage, 16 A prises, 20 A cuisine, 32 A plaque induction).
      </p>

      <h2>Chiffrage : combien coûte une installation complète ?</h2>
      <p>
        Le coût d'une installation électrique neuve pour une maison individuelle de 100 m² se situe généralement entre 8 000 et 15 000 euros selon le niveau d'équipement, la région et les finitions choisies. Ce chiffre comprend le tableau, les câbles, les boîtiers, la main d'œuvre et le test de conformité.
      </p>
      <p>
        Pour une rénovation partielle — reprise d'un tableau vétuste, mise aux normes d'une installation des années 70, ajout de circuits — le coût est très variable selon l'état de départ. Un tableau remplacé avec 12 circuits coûte entre 1 200 et 2 500 euros pose comprise.
      </p>

      <h2>Faut-il un Consuel après les travaux ?</h2>
      <p>
        Oui, pour toute installation neuve ou rénovation complète, le Consuel doit être obtenu avant la mise en service. C'est un organisme de contrôle qui vérifie la conformité de l'installation à la norme. Sans Consuel, Enedis ne mettra pas en service le compteur dans un logement neuf.
      </p>
      <p>
        Pour une rénovation partielle chez un particulier sans changement de compteur, le Consuel n'est pas obligatoire légalement, mais c'est fortement recommandé — et exigé par certains assureurs.
      </p>

      <h2>Rénovation à Toulouse : par où commencer ?</h2>
      <p>
        Si vous préparez une rénovation électrique à Toulouse ou dans les communes autour, commencez par l'état des lieux. Je peux venir évaluer votre installation existante, identifier ce qui est hors normes et vous donner un chiffrage par circuit. Vous savez exactement ce qui doit être fait et ce que ça coûte avant de commencer.
      </p>
      <p>
        Intervention possible sous 2h pour les urgences, devis gratuit pour les projets de rénovation.
      </p>
    </BlogLayout>
  );
}

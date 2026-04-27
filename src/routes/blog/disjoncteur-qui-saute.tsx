import { createFileRoute } from "@tanstack/react-router";
import { BlogLayout } from "@/components/site/BlogLayout";

export const Route = createFileRoute("/blog/disjoncteur-qui-saute")({
  head: () => ({
    meta: [
      { title: "Pourquoi le disjoncteur saute sans rien de branché — KB Électricité" },
      {
        name: "description",
        content:
          "Le disjoncteur saute sans raison apparente ? Karim, électricien à Toulouse, vous explique les vraies causes et ce qu'il faut faire pour régler le problème durablement.",
      },
    ],
  }),
  component: DisjoncteurQuiSaute,
});

function DisjoncteurQuiSaute() {
  return (
    <BlogLayout
      title="Pourquoi le disjoncteur saute sans rien de branché et que faire ?"
      breadcrumb="Disjoncteur qui saute"
    >
      <img
        src="/images/blog/disjoncteur.jpg"
        alt="Rangée de disjoncteurs dans un tableau électrique"
        className="w-full rounded-lg mb-8 aspect-[16/9] object-cover"
        loading="eager"
      />

      <p>
        Vous remontez le disjoncteur, il retombe aussitôt. Ou pire : il saute la nuit alors que tout est éteint. Ce genre de panne agace, inquiète, et on ne sait jamais trop quoi faire. Voici ce que je constate dans neuf cas sur dix chez mes clients à Toulouse.
      </p>

      <h2>La différence entre disjoncteur de branchement et disjoncteurs de circuit</h2>
      <p>
        Avant tout, il faut savoir de quel disjoncteur on parle. Le disjoncteur de branchement est le gros, en haut du tableau, celui que Enedis pose. En dessous, ce sont les disjoncteurs de circuit qui protègent chaque groupe de prises ou de luminaires.
      </p>
      <p>
        Si c'est le disjoncteur de branchement qui saute, cela signifie que la consommation totale du logement dépasse la puissance souscrite. Si c'est un disjoncteur de circuit, c'est soit une surcharge, soit un défaut d'isolement, soit un court-circuit.
      </p>

      <h2>Surcharge : trop d'appareils sur le même circuit</h2>
      <p>
        Chaque circuit est calibré pour une puissance maximale. Un circuit cuisine supporte généralement 20 ampères, soit 4 400 watts. Branchez un four, une plaque à induction et un grille-pain en même temps, et le disjoncteur saute — c'est lui qui vous évite un incendie.
      </p>
      <p>
        La solution n'est pas de remettre le disjoncteur et de croiser les doigts : il faut répartir les appareils sur des circuits différents, ou faire créer un nouveau circuit dédié.
      </p>

      <h2>Défaut d'isolement : le câble qui fuit</h2>
      <p>
        Un câble vieilli, un fil dénudé qui touche la gaine, une prise humide — tous ces défauts créent un courant de fuite vers la terre. Le disjoncteur différentiel (la rangée du haut, les boîtiers avec le bouton test) est justement là pour détecter ça. Il coupe en une fraction de seconde pour protéger les personnes.
      </p>
      <p>
        Dans ce cas, le disjoncteur différentiel saute dès qu'on le remet. La méthode pour localiser la fuite : débrancher tous les appareils un par un jusqu'à ce que le disjoncteur tienne. L'appareil à cause duquel il restait en position basse est le fautif.
      </p>

      <h2>Court-circuit : deux fils qui se touchent</h2>
      <p>
        Un court-circuit se produit quand le fil de phase et le fil neutre entrent en contact direct. En pratique, ça arrive souvent sur une prise mal montée, un boîtier de dérivation mal refermé ou un luminaire dont les fils se touchent. Le disjoncteur saute instantanément dès qu'on remet le courant.
      </p>
      <p>
        Contrairement au défaut d'isolement, ici on entend souvent un claquement ou une odeur de brûlé au moment du déclenchement. Ne remontez pas le disjoncteur sans avoir trouvé la cause — un court-circuit répété finit par abîmer l'installation.
      </p>

      <h2>Le disjoncteur lui-même est en fin de vie</h2>
      <p>
        Un disjoncteur peut vieillir. Après plusieurs déclenchements successifs ou des dizaines d'années de service, le mécanisme interne se dérègle et le disjoncteur saute à des seuils bien inférieurs à sa valeur nominale. Dans les logements des années 80 que je rencontre souvent à Toulouse et Blagnac, c'est une cause fréquente.
      </p>
      <p>
        Un disjoncteur de circuit coûte entre 5 et 15 euros. Son remplacement prend quelques minutes à condition d'avoir coupé l'alimentation générale. C'est souvent la solution la plus rapide et la moins chère.
      </p>

      <h2>Ce qu'il ne faut surtout pas faire</h2>
      <p>
        Ne jamais bloquer un disjoncteur en position haute avec du ruban ou un bout de plastique. Ne jamais remplacer un disjoncteur par un calibre supérieur pour "avoir de la marge". Ces bricolages contournent une protection conçue pour vous éviter un incendie.
      </p>

      <h2>Quand appeler un électricien ?</h2>
      <p>
        Si vous ne trouvez pas la cause après avoir débranché tous les appareils, si le disjoncteur différentiel continue à sauter, ou si vous avez une odeur de brûlé dans le tableau — appelez. Ça peut être une intervention courte, mais ce n'est pas une situation à laisser traîner.
      </p>
      <p>
        J'interviens à Toulouse et dans un rayon de 30 km, généralement sous 2 heures. Je vous annonce le prix avant de commencer.
      </p>
    </BlogLayout>
  );
}

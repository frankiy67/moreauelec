import { createFileRoute } from "@tanstack/react-router";
import { BlogLayout } from "@/components/site/BlogLayout";

export const Route = createFileRoute("/blog/prise-en-saillie")({
  head: () => ({
    meta: [
      { title: "La prise en saillie : différence avec une prise encastrée — Voltane Élec" },
      {
        name: "description",
        content:
          "Prise en saillie ou encastrée : quelle solution choisir ? Karim, électricien à Toulouse, vous explique les différences, les cas d'usage et les règles d'installation.",
      },
    ],
  }),
  component: PriseEnSaillie,
});

function PriseEnSaillie() {
  return (
    <BlogLayout
      title="La prise en saillie, quelle différence avec une prise normale ?"
      breadcrumb="Prise en saillie"
    >
      <img
        src="/images/blog/prises-cables.jpg"
        alt="Prises et interrupteurs câblés en saillie"
        className="w-full rounded-lg mb-8 aspect-[16/9] object-cover"
        loading="eager"
      />

      <p>
        La prise en saillie se distingue par sa boîte qui reste apparente sur le mur — rien n'est encastré. Le câble chemine dans une goulotte ou reste visible. C'est souvent la solution qu'on choisit quand on ne veut pas ouvrir les cloisons, ou quand on travaille sur un mur en béton, en pierre ou en brique.
      </p>

      <h2>Prise encastrée vs prise en saillie : la vraie différence</h2>
      <p>
        Une prise encastrée nécessite une boîte d'encastrement noyée dans le mur. Le câble passe derrière la cloison. Le résultat est propre et discret, mais l'installation demande de saigner le mur ou de travailler sous placo.
      </p>
      <p>
        Une prise en saillie, elle, se fixe directement sur la surface. La boîte — appelée boîte d'encastrement saillie — se visse au mur, et le câble passe soit dans une goulotte plastique, soit directement apparent si c'est dans un local technique. Le coût et le temps d'installation sont généralement inférieurs.
      </p>

      <h2>Quand choisir une installation en saillie ?</h2>
      <p>
        La saillie s'impose dans plusieurs situations : mur porteur en béton ou en pierre où forer des saignées est coûteux ou déconseillé, local technique (cave, garage, atelier) où l'esthétique n'est pas la priorité, ou ajout de prises sans ouvrir une cloison existante.
      </p>
      <p>
        Dans les appartements anciens de Toulouse, on la rencontre fréquemment dans les cuisines et les caves. Pour un appartement en rénovation totale, on préférera en général l'encastrement pour un rendu plus soigné.
      </p>

      <h2>Matériaux et montage</h2>
      <p>
        Les prises en saillie existent dans les mêmes gammes que les prises encastrées — Legrand, Schneider, Hager. Elles ont simplement un socle plus épais. La connexion des fils est identique : phase (marron), neutre (bleu), terre (vert-jaune).
      </p>
      <p>
        La goulotte se fixe avec des clips ou des vis selon le type. Elle doit être droite et bien ancrée pour éviter qu'elle ne se décolle avec le temps. Pour un passage en angle, des pièces d'angle spéciales permettent de garder un résultat propre.
      </p>

      <h2>Les règles à respecter</h2>
      <p>
        La norme NF C 15-100 s'applique aussi aux installations en saillie. Quelques points importants : la prise doit être à terre (broche de terre obligatoire dans les pièces humides et en cuisine), le câble utilisé doit être du H07V-U 1,5 mm² minimum pour les prises, et la section doit être adaptée à la charge prévue.
      </p>
      <p>
        Dans une salle de bains, les prises doivent respecter les volumes de sécurité définis par la norme : aucune prise dans les 60 cm autour de la douche ou de la baignoire (volume 1 et 2). En saillie comme en encastré, cette règle est absolue.
      </p>

      <h2>Esthétique : on peut faire propre en saillie</h2>
      <p>
        Les goulottes modernes, notamment en blanc ou ivoire, sont discrètes si elles sont bien posées et bien peintes. Certains clients me demandent volontairement la saillie dans une cuisine pour faciliter les modifications futures — si un électroménager change de place, il suffit de déplacer la goulotte sans toucher au mur.
      </p>
      <p>
        Dans un atelier ou une cave, la saillie est la norme. Avec du matériel IP44 ou IP55 (résistant à l'humidité et à la poussière), on peut équiper n'importe quel local de manière sûre et pérenne.
      </p>

      <h2>Peut-on le faire soi-même ?</h2>
      <p>
        Pour une prise de remplacement ou un déplacement sur circuit existant, un bricoleur soigneux peut s'en charger. Pour créer un nouveau circuit depuis le tableau, c'est différent : il faut connaître les sections de câble, les calibres de disjoncteurs et respecter la norme. Une erreur sur le câblage du tableau peut provoquer un incendie.
      </p>
      <p>
        En cas de doute, appelez-moi. Je me déplace sur Toulouse et les communes alentour, je regarde ce qu'il faut faire et je vous donne un prix avant de commencer.
      </p>
    </BlogLayout>
  );
}

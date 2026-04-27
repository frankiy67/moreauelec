import { createFileRoute } from "@tanstack/react-router";
import { BlogLayout } from "@/components/site/BlogLayout";

export const Route = createFileRoute("/blog/branchement-quatre-fils")({
  head: () => ({
    meta: [
      { title: "Branchement à 4 fils : tout savoir pour le réaliser correctement — KB Électricité" },
      {
        name: "description",
        content:
          "Le branchement à 4 fils concerne les plaques de cuisson ou certains radiateurs. Karim, électricien à Toulouse, vous explique les câbles, les connexions et les précautions indispensables.",
      },
    ],
  }),
  component: BranchementQuatreFils,
});

function BranchementQuatreFils() {
  return (
    <BlogLayout
      title="Tout savoir pour réaliser correctement un branchement à 4 fils"
      breadcrumb="Branchement à 4 fils"
    >
      <img
        src="/images/blog/cables-mur.jpg"
        alt="Câbles colorés dans une niche murale avec connecteurs orange"
        className="w-full rounded-lg mb-8 aspect-[16/9] object-cover"
        loading="eager"
      />

      <p>
        On parle de branchement à 4 fils dans deux cas principaux : les plaques de cuisson triphasées et certains radiateurs à inertie. Dans les deux cas, il s'agit d'une alimentation spéciale, différente d'une simple prise 2P+T. Voici ce qu'il faut comprendre avant de toucher quoi que ce soit.
      </p>

      <h2>Pourquoi 4 fils et pas 3 ?</h2>
      <p>
        Un branchement monophasé classique utilise 3 fils : phase (marron), neutre (bleu), terre (vert-jaune). Quand on passe à du triphasé — courant utilisé pour des appareils puissants — on ajoute deux phases supplémentaires. On se retrouve alors avec 3 phases + le neutre = 4 fils (sans compter la terre).
      </p>
      <p>
        Dans le cas d'une plaque de cuisson à induction haut de gamme, la puissance peut atteindre 7 400 W. Une alimentation monophasée nécessiterait un câble de grande section et un disjoncteur de 32 A minimum. Le triphasé permet de répartir cette puissance sur trois phases, avec des câbles plus fins et moins de contraintes sur le réseau.
      </p>

      <h2>Cas le plus courant : la plaque de cuisson</h2>
      <p>
        Les plaques à induction de 7,2 à 7,4 kW sont souvent livrées avec un câble prémonté qui attend une prise de courant 32 A ou une connexion directe à une boîte de raccordement. Cette boîte est généralement encastrée dans la cuisine, derrière ou sous la plaque.
      </p>
      <p>
        Le câble d'alimentation depuis le tableau doit être un 5G2,5 (5 conducteurs de 2,5 mm²) ou un 5G6 selon la distance et la puissance. Le disjoncteur associé dans le tableau est généralement un 20 A ou 32 A tétrapolaire — il coupe les 3 phases en même temps.
      </p>

      <h2>Le câblage pas à pas</h2>
      <p>
        La première règle : coupez le courant au tableau avant de commencer, et vérifiez l'absence de tension avec un vérificateur de tension. Travaillez hors tension, toujours.
      </p>
      <p>
        Dans la boîte de raccordement, les bornes sont marquées : L1, L2, L3 pour les phases, N pour le neutre, et le symbole terre. Côté tableau, le disjoncteur tétrapolaire reçoit les 3 phases et le neutre. La terre se connecte à la barre de terre du tableau.
      </p>
      <p>
        Le câble 5G2,5 se compose de 5 fils : marron (L1), noir (L2), gris (L3), bleu (N), vert-jaune (terre). Respectez scrupuleusement ces couleurs — une inversion de phase et neutre peut endommager l'appareil ou créer un risque électrique.
      </p>

      <h2>Les erreurs fréquentes</h2>
      <p>
        La première erreur, c'est d'utiliser un câble sous-dimensionné. Un 3G2,5 à la place d'un 5G2,5 — il manque deux conducteurs. J'ai vu des installations bricolées avec deux câbles séparés pour compléter. Ce n'est pas conforme et peut créer des problèmes de mise à la terre.
      </p>
      <p>
        La deuxième erreur : utiliser un disjoncteur bipolaire classique à la place d'un tétrapolaire. Si une seule phase déclenche, les deux autres restent sous tension — l'appareil n'est pas vraiment hors circuit.
      </p>
      <p>
        La troisième : ne pas respecter la section minimale. Pour une plaque de 7,4 kW sur 10 mètres de câble, du 2,5 mm² peut suffire, mais si la longueur est plus importante, il faut passer en 4 ou 6 mm² pour éviter une chute de tension.
      </p>

      <h2>Ai-je du triphasé chez moi ?</h2>
      <p>
        Pas forcément. Beaucoup de logements en France, notamment les appartements, n'ont que du monophasé. Dans ce cas, une plaque de cuisson triphasée ne peut pas être raccordée telle quelle — il faut soit une plaque compatible monophasé, soit un changement de compteur.
      </p>
      <p>
        Pour savoir si votre logement est triphasé, regardez votre compteur Linky ou votre ancien compteur : s'il y a 3 phases, vous aurez 4 fils entrants (3 phases + neutre). En cas de doute, un électricien peut vérifier en cinq minutes.
      </p>

      <h2>Quand faire appel à un électricien ?</h2>
      <p>
        Dès que vous touchez au tableau ou que vous créez un nouveau circuit. Le remplacement d'une boîte de raccordement ou d'une prise sur circuit existant est accessible à un bricoleur attentif. Mais la création d'un circuit depuis le tableau, le choix du câble, et la pose d'un disjoncteur tétrapolaire nécessitent des connaissances en électricité.
      </p>
      <p>
        Je réalise ce type de branchement régulièrement à Toulouse, Colomiers, Blagnac. Intervention possible sous 2h, prix annoncé avant.
      </p>
    </BlogLayout>
  );
}

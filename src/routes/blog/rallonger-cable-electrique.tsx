import { createFileRoute } from "@tanstack/react-router";
import { BlogLayout } from "@/components/site/BlogLayout";

export const Route = createFileRoute("/blog/rallonger-cable-electrique")({
  head: () => ({
    meta: [
      { title: "Rallonger un câble électrique : comment faire correctement ? — KB Électricité" },
      {
        name: "description",
        content:
          "Peut-on rallonger un câble électrique ? Karim, électricien à Toulouse, vous explique les méthodes correctes, les connecteurs à utiliser et les erreurs qui créent des risques d'incendie.",
      },
    ],
  }),
  component: RallongerCable,
});

function RallongerCable() {
  return (
    <BlogLayout
      title="Rallonger un câble électrique, c'est possible ?"
      breadcrumb="Rallonger un câble électrique"
    >
      <img
        src="/images/blog/cables-preparation.jpg"
        alt="Préparation de câbles électriques avec pince à dénuder"
        className="w-full rounded-lg mb-8 aspect-[16/9] object-cover"
        loading="eager"
      />

      <p>
        Oui, on peut rallonger un câble électrique — à condition de le faire correctement. Un mauvais raccord est l'une des causes les plus fréquentes d'incendie électrique. L'isolation qui craque avec la chaleur, une connexion qui chauffe à cause d'une mauvaise continuité... voilà ce qui arrive quand on bricole sans méthode.
      </p>

      <h2>Pourquoi un câble trop court pose problème</h2>
      <p>
        On rencontre cette situation dans plusieurs cas : un câble d'alimentation pour un appareil fixe (chauffe-eau, tableau secondaire, machine à laver) qui ne fait pas la longueur prévue, un câble encastré dans un mur qui s'avère trop court lors d'une rénovation, ou encore un fil qui a été coupé trop court lors d'un travail précédent.
      </p>
      <p>
        La tentation est de tordre les deux extrémités ensemble et d'emballer avec du ruban isolant. C'est le pire qu'on puisse faire. Cette connexion résiste mal dans le temps, peut se desserrer avec les vibrations et finit par chauffer.
      </p>

      <h2>La méthode correcte : la boîte de dérivation</h2>
      <p>
        La solution réglementaire pour raccorder deux câbles, c'est la boîte de dérivation avec borniers à vis ou à ressort. La connexion se fait fil par fil (phase sur phase, neutre sur neutre, terre sur terre), dans un boîtier fermé accessible et non noyé sous du plâtre.
      </p>
      <p>
        C'est ce que dit la norme NF C 15-100 : toute jonction doit être accessible sans outil ou derrière un cache démontable. Un raccord noyé dans le mur et inaccessible n'est pas conforme — même s'il est parfaitement exécuté.
      </p>

      <h2>Les connecteurs à utiliser</h2>
      <p>
        Pour les sections courantes (1,5 à 6 mm²), les connecteurs rapides à ressort — Wago 221 ou équivalents — sont devenus la référence. Faciles à poser, fiables, démontables, ils acceptent des fils rigides comme des fils souples. Pas besoin d'outil pour connecter.
      </p>
      <p>
        Les borniers à vis classiques fonctionnent aussi très bien, à condition de ne pas trop serrer (risque de couper le fil) et de bien vérifier la continuité après connexion. Pour les grosses sections (10 mm² et plus), on utilisera des cosses serties ou des borniers adaptés.
      </p>

      <h2>La section du câble de rallonge doit être identique</h2>
      <p>
        On ne rallonge pas un câble 2,5 mm² avec du 1,5 mm². La section minimale doit être au moins équivalente sur toute la longueur du circuit. Si on met une section inférieure, c'est cette partie qui chauffera en premier lors d'une surcharge — elle devient le maillon faible de l'installation.
      </p>
      <p>
        En pratique : du 1,5 mm² pour l'éclairage, du 2,5 mm² pour les prises, du 4 mm² minimum pour les circuits cuisine. Ces sections sont imposées par la norme et dimensionnées pour que la chaleur dissipée reste acceptable.
      </p>

      <h2>Rallonger dans une goulotte ou sous fourreau</h2>
      <p>
        Si le câble passe dans une goulotte apparente, le rallongement est simple : on ouvre la goulotte, on ajoute la longueur nécessaire avec une boîte de dérivation. Si le câble est sous fourreau encastré dans le mur, c'est plus délicat. On peut essayer de faire passer un câble supplémentaire dans le fourreau existant, ou ouvrir le mur si le fourreau est trop plein.
      </p>
      <p>
        Dans les maisons des années 60-70 que je rencontre souvent à Toulouse, les fourreaux sont souvent absents — les câbles sont noyés directement dans le plâtre. Rallonger dans ce cas demande d'ouvrir le mur ou de passer un câble en saillie.
      </p>

      <h2>Ce qu'il ne faut jamais faire</h2>
      <p>
        Jamais de ruban isolant seul. Jamais de connexion noyée dans le mur sans boîte accessible. Jamais de section inférieure à celle du câble d'origine. Jamais de connexion sous tension — coupez toujours le circuit au tableau avant de travailler.
      </p>
      <p>
        Ces mauvaises pratiques ne posent parfois pas de problème visible pendant des années. Puis un jour, l'installation chauffe trop longtemps et l'incendie part depuis une connexion invisible dans le mur.
      </p>

      <h2>Quand faire appel à un professionnel ?</h2>
      <p>
        Pour un câble accessible et une boîte de dérivation en apparent, un bricoleur soigneux peut s'en sortir. Pour tout ce qui est encastré, pour des sections importantes (4 mm² et plus), ou si vous avez le moindre doute sur la conformité, appelez un électricien.
      </p>
      <p>
        Je réalise ce type d'intervention régulièrement à Toulouse et dans un rayon de 30 km. Je vous explique ce que je fais et pourquoi, et je vous donne le prix avant de commencer.
      </p>
    </BlogLayout>
  );
}

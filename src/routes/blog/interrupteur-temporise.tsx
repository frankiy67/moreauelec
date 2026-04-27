import { createFileRoute } from "@tanstack/react-router";
import { BlogLayout } from "@/components/site/BlogLayout";

export const Route = createFileRoute("/blog/interrupteur-temporise")({
  head: () => ({
    meta: [
      { title: "Tout savoir sur les interrupteurs temporisés — KB Électricité" },
      {
        name: "description",
        content:
          "L'interrupteur temporisé s'éteint tout seul après un délai réglable. Karim, électricien à Toulouse, vous explique comment il fonctionne, où l'installer et comment le câbler.",
      },
    ],
  }),
  component: InterrupteurTemporise,
});

function InterrupteurTemporise() {
  return (
    <BlogLayout
      title="Tout ce qu'il y a à savoir sur les interrupteurs temporisés"
      breadcrumb="Interrupteur temporisé"
    >
      <img
        src="/images/blog/interrupteur.jpg"
        alt="Interrupteur temporisé blanc sur mur"
        className="w-full rounded-lg mb-8 aspect-[16/9] object-cover"
        loading="eager"
      />

      <p>
        Un interrupteur temporisé, c'est simple : vous appuyez, la lumière s'allume, et au bout d'un délai réglable, elle s'éteint toute seule. Pas besoin de repasser. On les croise surtout dans les parties communes d'immeubles, mais ils ont aussi leur place dans une maison individuelle.
      </p>

      <h2>Comment fonctionne un interrupteur temporisé ?</h2>
      <p>
        Il contient un minuteur électronique. Quand on appuie sur le bouton, le circuit se ferme et le compte à rebours démarre. À la fin du délai, le contact s'ouvre et le circuit se coupe. Le délai est généralement réglable de quelques secondes à plusieurs minutes grâce à une petite vis ou une molette sur le côté du boîtier.
      </p>
      <p>
        Certains modèles intègrent aussi un signal lumineux — une petite LED qui reste allumée même quand la lumière est éteinte, pour retrouver l'interrupteur dans le noir. Ce voyant consomme quasi rien, moins d'un watt.
      </p>

      <h2>Où installer un interrupteur temporisé ?</h2>
      <p>
        Les endroits les plus adaptés sont ceux où on n'a pas besoin de lumière longtemps : couloirs, entrées, cages d'escalier, caves, garages, WC. On évite de les mettre dans les pièces de vie où on reste assis — sauf si c'est une temporisation longue, ce qui revient à un minuteur de confort.
      </p>
      <p>
        Dans les immeubles collectifs, la réglementation impose leur utilisation dans les parties communes pour limiter la consommation. Pour un particulier, c'est un choix de confort et d'économie d'énergie.
      </p>

      <h2>Comment câbler un interrupteur temporisé ?</h2>
      <p>
        Le câblage est identique à celui d'un interrupteur simple, à une condition près : il faut que le neutre arrive jusqu'au boîtier. C'est là que ça coince dans les vieilles installations — certaines alimentations en étoile n'amènent pas le neutre jusqu'à l'interrupteur.
      </p>
      <p>
        Si vous avez une installation récente conforme à la norme NF C 15-100, le neutre est normalement présent. Dans le cas contraire, on peut parfois faire passer un câble supplémentaire ou utiliser un modèle de temporisé 2 fils (sans neutre), qui fonctionne différemment — en se rechargeant via le courant de fuite de l'ampoule. Mais ce type de modèle est moins fiable et incompatible avec les LED.
      </p>

      <h2>Compatibilité avec les ampoules LED</h2>
      <p>
        C'est le point qui pose le plus de problèmes. Les ampoules LED ont une consommation très faible, et certains temporisés bon marché ont besoin d'une charge minimale pour fonctionner correctement. Résultat : la lumière clignote, ou le temporisé ne s'éteint pas.
      </p>
      <p>
        La solution est simple : choisir un temporisé certifié compatible LED, ou en ajouter un dans la gamme de votre marque d'appareillage (Legrand, Schneider, Hager). Ces modèles coûtent entre 15 et 40 euros selon les fonctions.
      </p>

      <h2>Réglage du délai</h2>
      <p>
        La plupart des temporisés ont un délai réglable entre 30 secondes et 7 minutes, parfois jusqu'à 10 minutes. Le réglage se fait avec un petit tournevis sur la molette accessible depuis la face avant. Quelques modèles haut de gamme permettent le réglage depuis un smartphone via Bluetooth.
      </p>
      <p>
        Pour un couloir de 5 mètres, 1 minute est généralement suffisant. Pour une cave ou un garage, 3 à 5 minutes permettent de travailler sans avoir à courir rappuyer.
      </p>

      <h2>Remplacement d'un interrupteur classique par un temporisé</h2>
      <p>
        Si votre boîtier existant fait 40 mm de profondeur et que le neutre est présent, la pose est rapide — une demi-heure environ. Si la boîte est trop peu profonde ou que le neutre est absent, il faut prévoir un peu plus de travail. Dans tous les cas, l'intervention doit se faire hors tension.
      </p>
      <p>
        Je fais ce type d'installation régulièrement à Toulouse, Blagnac, Colomiers et alentour. Si vous avez un doute sur la faisabilité dans votre logement, appelez-moi — je vous réponds directement.
      </p>
    </BlogLayout>
  );
}

import { Check, ArrowRight } from "lucide-react";
import toolsImg from "@/assets/tools-flatlay.jpeg";

const points = [
  "Matériel professionnel certifié",
  "Techniciens formés et qualifiés",
  "Respect des normes NF C 15-100",
  "Garantie sur tous nos travaux",
];

export function Tools() {
  return (
    <section className="bg-light-bg py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="fade-on-scroll order-2 lg:order-1">
          <img
            src={toolsImg}
            alt="Outils professionnels d'électricien"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
        <div className="fade-on-scroll order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-5">
            L'expertise au service de votre sécurité
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Nos électriciens interviennent avec le matériel professionnel le plus récent.
            Chaque intervention est réalisée dans les règles de l'art, avec les outils
            adaptés à votre installation.
          </p>
          <ul className="space-y-3 mb-8">
            {points.map((p, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-accent-foreground" strokeWidth={3} />
                </span>
                <span className="text-primary font-medium">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3.5 rounded-lg hover:brightness-95 transition"
          >
            Voir nos certifications <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

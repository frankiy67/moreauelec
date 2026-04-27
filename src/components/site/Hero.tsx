import { useEffect, useState } from "react";
import { Phone, Zap, Clock, Star, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-electrician.jpeg";

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      setVal(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

export function Hero() {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStart(true), 300);
    return () => clearTimeout(t);
  }, []);

  const reviews = useCountUp(4000, start);

  const stats = [
    { icon: Zap, value: "60-90 min", label: "Délai d'intervention" },
    { icon: Clock, value: "7j/7", label: "Disponibilité" },
    { icon: Star, value: `${reviews.toLocaleString("fr-FR")}+`, label: "Avis Google" },
    { icon: Calendar, value: "Même jour", label: "RDV disponible" },
  ];

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(10,15,30,0.78)" }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(255,215,0,0.15), transparent 50%)",
        }}
      />

      <div className="relative container mx-auto px-4 lg:px-8 text-white">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-accent/95 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-8 animate-fade-up">
            <Zap className="w-4 h-4" />
            Électricien certifié Qualifelec RGE
          </div>

          <h1
            className="font-extrabold tracking-tight leading-[1.05] mb-6 animate-fade-up"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 4.5rem)" }}
          >
            Électricien <span className="yellow-underline">agréé</span>
            <br />
            partout en France
          </h1>

          <p
            className="text-lg md:text-xl mb-10 max-w-2xl animate-fade-up"
            style={{ color: "#94A3B8" }}
          >
            Électriciens certifiés, assurance décennale.
            <br />
            Prix fixé à l'avance — aucune mauvaise surprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground font-bold px-7 py-4 rounded-lg text-base hover:brightness-95 transition shadow-lg shadow-accent/20"
            >
              Demander un devis gratuit
            </a>
            <a
              href="tel:0100000000"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white font-bold px-7 py-4 rounded-lg text-base hover:bg-white hover:text-primary transition"
            >
              <Phone className="w-5 h-5" />
              01 XX XX XX XX
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {stats.map((s, i) => (
              <div
                key={i}
                className="border-l-2 border-accent pl-4 py-1 animate-fade-up"
                style={{ animationDelay: `${0.4 + i * 0.1}s`, animationFillMode: "both" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <s.icon className="w-5 h-5 text-accent" />
                  <span className="text-2xl md:text-3xl font-extrabold">{s.value}</span>
                </div>
                <div className="text-xs md:text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

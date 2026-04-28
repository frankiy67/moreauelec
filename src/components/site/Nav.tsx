import { useEffect, useState } from "react";
import { Phone, Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Urgence", href: "#urgence" },
  { label: "Engagements", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 border-b border-white/10" : "py-4"
      }`}
      style={{
        background: "rgba(10, 15, 30, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 text-white font-bold text-lg shrink-0">
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-accent-foreground">
            <Zap className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <span>Voltane Élec</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 text-white text-sm">
            <span className="w-2 h-2 bg-urgent rounded-full animate-pulse-dot" />
            <span className="font-medium">Urgences 7j/7</span>
          </div>
          <a
            href="tel:0756950273"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-4 py-2.5 rounded-lg hover:brightness-95 transition animate-glow"
          >
            <Phone className="w-4 h-4" />
            07 56 95 02 73
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-3 border-t border-white/10 mt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/90 font-medium py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0756950273"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-4 py-3 rounded-lg mt-2"
          >
            <Phone className="w-4 h-4" />
            07 56 95 02 73
          </a>
        </nav>
      </div>
    </header>
  );
}

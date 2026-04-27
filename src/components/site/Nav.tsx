import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { label: "L'artisan", href: "#about" },
  { label: "Ce que je fais", href: "#services" },
  { label: "Ma façon de bosser", href: "#trust" },
  { label: "Zone", href: "#zone" },
  { label: "Me contacter", href: "#contact" },
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
        scrolled ? "py-2 border-b border-white/10" : "py-3"
      }`}
      style={{
        background: "rgba(10, 15, 30, 0.92)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-baseline gap-1.5 text-white shrink-0">
          <span className="font-serif text-xl font-semibold tracking-tight">[NOM ENTREPRISE]</span>
          <span className="hidden sm:inline text-accent text-xs font-medium">— électricien à [VILLE]</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-white/75 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:[PHONE]"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-3.5 py-2 rounded-md hover:brightness-95 transition text-sm"
        >
          <Phone className="w-4 h-4" />
          [PHONE]
        </a>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

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
              className="text-white/90 py-1.5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:[PHONE]"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-4 py-3 rounded-md mt-2"
          >
            <Phone className="w-4 h-4" />
            [PHONE]
          </a>
        </nav>
      </div>
    </header>
  );
}

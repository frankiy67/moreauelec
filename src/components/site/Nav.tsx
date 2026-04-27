import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Comment ça marche", href: "#process" },
  { label: "À propos", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E2E2E2] transition-shadow duration-200 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-[60px] gap-4">
        {/* Logo */}
        <a href="#top" className="shrink-0 font-bold text-[15px]">
          <span className="text-[#E8541A]">KB</span>
          <span className="text-[#1F1F1F]"> Électricité</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#444444] hover:text-[#E8541A] transition-colors font-semibold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:06XXXXXXXX"
          className="hidden md:flex items-center gap-2 text-[#E8541A] font-bold text-lg hover:text-[#d04a16] transition-colors"
        >
          <Phone className="w-5 h-5 shrink-0" strokeWidth={2.5} />
          06 XX XX XX XX
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#1A1A1A] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-250 bg-white ${
          open ? "max-h-80 border-t border-[#E2E2E2]" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-3 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#1A1A1A] font-semibold py-3 border-b border-[#E2E2E2] last:border-0 text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:06XXXXXXXX"
            className="flex items-center gap-2 text-[#E8541A] font-bold text-base py-3 mt-1"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            06 XX XX XX XX
          </a>
        </nav>
      </div>
    </header>
  );
}

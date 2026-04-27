import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Comment ça marche", href: "#process" },
  { label: "À propos", href: "#about" },
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
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "border-b border-[#E8E8E8]"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 gap-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#FFD700]">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
              <path d="M13 2L4.5 13H11L10 22L20.5 11H14L13 2Z" fill="#0A0F1E" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="font-bold text-[#0A0F1E] text-base leading-tight">
            KB Électricité
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-600 text-[#1A1A1A] hover:text-[#0A0F1E] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:0612345678"
            className="inline-flex items-center gap-2 bg-[#FFD700] text-[#0A0F1E] font-bold px-4 py-2 rounded-full text-sm hover:brightness-95 transition"
          >
            <Phone className="w-4 h-4" />
            06 12 34 56 78
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border border-[#0A0F1E] text-[#0A0F1E] font-bold px-4 py-2 rounded-full text-sm hover:bg-[#0A0F1E] hover:text-white transition"
          >
            Demander un devis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#0A0F1E] p-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          open ? "max-h-96 border-t border-[#E8E8E8]" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#1A1A1A] font-semibold py-2.5 border-b border-[#E8E8E8] last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0612345678"
            className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0A0F1E] font-bold px-4 py-3 rounded-full mt-3"
          >
            <Phone className="w-4 h-4" />
            06 12 34 56 78
          </a>
        </nav>
      </div>
    </header>
  );
}

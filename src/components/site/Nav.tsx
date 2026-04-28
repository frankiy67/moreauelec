import { useEffect, useState } from "react";
import { Phone, Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Process", href: "#process" },
  { label: "Blog", href: "#blog" },
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
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E0E6EF] transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-[60px] gap-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 text-[#1A1A1A] font-bold text-[15px] shrink-0">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1E3A5F] text-white">
            <Zap className="w-4 h-4" strokeWidth={2.5} />
          </span>
          <span className="text-[#1E3A5F]">Voltane</span> <span className="text-[#E63946]">Élec</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-[#1A1A1A] hover:text-[#1E3A5F] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:0756950273"
          className="hidden md:inline-flex items-center gap-2 bg-[#E63946] text-white font-bold px-4 py-2 rounded-lg text-sm hover:bg-[#c0283a] transition-colors shrink-0"
        >
          <Phone className="w-4 h-4" strokeWidth={2.5} />
          07 56 95 02 73
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
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          open ? "max-h-96 border-t border-[#E0E6EF]" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-3 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#1A1A1A] font-semibold py-3 border-b border-[#E0E6EF] last:border-0 text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0756950273"
            className="inline-flex items-center justify-center gap-2 bg-[#E63946] text-white font-bold px-4 py-3 rounded-lg mt-3 text-sm"
          >
            <Phone className="w-4 h-4" />
            07 56 95 02 73
          </a>
        </nav>
      </div>
    </header>
  );
}

import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";

export function Floating() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(scrolled);
      setShowTop(h.scrollTop > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Reading progress */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#E8541A] z-[60] transition-all"
        style={{ width: `${progress}%` }}
      />

      {/* Floating call button — mobile uniquement */}
      <a
        href="tel:06XXXXXXXX"
        className="fixed bottom-5 right-5 z-40 md:hidden bg-[#E8541A] text-white w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg hover:bg-[#d04a16] transition-colors"
        aria-label="Appeler Karim"
      >
        <Phone className="w-5 h-5" strokeWidth={2.5} />
        <span className="text-[9px] font-bold mt-0.5">APPELER</span>
      </a>

      {/* Back to top — desktop */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-40 hidden md:flex bg-[#2D2D2D] text-white w-10 h-10 rounded-full items-center justify-center shadow-lg hover:bg-[#E8541A] transition-colors"
          aria-label="Haut de page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
}

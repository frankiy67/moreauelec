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
        className="fixed top-0 left-0 h-[3px] bg-[#FFD700] z-[60] transition-all"
        style={{ width: `${progress}%` }}
      />

      {/* Floating call button - mobile only */}
      <a
        href="tel:0612345678"
        className="fixed bottom-6 right-5 z-40 md:hidden bg-[#FFD700] text-[#0A0F1E] w-16 h-16 rounded-full flex flex-col items-center justify-center font-extrabold text-[10px] shadow-2xl animate-pulse-ring hover:scale-105 transition"
        aria-label="Appeler Karim"
      >
        <Phone className="w-5 h-5 mb-0.5" />
        APPELER
      </a>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-5 md:right-6 z-40 hidden md:flex bg-[#0A0F1E] text-white w-11 h-11 rounded-full items-center justify-center shadow-xl hover:bg-[#FFD700] hover:text-[#0A0F1E] transition"
          aria-label="Haut de page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}

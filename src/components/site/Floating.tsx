import { useEffect, useState } from "react";
import { Phone, ArrowUp, MessageCircle } from "lucide-react";

export function Floating() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [cookie, setCookie] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(scrolled);
      setShowTop(h.scrollTop > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-accent z-[60] transition-all"
        style={{ width: `${progress}%` }}
      />

      {/* urgence */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-40 bg-urgent text-white w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold text-[10px] shadow-2xl animate-pulse-ring hover:scale-110 transition"
        aria-label="Urgence"
      >
        <Phone className="w-5 h-5 mb-0.5" />
        URGENCE
      </a>

      {/* whatsapp */}
      <a
        href="https://wa.me/33100000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-28 right-6 z-40 bg-white text-primary w-11 h-11 rounded-full flex items-center justify-center shadow-xl hover:bg-accent hover:text-accent-foreground transition"
          aria-label="Haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* cookie banner */}
      {cookie && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-primary text-white border border-white/10 rounded-xl shadow-2xl px-5 py-4 flex items-center gap-4 max-w-[90vw] md:max-w-md">
          <p className="text-sm">🍪 Nous utilisons des cookies pour améliorer votre expérience.</p>
          <button
            onClick={() => setCookie(false)}
            className="bg-accent text-accent-foreground font-bold px-3 py-1.5 rounded-lg text-sm shrink-0"
          >
            OK
          </button>
        </div>
      )}
    </>
  );
}

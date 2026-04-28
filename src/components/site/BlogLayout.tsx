import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Phone, ChevronRight } from "lucide-react";

interface BlogLayoutProps {
  title: string;
  breadcrumb: string;
  children: React.ReactNode;
}

export function BlogLayout({ title, breadcrumb, children }: BlogLayoutProps) {
  return (
    <>
      <Nav />
      <main className="pt-[60px] bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-[#F4F7FB] border-b border-[#E0E6EF]">
          <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center gap-1.5 text-xs text-[#666]">
            <Link to="/" className="hover:text-[#1E3A5F] transition-colors">Accueil</Link>
            <ChevronRight className="w-3 h-3 shrink-0 text-[#BBBBBB]" />
            <Link to="/" hash="blog" className="hover:text-[#1E3A5F] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3 shrink-0 text-[#BBBBBB]" />
            <span className="text-[#1A1A1A] font-semibold truncate max-w-[200px] sm:max-w-none">{breadcrumb}</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-10 lg:py-14">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-start">
            {/* Article content */}
            <article className="max-w-2xl">
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mb-8 leading-tight">
                {title}
              </h1>
              <div className="prose-blog">
                {children}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-[80px]">
              <div className="bg-[#1E3A5F] rounded-lg p-6 text-white">
                <p className="font-extrabold text-lg leading-tight mb-2">
                  Besoin d'un électricien à Toulouse ?
                </p>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  Karim intervient sous 2h. Devis gratuit, prix annoncé avant le départ.
                </p>
                <a
                  href="tel:0756950273"
                  className="flex items-center justify-center gap-2 bg-white text-[#1E3A5F] font-bold py-3 px-4 rounded text-base hover:bg-white/90 transition-colors mb-3"
                >
                  <Phone className="w-4 h-4 shrink-0" strokeWidth={2.5} />
                  07 56 95 02 73
                </a>
                <Link
                  to="/"
                  hash="contact"
                  className="block text-center text-white/90 text-sm underline underline-offset-2 hover:text-white transition-colors"
                >
                  Ou demander un rappel →
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-6 space-y-2.5">
                {[
                  "Assuré décennale",
                  "SIRET : 481 293 107 00034",
                  "12 ans d'expérience",
                  "Toulouse et 30km autour",
                ].map((b) => (
                  <div
                    key={b}
                    className="border border-[#E0E6EF] bg-[#F4F7FB] px-3.5 py-2.5 rounded text-xs font-semibold text-[#444]"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

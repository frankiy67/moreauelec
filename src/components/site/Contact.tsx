import { useState } from "react";
import { MapPin, Phone, Mail, Zap, Award, Shield, Lock, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  prenom: z.string().trim().min(1, "Prénom requis").max(80),
  nom: z.string().trim().min(1, "Nom requis").max(80),
  email: z.string().trim().email("Email invalide").max(255),
  telephone: z.string().trim().min(8, "Téléphone invalide").max(20),
  ville: z.string().trim().min(1, "Ville requise").max(100),
  service: z.string().min(1, "Choisissez un service"),
  description: z.string().max(1000).optional(),
});

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <section id="contact" className="bg-light-bg py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 fade-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-3">
            Demandez votre devis gratuit
          </h2>
          <p className="text-muted-foreground mb-8">
            Réponse garantie sous 15 minutes • Sans engagement
          </p>

          {sent ? (
            <div className="bg-card border-2 border-accent rounded-xl p-10 text-center">
              <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Demande reçue !</h3>
              <p className="text-muted-foreground">
                Un électricien vous rappelle dans 15 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="bg-card rounded-xl p-6 md:p-8 shadow-sm space-y-4" noValidate>
              <div className="grid md:grid-cols-2 gap-4">
                <Field name="prenom" label="Prénom *" error={errors.prenom} />
                <Field name="nom" label="Nom *" error={errors.nom} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field name="email" label="Email *" type="email" error={errors.email} />
                <Field name="telephone" label="Téléphone *" type="tel" error={errors.telephone} />
              </div>
              <Field name="ville" label="Ville *" error={errors.ville} />
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">Type de service *</label>
                <select
                  name="service"
                  defaultValue=""
                  className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:border-accent"
                >
                  <option value="" disabled>Choisir...</option>
                  <option>Dépannage urgent</option>
                  <option>Tableau électrique</option>
                  <option>Éclairage</option>
                  <option>Borne VE</option>
                  <option>Mise aux normes</option>
                  <option>Diagnostic</option>
                  <option>Autre</option>
                </select>
                {errors.service && <p className="text-urgent text-xs mt-1">{errors.service}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">Description</label>
                <textarea
                  name="description"
                  rows={4}
                  maxLength={1000}
                  className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:border-accent resize-none"
                  placeholder="Décrivez brièvement votre besoin..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground font-bold py-4 rounded-lg text-base hover:brightness-95 transition shadow-md"
              >
                Envoyer ma demande →
              </button>
              <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                <Lock className="w-3 h-3" /> Données protégées — Jamais de spam
              </p>
            </form>
          )}
        </div>

        <aside className="lg:col-span-2 fade-on-scroll">
          <div className="bg-primary text-white rounded-xl p-7 md:p-8 sticky top-28">
            <h3 className="font-bold text-xl mb-6">Nos coordonnées</h3>
            <ul className="space-y-5">
              <Info icon={MapPin}>France entière</Info>
              <Info icon={Phone}>
                <a href="tel:0100000000" className="font-bold text-accent">01 XX XX XX XX</a>
                <div className="text-white/70 text-sm mt-0.5">Lun–Sam 8h–20h</div>
                <div className="text-white/70 text-sm">Urgences 7j/7 24h/24</div>
              </Info>
              <Info icon={Mail}>contact@moreau-electricite.fr</Info>
              <Info icon={Zap}>Réponse sous 15 min garantie</Info>
              <Info icon={Award}>Qualifelec RGE #1108382</Info>
              <Info icon={Shield}>Assurance décennale</Info>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-primary mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:border-accent"
      />
      {error && <p className="text-urgent text-xs mt-1">{error}</p>}
    </div>
  );
}

function Info({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <Icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
      <div className="flex-1">{children}</div>
    </li>
  );
}

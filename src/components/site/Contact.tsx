import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  nom: z.string().trim().min(1, "Nom requis").max(100),
  telephone: z.string().trim().min(8, "Téléphone invalide").max(20),
  codepostal: z.string().trim().min(4, "Code postal requis").max(10),
  service: z.string().min(1, "Choisissez un type de demande"),
  description: z.string().trim().min(1, "Description requise").max(1200),
});

type Errors = Record<string, string>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Errors = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3 fade-on-scroll">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mb-2">
            Demandez votre devis gratuit
          </h2>
          <p className="text-[#666666] text-sm mb-7">
            Je vous rappelle dans la journée.
          </p>

          {sent ? (
            <div className="bg-[#F4F7FB] border border-[#E0E6EF] rounded-lg p-10 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#1E3A5F] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Merci !</h3>
              <p className="text-[#666666] text-sm">
                Karim vous rappelle dans la journée.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="bg-white border border-[#E0E6EF] rounded-lg p-6 md:p-8 space-y-4"
              noValidate
            >
              <Field name="nom" label="Nom *" error={errors.nom} />
              <div className="grid md:grid-cols-2 gap-4">
                <Field name="telephone" label="Téléphone *" type="tel" error={errors.telephone} />
                <Field name="codepostal" label="Code postal *" error={errors.codepostal} />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] mb-1.5 uppercase tracking-wide">
                  Type de demande *
                </label>
                <select
                  name="service"
                  defaultValue=""
                  className="w-full border border-[#E0E6EF] rounded px-3.5 py-2.5 bg-white text-[#1A1A1A] focus:outline-none focus:border-[#1E3A5F] text-sm"
                >
                  <option value="" disabled>Choisir...</option>
                  <option>Dépannage urgent</option>
                  <option>Tableau électrique</option>
                  <option>Installation</option>
                  <option>Mise aux normes</option>
                  <option>Diagnostic</option>
                  <option>Autre</option>
                </select>
                {errors.service && <p className="text-red-600 text-xs mt-1">{errors.service}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] mb-1.5 uppercase tracking-wide">
                  Description du problème *
                </label>
                <textarea
                  name="description"
                  rows={4}
                  maxLength={1200}
                  className="w-full border border-[#E0E6EF] rounded px-3.5 py-2.5 bg-white text-[#1A1A1A] focus:outline-none focus:border-[#1E3A5F] resize-none text-sm"
                  placeholder="Décrivez brièvement votre problème ou besoin..."
                />
                {errors.description && <p className="text-red-600 text-xs mt-1">{errors.description}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] mb-1.5 uppercase tracking-wide">
                  Joindre une photo (facultatif)
                </label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  className="block w-full text-sm text-[#666666] file:mr-3 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#F4F7FB] file:text-[#1A1A1A] hover:file:bg-[#E0E6EF] cursor-pointer"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1E3A5F] text-white font-bold py-3.5 rounded text-sm hover:bg-[#163050] transition-colors"
              >
                Valider ma demande →
              </button>
            </form>
          )}
        </div>

        {/* Contact info */}
        <aside className="lg:col-span-2 fade-on-scroll">
          <div className="bg-[#1E3A5F] text-white rounded-lg p-7 md:p-8 sticky top-20 space-y-6">
            <h3 className="font-bold text-base mb-2">Contactez-moi directement</h3>

            <div className="flex gap-3.5">
              <Phone className="w-5 h-5 shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <a href="tel:0756950273" className="font-extrabold text-xl leading-none block mb-1">
                  07 56 95 02 73
                </a>
                <p className="text-white/75 text-xs">c'est moi qui réponds</p>
              </div>
            </div>

            <div className="flex gap-3.5">
              <Clock className="w-5 h-5 shrink-0 mt-0.5" strokeWidth={2} />
              <div className="text-sm text-white/90">
                Lun–Sam 8h–19h
              </div>
            </div>

            <div className="flex gap-3.5">
              <Mail className="w-5 h-5 shrink-0 mt-0.5" strokeWidth={2} />
              <a
                href="mailto:contact@voltane-elec.fr"
                className="text-sm text-white/90 hover:text-white transition-colors break-all"
              >
                contact@voltane-elec.fr
              </a>
            </div>

            <div className="flex gap-3.5">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5" strokeWidth={2} />
              <div className="text-sm text-white/90 leading-relaxed">
                Toulouse et 30km autour<br />
                Blagnac, Colomiers, Tournefeuille,<br />
                Muret, Ramonville, Balma…
              </div>
            </div>

            <p className="text-white/55 text-xs italic border-t border-white/20 pt-5">
              Je réponds généralement dans la journée.<br />
              Pour une urgence, appelez directement.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-[#1A1A1A] mb-1.5 uppercase tracking-wide">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="w-full border border-[#E0E6EF] rounded px-3.5 py-2.5 bg-white text-[#1A1A1A] focus:outline-none focus:border-[#1E3A5F] text-sm"
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}

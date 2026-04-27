import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
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
    <section id="contact" className="bg-[#F8F8F6] py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3 fade-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0F1E] mb-2">
            Demandez votre devis gratuit
          </h2>
          <p className="text-[#666666] mb-8">
            Je vous rappelle dans la journée.
          </p>

          {sent ? (
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-10 text-center">
              <CheckCircle2 className="w-14 h-14 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0A0F1E] mb-2">
                Merci !
              </h3>
              <p className="text-[#666666]">
                Karim vous rappelle dans la journée.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="bg-white rounded-xl p-6 md:p-8 border border-[#E8E8E8] space-y-4" noValidate>
              <Field name="nom" label="Nom *" error={errors.nom} />

              <div className="grid md:grid-cols-2 gap-4">
                <Field name="telephone" label="Téléphone *" type="tel" error={errors.telephone} />
                <Field name="codepostal" label="Code postal *" error={errors.codepostal} />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0A0F1E] mb-1.5">
                  Type de demande *
                </label>
                <select
                  name="service"
                  defaultValue=""
                  className="w-full border border-[#E8E8E8] rounded-lg px-4 py-3 bg-white text-[#1A1A1A] focus:outline-none focus:border-[#FFD700] text-sm"
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
                <label className="block text-sm font-bold text-[#0A0F1E] mb-1.5">
                  Description du problème *
                </label>
                <textarea
                  name="description"
                  rows={4}
                  maxLength={1200}
                  className="w-full border border-[#E8E8E8] rounded-lg px-4 py-3 bg-white text-[#1A1A1A] focus:outline-none focus:border-[#FFD700] resize-none text-sm"
                  placeholder="Décrivez brièvement votre problème ou besoin..."
                />
                {errors.description && <p className="text-red-600 text-xs mt-1">{errors.description}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0A0F1E] mb-1.5">
                  Joindre une photo (facultatif)
                </label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  className="block w-full text-sm text-[#666666] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-[#0A0F1E] file:text-white hover:file:bg-[#0A0F1E]/90 cursor-pointer"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFD700] text-[#0A0F1E] font-extrabold py-4 rounded-lg text-base hover:brightness-95 transition shadow-md mt-2"
              >
                Valider ma demande
              </button>
            </form>
          )}
        </div>

        {/* Contact info */}
        <aside className="lg:col-span-2 fade-on-scroll">
          <div className="bg-[#0A0F1E] text-white rounded-xl p-7 md:p-8 sticky top-24 space-y-6">
            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-[#FFD700] mt-0.5 shrink-0" />
              <div>
                <a href="tel:0612345678" className="font-extrabold text-[#FFD700] text-xl">
                  06 12 34 56 78
                </a>
                <p className="text-white/70 text-sm mt-0.5">c'est moi qui réponds</p>
                <p className="text-white/60 text-sm">Lun-Sam 8h-19h</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-[#FFD700] mt-0.5 shrink-0" />
              <div>
                <a href="mailto:karim.kbelec@gmail.com" className="text-white/90 text-sm hover:text-[#FFD700] transition break-all">
                  karim.kbelec@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-[#FFD700] mt-0.5 shrink-0" />
              <div className="text-white/80 text-sm leading-relaxed">
                Toulouse et 30km autour<br />
                Blagnac, Colomiers, Tournefeuille,<br />
                Muret, Ramonville, Balma…
              </div>
            </div>

            <p className="text-white/50 text-xs italic border-t border-white/10 pt-5">
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
      <label className="block text-sm font-bold text-[#0A0F1E] mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full border border-[#E8E8E8] rounded-lg px-4 py-3 bg-white text-[#1A1A1A] focus:outline-none focus:border-[#FFD700] text-sm"
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}

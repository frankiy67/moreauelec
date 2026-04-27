import { useState } from "react";
import { Phone, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  prenom: z.string().trim().min(1, "Votre prénom").max(80),
  telephone: z.string().trim().min(8, "Numéro un peu court").max(20),
  message: z.string().trim().max(1000).optional(),
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
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="mb-10 fade-on-scroll">
          <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">
            Me contacter
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
            Laissez votre numéro,{" "}
            <span className="marker">je vous rappelle</span>.
          </h2>
          <p className="text-foreground/70">
            Si je suis sur un chantier je ne décroche pas tout de suite —
            mais je rappelle dans la journée.
          </p>
        </div>

        {sent ? (
          <div className="bg-paper border-2 border-accent rounded-lg p-10 text-center fade-on-scroll">
            <CheckCircle2 className="w-14 h-14 text-accent mx-auto mb-4" />
            <h3 className="font-serif text-2xl mb-2">Bien reçu !</h3>
            <p className="text-foreground/70">
              Je vous rappelle dès que possible — souvent dans l'heure
              pendant les horaires d'ouverture.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="bg-paper border border-border rounded-lg p-6 md:p-8 space-y-5 fade-on-scroll"
            noValidate
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field name="prenom" label="Votre prénom" error={errors.prenom} />
              <Field
                name="telephone"
                label="Votre téléphone"
                type="tel"
                placeholder="06 ..."
                error={errors.telephone}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                En 2 lignes, qu'est-ce qui se passe ?
              </label>
              <textarea
                name="message"
                rows={4}
                maxLength={1000}
                placeholder="Ex : disjoncteur qui saute depuis hier soir, je suis sur [VILLE]..."
                className="w-full bg-white border border-border rounded-md px-4 py-3 focus:outline-none focus:border-accent resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-4 rounded-md hover:bg-primary/90 transition"
            >
              Je vous rappelle
            </button>
          </form>
        )}

        <div className="mt-10 text-center fade-on-scroll">
          <p className="text-foreground/70 mb-2">Ou appelez directement :</p>
          <a
            href="tel:[PHONE]"
            className="inline-flex items-center gap-2 font-serif text-2xl md:text-3xl text-primary hover:text-accent transition"
          >
            <Phone className="w-6 h-6" />
            [PHONE]
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            (c'est moi qui réponds — lun. à sam., 8h–19h)
          </p>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-white border border-border rounded-md px-4 py-3 focus:outline-none focus:border-accent"
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}

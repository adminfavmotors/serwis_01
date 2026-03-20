"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCheck, Clock3, Loader2, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Imię i nazwisko musi mieć co najmniej 2 znaki" }),
  phone: z
    .string()
    .min(9, { message: "Podaj prawidłowy numer telefonu" })
    .regex(/^[\d\s\+\-\(\)]{9,}$/, {
      message: "Nieprawidłowy format numeru telefonu",
    }),
  car: z.string().min(2, { message: "Podaj markę i model pojazdu" }),
  problem: z
    .string()
    .min(10, { message: "Opis musi mieć co najmniej 10 znaków" }),
  date: z.string().min(1, { message: "Wybierz preferowany termin" }),
  rodo: z
    .boolean()
    .refine((val) => val === true, {
      message: "Zgoda na przetwarzanie danych jest wymagana",
    }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    content: (
      <p className="text-base leading-relaxed text-white">
        ul. Przemysłowa 12, 30-701 Kraków
      </p>
    ),
  },
  {
    icon: Phone,
    title: "Telefon",
    content: (
      <p className="text-base leading-relaxed text-white">+48 123 456 789</p>
    ),
  },
  {
    icon: Clock3,
    title: "Godziny",
    content: (
      <div className="space-y-1 text-base leading-relaxed text-white">
        <p>Pn-Pt 08:00–18:00</p>
        <p>Sob 09:00–14:00</p>
      </div>
    ),
  },
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const now = new Date();
  const timezoneOffsetMs = now.getTimezoneOffset() * 60 * 1000;
  const today = new Date(now.getTime() - timezoneOffsetMs)
    .toISOString()
    .split("T")[0];

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      car: "",
      problem: "",
      date: "",
      rodo: false,
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: values.name,
          phone: values.phone,
          vehicle: values.car,
          problem: values.problem,
          preferredDate: values.date,
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Wystąpił błąd. Spróbuj ponownie lub zadzwoń do nas bezpośrednio.",
        );
      }

      setIsSubmitted(true);
      form.reset();
    } catch {
      setSubmitError(
        "Wystąpił błąd. Spróbuj ponownie lub zadzwoń do nas bezpośrednio.",
      );
    }
  });

  return (
    <section id="kontakt" className="section-shell scroll-mt-28 bg-bg">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[4px] border border-border bg-surface p-6 md:p-8">
            <SectionTitle
              title="UMÓW WIZYTĘ"
              subtitle="Napisz do nas, a odezwiemy się z potwierdzeniem terminu i wstępną wyceną."
            />

            <div className="mt-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-accent text-bg"
                  >
                    <CheckCheck size={40} strokeWidth={1.5} />
                  </motion.div>
                  <p className="text-[20px] text-white">
                    Dziękujemy! Odezwiemy się wkrótce z potwierdzeniem terminu.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-5" onSubmit={onSubmit} noValidate>
                  <FormField
                    label="Imię i nazwisko"
                    htmlFor="name"
                    error={form.formState.errors.name?.message}
                  >
                    <input
                      {...form.register("name")}
                      id="name"
                      type="text"
                      placeholder="np. Jan Kowalski"
                      aria-label="Imię i nazwisko"
                      className={inputClassName(form.formState.errors.name?.message)}
                    />
                  </FormField>

                  <FormField
                    label="Numer telefonu"
                    htmlFor="phone"
                    error={form.formState.errors.phone?.message}
                  >
                    <input
                      {...form.register("phone")}
                      id="phone"
                      type="tel"
                      placeholder="np. +48 600 000 000"
                      aria-label="Numer telefonu"
                      className={inputClassName(form.formState.errors.phone?.message)}
                    />
                  </FormField>

                  <FormField
                    label="Marka i model pojazdu"
                    htmlFor="car"
                    error={form.formState.errors.car?.message}
                  >
                    <input
                      {...form.register("car")}
                      id="car"
                      type="text"
                      placeholder="np. Volkswagen Golf VII 1.6 TDI"
                      aria-label="Marka i model pojazdu"
                      className={inputClassName(form.formState.errors.car?.message)}
                    />
                  </FormField>

                  <FormField
                    label="Opis problemu"
                    htmlFor="problem"
                    error={form.formState.errors.problem?.message}
                  >
                    <textarea
                      {...form.register("problem")}
                      id="problem"
                      rows={5}
                      placeholder="Opisz objawy lub usterkę, którą chcesz naprawić..."
                      aria-label="Opis problemu z pojazdem"
                      className={inputClassName(
                        form.formState.errors.problem?.message,
                      )}
                    />
                  </FormField>

                  <FormField
                    label="Preferowany termin"
                    htmlFor="date"
                    error={form.formState.errors.date?.message}
                  >
                    <input
                      {...form.register("date")}
                      id="date"
                      type="date"
                      min={today}
                      aria-label="Preferowany termin wizyty"
                      className={inputClassName(form.formState.errors.date?.message)}
                    />
                  </FormField>

                  <div className="space-y-2">
                    <label
                      htmlFor="rodo"
                      className="flex cursor-pointer items-start gap-3"
                    >
                      <input
                        {...form.register("rodo")}
                        id="rodo"
                        type="checkbox"
                        className="mt-1 h-4 w-4 accent-[#FF6B00]"
                      />
                      <span className="text-sm text-muted">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych
                        przez MotoFix Serwis{" "}
                        w celu udzielenia odpowiedzi na przesłane zapytanie,
                        zgodnie z{" "}
                        <a
                          href="/polityka-prywatnosci"
                          className="text-accent underline"
                        >
                          Polityką Prywatności
                        </a>
                        . Zgoda jest wymagana.*
                      </span>
                    </label>
                    {form.formState.errors.rodo?.message ? (
                      <p className="text-[13px] text-accent">
                        {form.formState.errors.rodo.message}
                      </p>
                    ) : null}
                  </div>

                  {submitError ? (
                    <p className="text-[13px] text-accent">{submitError}</p>
                  ) : null}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2
                          size={18}
                          className="animate-spin"
                          strokeWidth={1.5}
                        />
                        Wysyłanie...
                      </span>
                    ) : (
                      "Wyślij zgłoszenie"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[4px] border border-border bg-surface p-6 text-white md:p-8">
              <div className="space-y-5">
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
                  Kontakt bezpośredni
                </p>
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 border-t border-border pt-5 first:border-t-0 first:pt-0"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] bg-accent text-bg">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                          {item.title}
                        </p>
                        {item.content}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              aria-label="Mapa dojazdu do warsztatu MotoFix Serwis"
              className="rounded-[4px] border border-border bg-surface p-6"
            >
              <div className="map-wrapper w-full overflow-hidden rounded-sm border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.1234!2d19.9450!3d50.0647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6b6b6b6b6b%3A0x0!2zTW90b0ZpeCBTZXJ3aXM!5e0!3m2!1spl!2spl!4v1234567890!5m2!1spl!2spl"
                  width="100%"
                  height="280"
                  className="block h-[220px] w-full md:h-[280px]"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MotoFix Serwis — lokalizacja Kraków ul. Przemysłowa 12"
                />
              </div>
              <a
                href="https://maps.google.com/?q=ul.+Przemysłowa+12,+30-701+Kraków"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Otwórz w Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-semibold uppercase tracking-[0.12em] text-white"
      >
        {label}
      </label>
      {children}
      {error ? <span className="block text-[13px] text-accent">{error}</span> : null}
    </div>
  );
}

function inputClassName(error?: string) {
  return cn(
    "contact-input min-h-[56px] w-full placeholder:text-muted",
    error && "error",
  );
}

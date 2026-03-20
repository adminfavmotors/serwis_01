"use client";

import { CheckCheck, Clock3, Loader2, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const phoneRegex = /^(?:\+48)?[\s-]?(?:\d[\s-]?){9}$/;

const contactSchema = z.object({
  fullName: z.string().min(2, "Podaj imię i nazwisko."),
  phone: z
    .string()
    .min(1, "Podaj numer telefonu.")
    .refine(
      (value) => phoneRegex.test(value.trim()),
      "Podaj poprawny polski numer telefonu.",
    ),
  vehicle: z.string().min(2, "Podaj markę i model pojazdu."),
  problem: z.string().min(10, "Opisz problem w co najmniej 10 znakach."),
  preferredDate: z.string().min(1, "Wybierz preferowany termin."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    value: "ul. Przemysłowa 12, 30-701 Kraków",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+48 123 456 789",
  },
  {
    icon: Clock3,
    title: "Godziny",
    value: "Pn-Pt 08:00-18:00, Sob 09:00-14:00",
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
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      vehicle: "",
      problem: "",
      preferredDate: "",
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
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Nie udało się wysłać formularza.");
      }

      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Wystąpił błąd. Spróbuj ponownie za chwilę.",
      );
    }
  });

  return (
    <section id="kontakt" className="section-shell scroll-mt-28 bg-surface">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[8px] border-2 border-dark bg-bg p-6 shadow-card md:p-8">
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
                    className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-dark bg-accent shadow-card"
                  >
                    <CheckCheck
                      size={40}
                      strokeWidth={1.5}
                      className="text-dark"
                    />
                  </motion.div>
                  <h3 className="text-h3 font-semibold text-dark">
                    Dziękujemy! Odezwiemy się wkrótce.
                  </h3>
                </motion.div>
              ) : (
                <form className="space-y-5" onSubmit={onSubmit} noValidate>
                  <FormField
                    label="Imię i nazwisko"
                    error={form.formState.errors.fullName?.message}
                  >
                    <input
                      {...form.register("fullName")}
                      type="text"
                      placeholder="Jan Kowalski"
                      className={inputClassName(
                        form.formState.errors.fullName?.message,
                      )}
                    />
                  </FormField>

                  <FormField
                    label="Numer telefonu"
                    error={form.formState.errors.phone?.message}
                  >
                    <input
                      {...form.register("phone")}
                      type="tel"
                      placeholder="+48 123 456 789"
                      className={inputClassName(
                        form.formState.errors.phone?.message,
                      )}
                    />
                  </FormField>

                  <FormField
                    label="Marka i model pojazdu"
                    error={form.formState.errors.vehicle?.message}
                  >
                    <input
                      {...form.register("vehicle")}
                      type="text"
                      placeholder="Volkswagen Golf VII"
                      className={inputClassName(
                        form.formState.errors.vehicle?.message,
                      )}
                    />
                  </FormField>

                  <FormField
                    label="Opis problemu"
                    error={form.formState.errors.problem?.message}
                  >
                    <textarea
                      {...form.register("problem")}
                      rows={5}
                      placeholder="Opisz, co dzieje się z autem."
                      className={inputClassName(
                        form.formState.errors.problem?.message,
                      )}
                    />
                  </FormField>

                  <FormField
                    label="Preferowany termin"
                    error={form.formState.errors.preferredDate?.message}
                  >
                    <input
                      {...form.register("preferredDate")}
                      type="date"
                      min={today}
                      className={inputClassName(
                        form.formState.errors.preferredDate?.message,
                      )}
                    />
                  </FormField>

                  {submitError ? (
                    <p className="text-[13px] text-accent-2">{submitError}</p>
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
            <div className="rounded-[8px] border-2 border-dark bg-dark p-6 text-white shadow-card md:p-8">
              <div className="space-y-5">
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
                  Kontakt bezpośredni
                </p>
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 border-t-2 border-white/10 pt-5 first:border-t-0 first:pt-0"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-accent text-dark">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                          {item.title}
                        </p>
                        <p className="text-base leading-relaxed text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[8px] border-2 border-dark bg-[#d9d9d2] p-8 shadow-card">
              <div className="flex min-h-[260px] items-center justify-center border-2 border-dashed border-dark/40 bg-white/40 px-6 text-center">
                <p className="font-body text-lg font-medium text-dark">
                  Mapa Google — do wdrożenia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold uppercase tracking-[0.12em] text-dark">
        {label}
      </span>
      {children}
      {error ? (
        <span className="block text-[13px] text-accent-2">{error}</span>
      ) : null}
    </label>
  );
}

function inputClassName(error?: string) {
  return cn(
    "min-h-[56px] w-full rounded-[4px] border-2 bg-surface px-4 py-[14px] text-base text-dark outline-none transition-all duration-150 ease-out placeholder:text-muted/70 focus:border-accent focus:shadow-input",
    error ? "border-accent-2" : "border-dark",
  );
}

import { CheckCircle, ClipboardCheck, Phone } from "lucide-react";

import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Zadzwoń lub napisz",
    description:
      "Opisz objawy, podaj model auta i wybierz wygodny termin przyjęcia do serwisu.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Diagnoza i wycena",
    description:
      "Sprawdzamy auto, przedstawiamy zakres prac i potwierdzamy koszt przed naprawą.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Naprawiamy, oddajemy",
    description:
      "Realizujemy usługę, kontaktujemy się po zakończeniu i wydajemy gotowy samochód.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-shell bg-surface">
      <div className="container">
        <div className="space-y-14">
          <SectionTitle
            title="JAK TO DZIAŁA"
            subtitle="Prosty proces, dzięki któremu od pierwszego kontaktu wiesz, co dzieje się z Twoim autem."
            align="center"
          />

          <div className="relative">
            <div
              className="absolute left-[16.5%] top-[64px] hidden w-[67%] lg:block"
              style={{ borderTop: "2px dashed rgba(255,107,0,0.3)" }}
            />

            <div className="grid gap-8 lg:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="relative overflow-hidden rounded-[4px] border border-border bg-[var(--surface-2)] p-8"
                  >
                    <p
                      className="pointer-events-none absolute left-4 top-[-20px] select-none font-display leading-none opacity-[0.08]"
                      style={{
                        fontSize: "120px",
                        color: "transparent",
                        WebkitTextStroke: "1px #FF6B00",
                      }}
                    >
                      {step.number}
                    </p>
                    <div className="relative z-10 space-y-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[4px] bg-accent text-bg">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-[20px] text-white">{step.title}</h3>
                        <p className="max-w-[320px] text-[14px] leading-[1.7] text-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

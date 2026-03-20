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
            <div className="absolute left-[29px] top-10 hidden h-[calc(100%-80px)] border-l-2 border-dashed border-accent/40 md:hidden" />
            <div className="absolute left-[16.5%] top-[52px] hidden w-[67%] border-t-2 border-dashed border-accent/40 lg:block" />

            <div className="grid gap-8 lg:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="relative overflow-hidden rounded-[8px] border-2 border-dark bg-bg p-8 shadow-card"
                  >
                    <p
                      className="pointer-events-none absolute right-5 top-3 font-mono text-[96px] leading-none opacity-20"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "2px #E8FF00",
                      }}
                    >
                      {step.number}
                    </p>
                    <div className="relative z-10 space-y-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dark bg-accent text-dark">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-h3 font-semibold text-dark">
                          {step.title}
                        </h3>
                        <p className="max-w-[320px] text-body text-muted">
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

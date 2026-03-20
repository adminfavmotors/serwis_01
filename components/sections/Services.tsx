import {
  Crosshair,
  Droplets,
  Hammer,
  MonitorCheck,
  RotateCcw,
  Wind,
} from "lucide-react";

import { SectionTitle } from "@/components/ui/SectionTitle";

const services = [
  {
    icon: Droplets,
    title: "Wymiana oleju i filtrów",
    description:
      "Szybki serwis eksploatacyjny z doborem części i płynów do konkretnego silnika.",
    price: "od 89 zł",
  },
  {
    icon: Crosshair,
    title: "Geometria kół",
    description:
      "Precyzyjne ustawienie zbieżności poprawiające prowadzenie i zużycie opon.",
    price: "od 120 zł",
  },
  {
    icon: MonitorCheck,
    title: "Diagnostyka komputerowa",
    description:
      "Odczyt błędów, analiza parametrów i wskazanie realnej przyczyny problemu.",
    price: "od 150 zł",
  },
  {
    icon: RotateCcw,
    title: "Wymiana i wyważanie opon",
    description:
      "Kompleksowa obsługa sezonowa z kontrolą stanu bieżnika i ciśnienia.",
    price: "od 40 zł/szt",
  },
  {
    icon: Hammer,
    title: "Naprawy blacharsko-lakiernicze",
    description:
      "Od drobnych poprawek po większe naprawy po kolizjach i uszkodzeniach parkingowych.",
    price: "wycena indywidualna",
  },
  {
    icon: Wind,
    title: "Serwis klimatyzacji",
    description:
      "Odgrzybianie, szczelność układu i nabijanie czynnika dla pełnego komfortu jazdy.",
    price: "od 199 zł",
  },
];

export function Services() {
  return (
    <section id="uslugi" className="section-padding scroll-mt-28 bg-bg">
      <div className="h-1 w-full bg-accent" />
      <div className="container-site pt-12">
        <div className="space-y-12">
          <SectionTitle title="NASZE USŁUGI" align="center" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="flex h-full flex-col rounded-[4px] border border-border border-l-[3px] border-l-accent bg-surface p-7 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-accent"
                >
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div className="rounded-[6px] bg-accent p-[10px] text-bg">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="rounded-[2px] bg-accent-glow px-[10px] py-1 font-mono text-[13px] text-accent">
                      {service.price}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-display text-[20px] text-text">
                      {service.title}
                    </h3>
                    <p className="text-body-sm text-muted">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

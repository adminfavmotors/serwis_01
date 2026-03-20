import {
  Crosshair,
  Droplets,
  Hammer,
  MonitorCheck,
  RotateCcw,
  Wind,
} from "lucide-react";

import { Card } from "@/components/ui/Card";
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
    <section id="uslugi" className="section-shell scroll-mt-28 bg-surface">
      <div className="mb-12 h-1 w-full bg-accent" />
      <div className="container">
        <div className="space-y-12">
          <SectionTitle title="NASZE USŁUGI" align="center" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card key={service.title} className="flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div className="rounded-[8px] bg-dark p-3 text-accent">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <span className="rounded-[4px] border-2 border-dark bg-bg px-3 py-2 font-mono text-sm uppercase tracking-[0.08em] text-dark">
                      {service.price}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-h3 font-semibold text-dark">
                      {service.title}
                    </h3>
                    <p className="text-body text-muted">{service.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

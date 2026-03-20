import {
  Aperture,
  CarFront,
  Compass,
  ShieldCheck,
  Snowflake,
  Wrench,
} from "lucide-react";

import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

const services = [
  {
    icon: Wrench,
    title: "Wymiana oleju i filtrów",
    description:
      "Szybki serwis eksploatacyjny z doborem części i płynów do konkretnego silnika.",
    price: "od 89 zł",
  },
  {
    icon: Compass,
    title: "Geometria kół",
    description:
      "Precyzyjne ustawienie zbieżności poprawiające prowadzenie i zużycie opon.",
    price: "od 120 zł",
  },
  {
    icon: Aperture,
    title: "Diagnostyka komputerowa",
    description:
      "Odczyt błędów, analiza parametrów i wskazanie realnej przyczyny problemu.",
    price: "od 150 zł",
  },
  {
    icon: CarFront,
    title: "Wymiana i wyważanie opon",
    description:
      "Kompleksowa obsługa sezonowa z kontrolą stanu bieżnika i ciśnienia.",
    price: "od 40 zł/szt",
  },
  {
    icon: ShieldCheck,
    title: "Naprawy blacharsko-lakiernicze",
    description:
      "Od drobnych poprawek po większe naprawy po kolizjach i uszkodzeniach parkingowych.",
    price: "wycena indywidualna",
  },
  {
    icon: Snowflake,
    title: "Serwis klimatyzacji",
    description:
      "Odgrzybianie, szczelność układu i nabijanie czynnika dla pełnego komfortu jazdy.",
    price: "od 199 zł",
  },
];

export function Services() {
  return (
    <section id="uslugi" className="section-shell accent-strip bg-surface">
      <div className="container">
        <div className="space-y-12">
          <SectionTitle title="NASZE USŁUGI" align="center" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card key={service.title} className="flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-dark text-accent">
                      <Icon size={24} strokeWidth={1.5} />
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

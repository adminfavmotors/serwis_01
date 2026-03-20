import { Star } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

const testimonials = [
  {
    quote:
      "Wszystko jasno wyjaśnione, termin dotrzymany i auto odebrane jeszcze tego samego dnia. Wrócę bez wahania.",
    author: "Marek K.",
    car: "VW Golf VII",
  },
  {
    quote:
      "Bardzo sprawna diagnostyka i uczciwa wycena. Czuć, że zespół naprawdę zna się na swojej pracy.",
    author: "Anna W.",
    car: "Toyota Corolla",
  },
  {
    quote:
      "Wreszcie warsztat, który nie mówi zagadkami. Dostałem konkrety, zdjęcia i sensowny kosztorys.",
    author: "Piotr S.",
    car: "BMW E46",
  },
  {
    quote:
      "Świetny kontakt, szybka wymiana opon i dodatkowo sprawdzenie kilku rzeczy, o które nawet nie prosiłam.",
    author: "Karolina M.",
    car: "Ford Focus",
  },
];

export function Testimonials() {
  return (
    <section id="opinie" className="section-shell scroll-mt-28 bg-bg">
      <div className="container">
        <div className="space-y-12">
          <SectionTitle
            title="OPINIE KLIENTÓW"
            subtitle="Kilka słów od kierowców, którzy wracają do nas przy kolejnych naprawach i przeglądach."
            align="center"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <Card key={item.author} className="bg-surface">
                <div className="space-y-6">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={`${item.author}-${index}`}
                        size={24}
                        strokeWidth={1.5}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <p className="text-lg italic leading-[1.7] text-dark">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="space-y-1">
                    <p className="text-base font-bold text-dark">{item.author}</p>
                    <p className="font-mono text-sm uppercase tracking-[0.08em] text-muted">
                      {item.car}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

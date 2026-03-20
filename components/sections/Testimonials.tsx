import { Car, Star } from "lucide-react";

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
              <article
                key={item.author}
                className="relative overflow-hidden rounded-[4px] border border-border bg-surface p-7 transition-all duration-200 hover:border-accent"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-3 select-none font-display text-8xl leading-none"
                  style={{ color: "#FF6B00", opacity: 0.08 }}
                >
                  &ldquo;
                </span>

                <div className="relative z-10 space-y-6">
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

                  <p className="font-body text-[15px] italic leading-[1.7] text-[#C0C0C0]">
                    {item.quote}
                  </p>

                  <div className="space-y-1">
                    <p className="font-body text-base font-bold text-[#F0F0F0]">
                      {item.author}
                    </p>
                    <p className="inline-flex items-center gap-2 font-mono text-[12px] text-accent">
                      <Car size={16} strokeWidth={1.5} />
                      {item.car}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

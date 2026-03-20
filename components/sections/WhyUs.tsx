"use client";

import { Clock3, Shield, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

const trustPoints = [
  {
    icon: Shield,
    title: "Jasne zasady napraw",
    description:
      "Najpierw diagnozujemy i wyceniamy. Bez niespodzianek przy odbiorze auta.",
  },
  {
    icon: Sparkles,
    title: "Nowoczesne zaplecze",
    description:
      "Pracujemy na sprawdzonym sprzęcie diagnostycznym i dobrych częściach.",
  },
  {
    icon: Users,
    title: "Zespół z doświadczeniem",
    description:
      "Mechanicy i doradcy, którzy potrafią wytłumaczyć problem prostym językiem.",
  },
  {
    icon: Clock3,
    title: "Szybkie terminy",
    description:
      "Dbamy o sprawny proces, dlatego większość prac zamykamy nawet w 24 godziny.",
  },
];

const gearTexture =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.02)' stroke-width='1.4' opacity='1'%3E%3Cpath d='M30 18L33 22L38 21L39 26L44 28L42 33L46 37L42 40L43 46L38 47L36 52L30 50L24 52L22 47L17 46L18 40L14 37L18 33L16 28L21 26L22 21L27 22L30 18Z'/%3E%3Ccircle cx='30' cy='35' r='6'/%3E%3C/g%3E%3C/svg%3E\")";

function StatCounter({
  target,
  suffix,
  label,
  index,
}: {
  target: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { count, elementRef } = useCountUp(target, 2000);

  return (
    <div
      ref={elementRef}
      className={cn(
        "space-y-3 bg-transparent px-0 py-6 sm:px-6",
        index < 3 && "border-b border-white/10",
        index === 0 && "sm:border-r",
        index === 1 && "sm:border-b",
        index === 2 && "sm:border-r sm:border-b-0",
      )}
    >
      <div className="flex items-end gap-1">
        <span className="font-mono text-[56px] font-bold leading-none text-accent md:text-[72px]">
          {count}
        </span>
        <span className="font-mono text-[28px] font-bold leading-none text-accent md:text-[36px]">
          {suffix}
        </span>
      </div>
      <p className="text-[13px] uppercase tracking-[0.15em] text-white/60">
        {label}
      </p>
    </div>
  );
}

export function WhyUs() {
  return (
    <section
      id="o-nas"
      className="section-shell section-dark scroll-mt-28"
      style={{
        backgroundImage: gearTexture,
        backgroundRepeat: "repeat",
        backgroundSize: "60px 60px",
      }}
    >
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="space-y-8">
            <SectionTitle
              title="DLACZEGO MY"
              subtitle="Łączymy sprawny serwis, uczciwą komunikację i tempo, które naprawdę ułatwia życie."
            />
            <div className="grid rounded-[8px] border border-white/10 bg-white/5 sm:grid-cols-2">
              <StatCounter
                target={15}
                suffix="+"
                label="LAT NA RYNKU"
                index={0}
              />
              <StatCounter
                target={3000}
                suffix="+"
                label="ZADOWOLONYCH KLIENTÓW"
                index={1}
              />
              <StatCounter
                target={98}
                suffix="%"
                label="POZYTYWNYCH OPINII"
                index={2}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={cn("space-y-3 bg-transparent px-0 py-6 sm:px-6")}
              >
                <div className="flex items-end gap-1">
                  <span className="font-mono text-[56px] font-bold leading-none text-accent md:text-[72px]">
                    24
                  </span>
                  <span className="font-mono text-[28px] font-bold leading-none text-accent md:text-[36px]">
                    H
                  </span>
                </div>
                <p className="text-[13px] uppercase tracking-[0.15em] text-white/60">
                  CZAS REALIZACJI
                </p>
              </motion.div>
            </div>
          </div>

          <div className="grid gap-4 self-center">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex gap-5 rounded-[8px] border-2 border-white/15 bg-white/5 p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-accent text-dark">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-h3 font-semibold text-white">
                      {point.title}
                    </h3>
                    <p className="text-body text-white/70">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

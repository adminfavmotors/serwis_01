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
        "space-y-2 px-0 py-6 sm:px-6",
        index < 3 && "border-b border-border",
        index === 0 && "sm:border-r sm:border-border",
        index === 2 && "sm:border-r sm:border-border sm:border-b-0",
        index === 1 && "sm:border-b sm:border-border",
      )}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(56px, 7vw, 80px)",
          color: "#FF6B00",
          lineHeight: 1,
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#888888",
          marginTop: "8px",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function WhyUs() {
  return (
    <section
      id="o-nas"
      className="section-shell scroll-mt-28 bg-bg"
      style={{ borderTop: "3px solid #FF6B00" }}
    >
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="space-y-8">
            <SectionTitle
              title="DLACZEGO MY"
              subtitle="Łączymy sprawny serwis, uczciwą komunikację i tempo, które naprawdę ułatwia życie."
            />
            <div className="grid border-y border-border sm:grid-cols-2">
              <StatCounter target={15} suffix="+" label="LAT NA RYNKU" index={0} />
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
                className="space-y-2 px-0 py-6 sm:px-6"
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(56px, 7vw, 80px)",
                    color: "#FF6B00",
                    lineHeight: 1,
                  }}
                >
                  24H
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "#888888",
                    marginTop: "8px",
                  }}
                >
                  CZAS REALIZACJI
                </div>
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
                  className="flex gap-5 rounded-[4px] border border-border bg-surface p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[4px] bg-accent text-bg">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-[20px] text-white">{point.title}</h3>
                    <p className="text-[14px] leading-[1.7] text-muted">
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

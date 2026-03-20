"use client";

import { Clock3, Shield, Sparkles, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const stats = [
  { value: 15, suffix: "+", label: "LAT NA RYNKU", animate: true },
  {
    value: 3000,
    suffix: "+",
    label: "ZADOWOLONYCH KLIENTÓW",
    animate: true,
  },
  { value: 98, suffix: "%", label: "POZYTYWNYCH OPINII", animate: true },
  { value: 24, suffix: "H", label: "CZAS REALIZACJI", animate: false },
];

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

function useCountUp(target: number, shouldStart: boolean, duration = 1100) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }

    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(target * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [duration, shouldStart, target]);

  return count;
}

function formatStatValue(value: number) {
  return new Intl.NumberFormat("pl-PL").format(value);
}

function StatCounter({
  value,
  suffix,
  label,
  animate,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  animate: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const count = useCountUp(value, isInView && animate);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
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
          {animate ? formatStatValue(count) : formatStatValue(value)}
        </span>
        <span className="font-mono text-[28px] font-bold leading-none text-accent md:text-[36px]">
          {suffix}
        </span>
      </div>
      <p className="text-[13px] uppercase tracking-[0.15em] text-white/60">
        {label}
      </p>
    </motion.div>
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
              {stats.map((stat, index) => (
                <StatCounter key={stat.label} index={index} {...stat} />
              ))}
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

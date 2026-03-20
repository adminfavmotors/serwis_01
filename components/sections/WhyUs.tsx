"use client";

import { Clock3, Shield, Sparkles, Users } from "lucide-react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

import { SectionTitle } from "@/components/ui/SectionTitle";

const stats = [
  { value: 15, prefix: "", suffix: "+", label: "LAT NA RYNKU" },
  { value: 3000, prefix: "", suffix: "+", label: "ZADOWOLONYCH KLIENTÓW" },
  { value: 98, prefix: "", suffix: "%", label: "POZYTYWNYCH OPINII" },
  { value: 24, prefix: "", suffix: "H", label: "CZAS REALIZACJI" },
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

function StatCounter({
  value,
  prefix,
  suffix,
  label,
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(motionValue, value, {
      duration: 1.1,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, motionValue, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-2 rounded-[8px] border-2 border-white/15 bg-white/5 p-6"
    >
      <motion.p className="font-mono text-5xl text-accent md:text-[64px]">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.p>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
        {label}
      </p>
    </motion.div>
  );
}

export function WhyUs() {
  return (
    <section id="o-nas" className="section-shell section-dark">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="space-y-8">
            <SectionTitle
              title="DLACZEGO MY"
              subtitle="Laczymy sprawny serwis, uczciwa komunikacje i tempo, ktore naprawde ulatwia zycie."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
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
                  transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
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

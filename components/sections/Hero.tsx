"use client";

import Link from "next/link";
import { Award, Gauge, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";

const headingLines = ["TWÓJ SAMOCHÓD", "W DOBRYCH", "RĘKACH"];

const trustBadges = [
  {
    icon: Gauge,
    label: "15 lat doświadczenia",
  },
  {
    icon: Award,
    label: "3000+ napraw",
  },
  {
    icon: ShieldCheck,
    label: "Gwarancja na usługi",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-dark bg-hero-grid bg-[length:220px_220px] bg-repeat pt-24 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(232,255,0,0.12)_0%,rgba(10,10,10,0)_28%,rgba(10,10,10,0)_100%)]" />
      <div className="container relative z-10">
        <div className="grid items-center gap-12 py-14 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="inline-flex items-center rounded-[4px] border-2 border-white/20 bg-white/5 px-4 py-2 font-mono text-sm uppercase tracking-[0.22em] text-accent"
              >
                Kraków • ul. Przemysłowa 12
              </motion.p>

              <div className="space-y-1">
                {headingLines.map((line, index) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, y: 48 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.08 * index,
                    }}
                    className="overflow-hidden"
                  >
                    <h1 className="font-display text-display-hero-mobile uppercase leading-[0.9] tracking-[-0.02em] text-white md:text-display-hero">
                      {line}
                    </h1>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.36, ease: "easeOut" }}
                className="max-w-[480px] text-lg leading-[1.6] text-white/70"
              >
                Profesjonalny warsztat samochodowy w Krakowie. Szybka
                diagnostyka, uczciwa wycena i naprawy, po których wracasz na
                drogę bez stresu.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.48, ease: "easeOut" }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild>
                <Link href="#kontakt">Umów wizytę</Link>
              </Button>
              <Button
                variant="secondary"
                asChild
                className="border-white text-white shadow-[4px_4px_0_0_#FFFFFF] hover:bg-white hover:text-dark hover:shadow-[6px_6px_0_0_#FFFFFF]"
              >
                <Link href="#uslugi">Zobacz usługi</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap"
            >
              {trustBadges.map((badge) => {
                const Icon = badge.icon;

                return (
                  <div
                    key={badge.label}
                    className="inline-flex items-center gap-3 rounded-[4px] border-2 border-white/15 bg-white/5 px-4 py-3"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent bg-accent text-dark">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-medium text-white/85">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[460px]"
          >
            <div className="absolute -left-4 top-8 h-24 w-24 rounded-[8px] border-4 border-accent bg-dark" />
            <div className="absolute right-0 top-0 h-12 w-36 border-b-4 border-t-4 border-accent bg-accent" />
            <div className="relative aspect-square rounded-full border-4 border-dark bg-accent shadow-[12px_12px_0_0_#FFFFFF]">
              <div className="absolute inset-[14%] rounded-full border-[18px] border-dark" />
              <div className="absolute left-[18%] top-[38%] h-[18%] w-[62%] rounded-[40px] border-4 border-dark bg-dark" />
              <div className="absolute left-[22%] top-[32%] h-[16%] w-[28%] rounded-t-[38px] border-4 border-dark border-b-0 bg-dark" />
              <div className="absolute right-[15%] top-[43%] h-[10%] w-[16%] rounded-[20px] border-4 border-dark bg-accent-2" />
              <div className="absolute bottom-[18%] left-[20%] h-[18%] w-[18%] rounded-full border-4 border-dark bg-surface" />
              <div className="absolute bottom-[18%] right-[20%] h-[18%] w-[18%] rounded-full border-4 border-dark bg-surface" />
            </div>

            <div className="absolute -bottom-4 left-4 rounded-[8px] border-2 border-dark bg-surface px-4 py-3 text-dark shadow-card">
              <p className="font-mono text-3xl text-accent-2">24H</p>
              <p className="text-sm font-semibold uppercase tracking-[0.12em]">
                Szybka realizacja
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.72 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 md:flex"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.28em]">
            Scroll
          </span>
          <div className="flex h-14 w-8 justify-center rounded-full border-2 border-white/25 p-1">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{
                duration: 1.6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="h-3 w-3 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

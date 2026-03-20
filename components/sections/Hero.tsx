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

const brands = ["VW", "BMW", "TOYOTA", "FORD", "AUDI"];

const speedLinesPattern =
  "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.03' stroke='white' stroke-width='1'%3E%3Cpath d='M-8 40L42 0'/%3E%3Cpath d='M8 40L58 0'/%3E%3C/g%3E%3C/svg%3E\")";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-dark pt-24 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(232,255,0,0.08)_0%,rgba(10,10,10,0)_35%,rgba(10,10,10,0)_100%)]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: speedLinesPattern,
          backgroundRepeat: "repeat",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10">
        <div className="grid items-center gap-14 py-14 lg:grid-cols-[1.3fr_0.9fr] lg:gap-10">
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-3"
              >
                <div className="h-[4px] w-20 bg-accent" />
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                  KRAKÓW / WARSZTAT
                </p>
              </motion.div>

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

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
              className="border-t border-white/10 pt-5"
            >
              <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
                {brands.map((brand, index) => (
                  <span key={brand}>
                    {brand}
                    {index < brands.length - 1 ? " •" : ""}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative hidden h-[320px] items-center justify-center lg:flex"
          >
            <svg
              width="500"
              height="250"
              viewBox="0 0 500 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              <path
                d="M74 156L116 113C137 91 157 80 194 80H309C341 80 362 92 384 116L429 156"
                stroke="#E8FF00"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M60 156H442C452 156 460 164 460 174V180C460 188 454 194 446 194H434"
                stroke="#E8FF00"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M60 156C47 156 36 165 36 178C36 190 46 200 58 200H88"
                stroke="#E8FF00"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M147 98L164 156"
                stroke="#E8FF00"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M326 81L352 156"
                stroke="#E8FF00"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M166 156H353"
                stroke="#E8FF00"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M188 108H308"
                stroke="#E8FF00"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="127" cy="194" r="34" stroke="#E8FF00" strokeWidth="1.5" />
              <circle cx="127" cy="194" r="13" stroke="#E8FF00" strokeWidth="1.5" />
              <circle cx="388" cy="194" r="34" stroke="#E8FF00" strokeWidth="1.5" />
              <circle cx="388" cy="194" r="13" stroke="#E8FF00" strokeWidth="1.5" />
              <path
                d="M453 146L472 146"
                stroke="#E8FF00"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M15 170L0 170"
                stroke="#E8FF00"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
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

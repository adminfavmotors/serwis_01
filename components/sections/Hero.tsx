"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
        -55deg,
        transparent,
        transparent 60px,
        rgba(255,107,0,0.025) 60px,
        rgba(255,107,0,0.025) 61px
      )`,
        }}
      />

      <div className="container mx-auto grid min-h-screen grid-cols-1 items-center gap-12 px-6 py-32 lg:grid-cols-2 lg:px-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2">
            <span
              className="font-mono px-3 py-1.5 text-xs uppercase tracking-[0.25em]"
              style={{
                color: "#FF6B00",
                border: "1px solid rgba(255,107,0,0.35)",
                borderRadius: "2px",
                fontFamily: "var(--font-mono)",
              }}
            >
              ⬡ AUTORYZOWANY SERWIS • KRAKÓW
            </span>
          </div>

          <h1
            className="mb-4 uppercase leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(52px, 8vw, 92px)",
              lineHeight: 0.88,
              color: "#F0F0F0",
              letterSpacing: "-0.01em",
            }}
          >
            TWÓJ SAMOCHÓD
            <br />
            W DOBRYCH
            <br />
            RĘKACH
          </h1>

          <div
            className="my-6"
            style={{ width: "64px", height: "4px", backgroundColor: "#FF6B00" }}
          />

          <p className="max-w-[520px] text-lg leading-[1.75] text-[#888888]">
            Profesjonalny warsztat samochodowy w Krakowie. Szybka diagnostyka,
            uczciwa wycena i naprawy, po których wracasz na drogę bez stresu.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild>
              <Link href="#kontakt">Umów wizytę</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#uslugi">Zobacz usługi</Link>
            </Button>
          </div>

          <div
            className="mt-8 mb-0 w-full"
            style={{ height: "1px", backgroundColor: "#2A2A2A" }}
          />
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {[
              { icon: "clock", text: "15 lat doświadczenia" },
              { icon: "wrench", text: "3000+ napraw" },
              { icon: "shield", text: "Gwarancja na usługi" },
              { icon: "zap", text: "24H realizacja" },
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm"
                  style={{ backgroundColor: "rgba(255,107,0,0.15)" }}
                >
                  {badge.icon === "clock" && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  )}
                  {badge.icon === "wrench" && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  )}
                  {badge.icon === "shield" && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )}
                  {badge.icon === "zap" && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  )}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "#888888",
                    whiteSpace: "nowrap",
                  }}
                >
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          <div
            className="hidden sm:flex items-center gap-0 mt-6 pt-6"
            style={{ borderTop: "1px solid #2A2A2A" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "#555555",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {["VW", "BMW", "TOYOTA", "FORD", "AUDI", "SKODA"].map(
                (brand, index, arr) => (
                  <span key={brand}>
                    {brand}
                    {index < arr.length - 1 && (
                      <span style={{ color: "#FF6B00", margin: "0 10px" }}>
                        •
                      </span>
                    )}
                  </span>
                ),
              )}
            </span>
          </div>
        </div>

        <div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden w-full items-center justify-center lg:flex"
          >
            <svg
              viewBox="0 0 600 280"
              className="w-full max-w-[560px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M80 200 L80 160 Q120 100 200 85 L360 80 Q430 80 480 120 L540 160 L540 200 Z"
                stroke="#FF6B00"
                strokeWidth="2"
                fill="rgba(255,107,0,0.06)"
              />
              <path
                d="M200 85 Q240 45 300 38 Q360 35 400 80"
                stroke="#FF6B00"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M210 83 Q240 55 295 48 L295 83 Z"
                stroke="#FF6B00"
                strokeWidth="1.5"
                fill="rgba(255,107,0,0.08)"
              />
              <path
                d="M300 83 L300 48 Q345 48 390 80 L390 83 Z"
                stroke="#FF6B00"
                strokeWidth="1.5"
                fill="rgba(255,107,0,0.08)"
              />
              <circle
                cx="160"
                cy="200"
                r="40"
                stroke="#FF6B00"
                strokeWidth="2"
                fill="rgba(255,107,0,0.05)"
              />
              <circle
                cx="160"
                cy="200"
                r="22"
                stroke="#FF6B00"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="160" cy="200" r="5" fill="#FF6B00" />
              <circle
                cx="460"
                cy="200"
                r="40"
                stroke="#FF6B00"
                strokeWidth="2"
                fill="rgba(255,107,0,0.05)"
              />
              <circle
                cx="460"
                cy="200"
                r="22"
                stroke="#FF6B00"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="460" cy="200" r="5" fill="#FF6B00" />
              <line
                x1="40"
                y1="240"
                x2="560"
                y2="240"
                stroke="#FF6B00"
                strokeWidth="1"
                strokeDasharray="8 5"
                opacity="0.35"
              />
              <line
                x1="20"
                y1="148"
                x2="65"
                y2="148"
                stroke="#FF6B00"
                strokeWidth="2"
                opacity="0.55"
              />
              <line
                x1="10"
                y1="163"
                x2="62"
                y2="163"
                stroke="#FF6B00"
                strokeWidth="1.5"
                opacity="0.35"
              />
              <line
                x1="18"
                y1="178"
                x2="58"
                y2="178"
                stroke="#FF6B00"
                strokeWidth="1"
                opacity="0.25"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#o-nas", label: "O nas" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50"
        style={{
          background: isScrolled ? "rgba(13,13,13,0.95)" : "#0D0D0D",
          borderBottom: "1px solid #2A2A2A",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-20">
          <a href="#top" className="flex shrink-0 flex-col gap-0 leading-none no-underline">
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                color: "#F0F0F0",
                letterSpacing: "0.06em",
                lineHeight: 1,
              }}
            >
              MOTOFIX
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "9px",
                color: "#FF6B00",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                lineHeight: 1,
                marginTop: "3px",
              }}
            >
              SERWIS
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[13px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+48123456789"
              className="font-mono text-[13px] text-[#F0F0F0]"
            >
              +48 123 456 789
            </a>
            <Button asChild className="px-6 py-2.5">
              <Link href="#kontakt">Umów wizytę</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-border text-white lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isOpen ? (
              <X size={22} strokeWidth={1.75} />
            ) : (
              <Menu size={22} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg px-6 pb-10 pt-28 lg:hidden"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-5">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="block font-display text-5xl uppercase text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6">
                <a
                  href="tel:+48123456789"
                  className="flex items-center gap-3 font-mono text-base text-white"
                >
                  <Phone size={20} strokeWidth={1.5} />
                  +48 123 456 789
                </a>
                <Button asChild className="w-full">
                  <Link href="#kontakt" onClick={() => setIsOpen(false)}>
                    Umów wizytę
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

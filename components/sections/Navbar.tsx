"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 md:px-6">
        <div
          className={cn(
            "mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between rounded-[8px] border-2 border-dark px-4 transition-all duration-200 ease-out md:px-6",
            isScrolled
              ? "bg-dark text-white shadow-card"
              : "bg-bg/95 text-dark backdrop-blur-0",
          )}
        >
          <Link
            href="#top"
            className="flex min-w-[120px] flex-col leading-none"
            aria-label="MotoFix Serwis Krakow"
          >
            <span className="font-display text-[28px] uppercase tracking-[0.04em]">
              MOTOFIX
            </span>
            <span
              className={cn(
                "font-body text-[11px] uppercase tracking-[0.24em]",
                isScrolled ? "text-white/60" : "text-muted",
              )}
            >
              SERWIS
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[14px] font-semibold uppercase tracking-[0.12em] transition-colors",
                  isScrolled ? "hover:text-accent" : "hover:text-accent-2",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+48123456789"
              className={cn(
                "font-mono text-[14px] transition-colors",
                isScrolled ? "text-white" : "text-dark",
              )}
            >
              +48 123 456 789
            </a>
            <Button asChild>
              <Link href="#kontakt">Umów wizytę</Link>
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-[4px] border-2 border-current lg:hidden",
              isScrolled ? "text-white" : "text-dark",
            )}
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Zamknij menu" : "Otworz menu"}
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-dark px-6 pb-10 pt-28 text-white lg:hidden"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-5">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ delay: 0.05 * index, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="block font-display text-5xl uppercase tracking-[0.04em]"
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
                  className="flex items-center gap-3 font-mono text-base"
                >
                  <Phone size={24} strokeWidth={1.5} />
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

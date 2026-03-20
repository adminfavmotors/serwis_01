"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";

export function CookiesBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isAccepted = window.localStorage.getItem("cookies_accepted");

    if (!isAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem("cookies_accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] border-t-2 border-white/10 bg-dark px-4 py-4 text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-white/80">
          Ta strona używa plików cookies w celu analizy ruchu. Kontynuując,
          wyrażasz na to zgodę.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="button" onClick={acceptCookies}>
            Akceptuję
          </Button>
          <Link
            href="/polityka-prywatnosci"
            className="text-sm text-white/75 underline underline-offset-4 transition-colors hover:text-accent"
          >
            Więcej informacji
          </Link>
        </div>
      </div>
    </div>
  );
}

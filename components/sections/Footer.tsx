import Link from "next/link";

const quickLinks = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#o-nas", label: "O nas" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-16">
        <div className="grid gap-10 border-b-2 border-white/10 pb-10 md:grid-cols-2 xl:grid-cols-3">
          <div className="space-y-4">
            <div className="leading-none">
              <p className="font-display text-[40px] uppercase tracking-[0.04em]">
                MOTOFIX
              </p>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-white/55">
                SERWIS
              </p>
            </div>
            <p className="max-w-sm text-body text-white/70">
              Warsztat samochodowy w Krakowie, który stawia na szybką
              diagnostykę, uczciwą komunikację i konkretne efekty.
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-mono text-sm uppercase tracking-[0.22em] text-accent">
              Szybkie linki
            </p>
            <nav className="grid gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-white/75 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <p className="font-mono text-sm uppercase tracking-[0.22em] text-accent">
              Kontakt
            </p>
            <div className="grid gap-3 text-base text-white/75">
              <p>ul. Przemysłowa 12, 30-701 Kraków</p>
              <a
                href="tel:+48123456789"
                className="transition-colors hover:text-accent"
              >
                +48 123 456 789
              </a>
              <p>Pn-Pt 08:00-18:00</p>
              <p>Sobota 09:00-14:00</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MotoFix Serwis. Wszelkie prawa zastrzeżone.</p>
          <p>
            Realizacja: <span className="text-accent">FavMotors Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

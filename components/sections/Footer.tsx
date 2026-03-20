import Link from "next/link";

const quickLinks = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#o-nas", label: "O nas" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer
      className="bg-bg text-text"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-site py-16">
        <div className="grid gap-10 pb-10 md:grid-cols-2 xl:grid-cols-3">
          <div className="space-y-4">
            <div className="leading-none">
              <p className="font-display text-[40px] uppercase tracking-[0.04em] text-text">
                MOTOFIX
              </p>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-accent">
                SERWIS
              </p>
            </div>
            <p className="max-w-sm text-[14px] leading-[1.7] text-muted">
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
                  className="text-[14px] text-muted transition-colors duration-150 hover:text-accent"
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
            <div className="grid gap-3 text-[14px] text-muted">
              <p>ul. Przemysłowa 12, 30-701 Kraków</p>
              <a
                href="tel:+48123456789"
                className="transition-colors duration-150 hover:text-accent"
              >
                +48 123 456 789
              </a>
              <p>Pn-Pt 08:00-18:00</p>
              <p>Sobota 09:00-14:00</p>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-3 pt-4 text-[13px] text-muted md:flex-row md:items-center md:justify-between"
          style={{ borderTop: "3px solid var(--accent)" }}
        >
          <p>© 2026 MotoFix Serwis. Wszelkie prawa zastrzeżone.</p>
          <p>
            Realizacja: <span className="text-accent">FavMotors Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

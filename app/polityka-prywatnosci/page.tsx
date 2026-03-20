import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności — MotoFix Serwis Kraków",
  description:
    "Polityka prywatności i informacje o przetwarzaniu danych osobowych przez MotoFix Serwis w Krakowie.",
  robots: { index: false, follow: false },
};

export default function PolitykaPrywatnosci() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#0D0D0D", color: "#F0F0F0" }}
    >
      <div
        style={{ height: "3px", backgroundColor: "#FF6B00", width: "100%" }}
      />

      <div className="mx-auto px-6 py-24" style={{ maxWidth: "800px" }}>
        <div className="mb-12">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "#FF6B00",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            DOKUMENT PRAWNY
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              color: "#F0F0F0",
              marginTop: "8px",
              lineHeight: 0.95,
            }}
          >
            POLITYKA
            <br />
            PRYWATNOŚCI
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "#555555",
              marginTop: "16px",
            }}
          >
            Ostatnia aktualizacja: styczeń 2026
          </p>
        </div>

        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "#888888",
            lineHeight: 1.8,
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {[
            {
              number: "01",
              title: "Administrator danych",
              content:
                "Administratorem danych osobowych jest MotoFix Serwis, ul. Przemysłowa 12, 30-701 Kraków, tel. +48 123 456 789. Administrator odpowiada za bezpieczne przechowywanie i przetwarzanie danych zgodnie z obowiązującymi przepisami RODO.",
            },
            {
              number: "02",
              title: "Cel przetwarzania danych",
              content:
                "Dane osobowe zbierane poprzez formularz kontaktowy są przetwarzane wyłącznie w celu udzielenia odpowiedzi na zapytanie oraz umówienia wizyty serwisowej. Dane nie są udostępniane osobom trzecim ani wykorzystywane w celach marketingowych bez odrębnej zgody.",
            },
            {
              number: "03",
              title: "Zakres zbieranych danych",
              content:
                "Poprzez formularz kontaktowy zbieramy: imię i nazwisko, numer telefonu, markę i model pojazdu, opis problemu oraz preferowany termin wizyty. Dane te są niezbędne do realizacji usługi serwisowej.",
            },
            {
              number: "04",
              title: "Pliki cookies",
              content:
                "Strona używa plików cookies w celu analizy ruchu (Google Analytics 4). Cookies są zapisywane wyłącznie po udzieleniu zgody przez użytkownika. Możesz wyłączyć obsługę cookies w ustawieniach przeglądarki, jednak może to wpłynąć na działanie niektórych funkcji strony.",
            },
            {
              number: "05",
              title: "Okres przechowywania danych",
              content:
                "Dane osobowe przesłane przez formularz kontaktowy są przechowywane przez okres niezbędny do realizacji zapytania, nie dłużej niż 12 miesięcy od ostatniego kontaktu.",
            },
            {
              number: "06",
              title: "Prawa użytkownika",
              content:
                "Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia (prawo do bycia zapomnianym), ograniczenia przetwarzania oraz przenoszenia danych. Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO).",
            },
            {
              number: "07",
              title: "Kontakt w sprawach danych osobowych",
              content:
                "W sprawach związanych z ochroną danych osobowych skontaktuj się z nami telefonicznie pod numerem +48 123 456 789 lub osobiście pod adresem ul. Przemysłowa 12, 30-701 Kraków, w godzinach Pn–Pt 08:00–18:00.",
            },
          ].map((section) => (
            <section key={section.number}>
              <div className="flex items-start gap-4">
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "#FF6B00",
                    marginTop: "3px",
                    flexShrink: 0,
                  }}
                >
                  {section.number}
                </span>
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      color: "#F0F0F0",
                      marginBottom: "10px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {section.title.toUpperCase()}
                  </h2>
                  <p>{section.content}</p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid #2A2A2A" }}>
          <a
            href="/"
            className="inline-flex items-center gap-2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "#FF6B00",
              textDecoration: "none",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Powrót do strony głównej
          </a>
        </div>
      </div>
    </main>
  );
}

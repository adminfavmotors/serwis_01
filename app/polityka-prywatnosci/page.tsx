export default function PolitykaPrywatnosci() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#0D0D0D", color: "#F0F0F0" }}
    >
      <div className="mx-auto px-6 py-24" style={{ maxWidth: "800px" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 56px)",
            color: "#F0F0F0",
            marginBottom: "48px",
          }}
        >
          POLITYKA PRYWATNOŚCI
        </h1>

        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "#888888",
            lineHeight: 1.8,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <section>
            <h2 style={{ color: "#F0F0F0", fontSize: "18px", marginBottom: "12px" }}>
              1. Administrator danych
            </h2>
            <p>
              Administratorem danych osobowych jest MotoFix Serwis, ul.
              Przemysłowa 12, 30-701 Kraków, tel. +48 123 456 789.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#F0F0F0", fontSize: "18px", marginBottom: "12px" }}>
              2. Cel przetwarzania danych
            </h2>
            <p>
              Dane osobowe zbierane poprzez formularz kontaktowy są przetwarzane
              wyłącznie w celu udzielenia odpowiedzi na zapytanie oraz umówienia
              wizyty serwisowej. Nie są udostępniane osobom trzecim.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#F0F0F0", fontSize: "18px", marginBottom: "12px" }}>
              3. Pliki cookies
            </h2>
            <p>
              Strona używa plików cookies w celu analizy ruchu (Google
              Analytics). Możesz wyłączyć obsługę cookies w ustawieniach
              przeglądarki, jednak może to wpłynąć na działanie niektórych
              funkcji strony.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#F0F0F0", fontSize: "18px", marginBottom: "12px" }}>
              4. Prawa użytkownika
            </h2>
            <p>
              Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia
              lub ograniczenia przetwarzania. W celu realizacji tych praw
              skontaktuj się z nami pod adresem e-mail lub telefonicznie.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#F0F0F0", fontSize: "18px", marginBottom: "12px" }}>
              5. Kontakt
            </h2>
            <p>
              W sprawach związanych z ochroną danych osobowych możesz
              skontaktować się z nami telefonicznie pod numerem{" "}
              <a href="tel:+48123456789" style={{ color: "#FF6B00" }}>
                +48 123 456 789
              </a>{" "}
              lub osobiście pod adresem ul. Przemysłowa 12, 30-701 Kraków.
            </p>
          </section>
        </div>

        <a
          href="/"
          className="mt-12 inline-flex items-center gap-2"
          style={{
            color: "#FF6B00",
            fontFamily: "var(--font-body)",
            fontSize: "14px",
          }}
        >
          ← Powrót do strony głównej
        </a>
      </div>
    </main>
  );
}

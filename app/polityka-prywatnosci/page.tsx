import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polityka Prywatności — MotoFix Serwis Kraków',
  description:
    'Polityka prywatności i informacje o przetwarzaniu danych osobowych przez MotoFix Serwis w Krakowie.',
  robots: { index: false, follow: false },
}

const sections = [
  {
    number: '01',
    title: 'Administrator danych',
    content:
      'Administratorem danych osobowych jest MotoFix Serwis, ul. Przemysłowa 12, 30-701 Kraków, tel. +48 123 456 789. Administrator odpowiada za bezpieczne przechowywanie i przetwarzanie danych zgodnie z obowiązującymi przepisami RODO.',
  },
  {
    number: '02',
    title: 'Cel przetwarzania danych',
    content:
      'Dane osobowe zbierane przez formularz kontaktowy przetwarzamy wyłącznie w celu udzielenia odpowiedzi na zapytanie oraz umówienia wizyty serwisowej. Dane nie są udostępniane osobom trzecim ani wykorzystywane marketingowo bez odrębnej zgody.',
  },
  {
    number: '03',
    title: 'Zakres zbieranych danych',
    content:
      'Za pośrednictwem formularza kontaktowego zbieramy: imię i nazwisko, numer telefonu, markę i model pojazdu, opis problemu oraz preferowany termin wizyty. Zakres tych danych jest niezbędny do sprawnej realizacji zgłoszenia.',
  },
  {
    number: '04',
    title: 'Pliki cookies',
    content:
      'Strona używa plików cookies w celu analizy ruchu i poprawy działania serwisu. Cookies są zapisywane po akceptacji użytkownika. Możesz wyłączyć obsługę cookies w ustawieniach przeglądarki, co może ograniczyć działanie niektórych funkcji strony.',
  },
  {
    number: '05',
    title: 'Okres przechowywania danych',
    content:
      'Dane osobowe przesłane przez formularz kontaktowy przechowujemy przez okres niezbędny do realizacji zapytania, nie dłużej niż 12 miesięcy od ostatniego kontaktu, chyba że przepisy prawa wymagają dłuższego przechowywania.',
  },
  {
    number: '06',
    title: 'Prawa użytkownika',
    content:
      'Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz przenoszenia danych. Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.',
  },
  {
    number: '07',
    title: 'Kontakt w sprawach danych osobowych',
    content:
      'W sprawach związanych z ochroną danych osobowych skontaktuj się z nami telefonicznie pod numerem +48 123 456 789 lub osobiście pod adresem ul. Przemysłowa 12, 30-701 Kraków, w godzinach Pn–Pt 08:00–18:00.',
  },
]

export default function PolitykaPrywatnosci() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#121418',
        color: '#F2F5F8',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="grid-texture" style={{ position: 'absolute', inset: 0, opacity: 0.28, pointerEvents: 'none' }} />

      <div
        style={{
          position: 'absolute',
          top: '-12%',
          right: '-8%',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(43,127,255,0.08) 0%, transparent 72%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ height: '3px', backgroundColor: '#2B7FFF', width: '100%', position: 'relative', zIndex: 1 }} />

      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '112px 24px 88px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ marginBottom: '56px' }}>
          <span className="section-label">Dokument prawny</span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(42px, 6vw, 72px)',
              color: '#F2F5F8',
              lineHeight: 0.9,
              textTransform: 'uppercase',
            }}
          >
            Polityka
            <br />
            <span style={{ color: '#2B7FFF' }}>Prywatności</span>
          </h1>
          <p
            style={{
              marginTop: '18px',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: '#A7B1C1',
              maxWidth: '620px',
              lineHeight: 1.75,
            }}
          >
            Poniżej znajdziesz najważniejsze informacje o przetwarzaniu danych osobowych, plikach cookies i Twoich prawach jako użytkownika serwisu MotoFix.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {sections.map((section) => (
            <section
              key={section.number}
              style={{
                backgroundColor: '#1A1D22',
                border: '1px solid #2D3340',
                borderRadius: '4px',
                padding: '26px 28px',
                boxShadow: '0 16px 36px rgba(0,0,0,0.16)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '72px minmax(0, 1fr)', gap: '18px' }} className="privacy-row">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#2B7FFF', letterSpacing: '0.16em' }}>
                    {section.number}
                  </span>
                </div>

                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '22px',
                      color: '#F2F5F8',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      marginBottom: '12px',
                    }}
                  >
                    {section.title}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: '#A7B1C1', lineHeight: 1.8 }}>
                    {section.content}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #2D3340' }}>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: '#2B7FFF',
              textDecoration: 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Powrót do strony głównej
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .privacy-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </main>
  )
}

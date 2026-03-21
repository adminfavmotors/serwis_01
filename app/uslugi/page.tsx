import type { Metadata } from 'next'

import { Footer } from '@/components/sections/Footer'
import { Navbar } from '@/components/sections/Navbar'
import { serviceCategories } from '@/data/services-catalog'

export const metadata: Metadata = {
  title: 'Usługi i Cennik | MotoFix Serwis Kraków',
  description:
    'Sprawdź pełną listę usług MotoFix Serwis w Krakowie. Diagnostyka, hamulce, zawieszenie, klimatyzacja, opony i naprawy mechaniczne z orientacyjnymi cenami.',
  alternates: {
    canonical: '/uslugi',
  },
  openGraph: {
    title: 'Usługi i Cennik | MotoFix Serwis Kraków',
    description:
      'Pełna lista usług MotoFix Serwis w Krakowie wraz z orientacyjnymi cenami dla rynku polskiego.',
    url: 'https://serwis01.vercel.app/uslugi',
  },
}

export default function UslugiPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: '100vh',
          backgroundColor: '#121418',
          color: '#F2F5F8',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="grid-texture" style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />

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

        <section
          id="uslugi-katalog"
          style={{
            position: 'relative',
            zIndex: 1,
            paddingTop: '136px',
            paddingBottom: '40px',
          }}
        >
          <div className="container-site">
            <div style={{ maxWidth: '860px', marginBottom: '40px' }}>
              <span className="section-label">Pełna oferta</span>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(42px, 6vw, 78px)',
                  lineHeight: 0.92,
                  color: '#F2F5F8',
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                }}
              >
                Usługi
                <br />
                <span style={{ color: '#2B7FFF' }}>i cennik</span>
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  color: '#C1CAD7',
                  lineHeight: 1.8,
                  maxWidth: '60ch',
                  marginBottom: '24px',
                }}
              >
                Zebraliśmy najczęściej wybierane usługi serwisowe i orientacyjne ceny dla rynku polskiego. Ostateczna wycena zależy od modelu auta, zakresu prac oraz ceny części.
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 18px',
                  border: '1px solid rgba(43,127,255,0.18)',
                  backgroundColor: 'rgba(26,29,34,0.78)',
                  borderRadius: '4px',
                }}
              >
                <span className="glow-dot" />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#DCE2EA', lineHeight: 1.7 }}>
                  Ceny mają charakter orientacyjny i są aktualne dla polskiego rynku na dzień <span style={{ color: '#FFFFFF', fontWeight: 600 }}>21 marca 2026</span>.
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '24px',
              }}
              className="services-page-grid"
            >
              {serviceCategories.map((category) => (
                <section
                  key={category.slug}
                  style={{
                    backgroundColor: '#1A1D22',
                    border: '1px solid #2D3340',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    boxShadow: '0 18px 40px rgba(0,0,0,0.16)',
                  }}
                >
                  <div
                    style={{
                      padding: '26px 28px 22px',
                      borderBottom: '1px solid #2D3340',
                      background:
                        'linear-gradient(180deg, rgba(43,127,255,0.08) 0%, rgba(26,29,34,0.02) 100%)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: '#2B7FFF',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Kategoria
                    </span>
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '28px',
                        color: '#F2F5F8',
                        textTransform: 'uppercase',
                        lineHeight: 1,
                        marginTop: '12px',
                        marginBottom: '12px',
                      }}
                    >
                      {category.title}
                    </h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#A7B1C1', lineHeight: 1.75 }}>
                      {category.description}
                    </p>
                  </div>

                  <div style={{ padding: '6px 0' }}>
                    {category.services.map((service, index) => (
                      <div
                        key={service.name}
                        style={{
                          padding: '18px 28px',
                          borderTop: index === 0 ? 'none' : '1px solid #2D3340',
                          display: 'grid',
                          gridTemplateColumns: 'minmax(0, 1fr) auto',
                          gap: '18px',
                          alignItems: 'start',
                        }}
                        className="service-row"
                      >
                        <div>
                          <h3
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '16px',
                              fontWeight: 600,
                              color: '#F2F5F8',
                              lineHeight: 1.4,
                              marginBottom: '8px',
                            }}
                          >
                            {service.name}
                          </h3>
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#A7B1C1', lineHeight: 1.7 }}>
                            {service.shortDescription}
                          </p>
                        </div>

                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '12px',
                            color: '#2B7FFF',
                            backgroundColor: 'rgba(43,127,255,0.08)',
                            border: '1px solid rgba(43,127,255,0.14)',
                            padding: '7px 11px',
                            borderRadius: '2px',
                            whiteSpace: 'nowrap',
                            marginTop: '2px',
                          }}
                        >
                          {service.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section
          id="kontakt"
          style={{
            position: 'relative',
            zIndex: 1,
            paddingBottom: '88px',
          }}
        >
          <div className="container-site">
            <div
              style={{
                padding: '30px 32px',
                border: '1px solid rgba(43,127,255,0.18)',
                borderRadius: '4px',
                background:
                  'linear-gradient(90deg, rgba(26,29,34,0.98) 0%, rgba(26,95,204,0.18) 54%, rgba(26,29,34,0.95) 100%)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.16)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '18px',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '58ch' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: '#2B7FFF',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}
                >
                  Umów wizytę
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(28px, 4vw, 42px)',
                    color: '#F2F5F8',
                    textTransform: 'uppercase',
                    lineHeight: 0.98,
                  }}
                >
                  Potrzebujesz dokładnej wyceny?
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: '#DCE2EA', lineHeight: 1.75 }}>
                  Zadzwoń do nas albo wyślij zgłoszenie. Sprawdzimy auto, potwierdzimy zakres prac i przygotujemy konkretną wycenę bez zgadywania.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="tel:+48123456789" className="btn-secondary">
                  +48 123 456 789
                </a>
                <a href="/#kontakt" className="btn-primary">
                  Wyślij zgłoszenie
                </a>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @media (max-width: 920px) {
            .services-page-grid {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 640px) {
            .service-row {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  )
}

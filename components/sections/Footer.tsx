'use client'

import { MapPin, Phone, Clock } from 'lucide-react'

const quickLinks = [
  { label: 'Usługi', href: '#uslugi' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Opinie', href: '#opinie' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#080A0C',
        borderTop: '1px solid #252830',
      }}
    >
      <div
        className="container-site"
        style={{
          paddingTop: '64px',
          paddingBottom: '48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px',
        }}
        id="footer-grid"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, gap: '3px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                fontWeight: 700,
                color: '#EAEDF2',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              MOTOFIX
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: '#2B7FFF',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}
            >
              SERWIS
            </span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: '#6B7280',
              lineHeight: 1.7,
              maxWidth: '260px',
            }}
          >
            Profesjonalny warsztat samochodowy w Krakowie. Szybka diagnostyka,
            uczciwa komunikacja i konkretne efekty.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 600,
              color: '#3A4150',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            Nawigacja
          </span>
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: '#6B7280',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
                width: 'fit-content',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#EAEDF2')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/polityka-prywatnosci"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: '#6B7280',
              textDecoration: 'none',
              transition: 'color 0.15s ease',
              width: 'fit-content',
              marginTop: '8px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#EAEDF2')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
          >
            Polityka Prywatności
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 600,
              color: '#3A4150',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            Kontakt
          </span>

          {[
            { icon: MapPin, value: 'ul. Przemysłowa 12\n30-701 Kraków' },
            { icon: Phone, value: '+48 123 456 789', href: 'tel:+48123456789' },
            { icon: Clock, value: 'Pn–Pt 08:00–18:00\nSob 09:00–14:00' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Icon
                  size={14}
                  color="#2B7FFF"
                  strokeWidth={1.5}
                  style={{ marginTop: '3px', flexShrink: 0 }}
                />
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      color: '#6B7280',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#EAEDF2')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: '#6B7280',
                      whiteSpace: 'pre-line',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div style={{ borderTop: '1px solid #252830' }}>
        <div
          className="container-site"
          style={{
            paddingTop: '20px',
            paddingBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: '#3A4150',
            }}
          >
            © 2026 MotoFix Serwis. Wszelkie prawa zastrzeżone.
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: '#3A4150',
              letterSpacing: '0.1em',
            }}
          >
            Realizacja: <span style={{ color: '#2B7FFF' }}>FavMotors Studio</span>
          </span>
        </div>
      </div>

      <style>{`
        #footer-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        @media (max-width: 768px) {
          #footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  )
}

export { Footer }

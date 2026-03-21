'use client'

import { Clock, MapPin, Phone } from 'lucide-react'

const quickLinks = [
  { label: 'Usługi', href: '#uslugi' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Opinie', href: '#opinie' },
  { label: 'Kontakt', href: '#kontakt' },
]

function Footer() {
  return (
    <footer style={{ backgroundColor: '#101317', borderTop: '1px solid #2D3340' }}>
      <div
        className="container-site"
        style={{ paddingTop: '64px', paddingBottom: '48px', display: 'grid', gap: '48px' }}
        id="footer-grid"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, gap: '3px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                fontWeight: 700,
                color: '#F2F5F8',
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

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#A7B1C1', lineHeight: 1.75, maxWidth: '280px' }}>
            Profesjonalny warsztat samochodowy w Krakowie. Szybka diagnostyka, uczciwa komunikacja i konkretne efekty.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 600,
              color: '#8691A3',
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
                color: '#A7B1C1',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
                width: 'fit-content',
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = '#F2F5F8'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = '#A7B1C1'
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/polityka-prywatnosci"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: '#A7B1C1',
              textDecoration: 'none',
              transition: 'color 0.15s ease',
              marginTop: '8px',
              width: 'fit-content',
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.color = '#F2F5F8'
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.color = '#A7B1C1'
            }}
          >
            Polityka prywatności
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 600,
              color: '#8691A3',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            Kontakt
          </span>

          {[
            { icon: MapPin, value: 'ul. Przemysłowa 12\n30-701 Kraków', href: undefined },
            { icon: Phone, value: '+48 123 456 789', href: 'tel:+48123456789' },
            { icon: Clock, value: 'Pn–Pt 08:00–18:00\nSob 09:00–14:00', href: undefined },
          ].map((item, index) => {
            const Icon = item.icon

            return (
              <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Icon size={14} color="#2B7FFF" strokeWidth={1.5} style={{ marginTop: '3px', flexShrink: 0 }} />
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      color: '#A7B1C1',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color = '#F2F5F8'
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color = '#A7B1C1'
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#A7B1C1', whiteSpace: 'pre-line', lineHeight: 1.7 }}>
                    {item.value}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div style={{ borderTop: '1px solid #2D3340' }}>
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
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#8691A3' }}>
            © 2026 MotoFix Serwis. Wszelkie prawa zastrzeżone.
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#8691A3', letterSpacing: '0.1em' }}>
            Realizacja: <span style={{ color: '#2B7FFF' }}>FavMotors Studio</span>
          </span>
        </div>
      </div>

      <style>{`
        #footer-grid { grid-template-columns: repeat(3, 1fr) !important; }

        @media (max-width: 768px) {
          #footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  )
}

export default Footer
export { Footer }

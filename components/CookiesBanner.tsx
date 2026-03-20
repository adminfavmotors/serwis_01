'use client'

import { useEffect, useState } from 'react'

function CookiesBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const accepted = localStorage.getItem('cookies_accepted')
      if (!accepted) {
        setVisible(true)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem('cookies_accepted', 'true')
    } catch {}

    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-label="Informacja o plikach cookies"
      style={{
        position: 'fixed',
        left: '24px',
        right: '24px',
        bottom: '24px',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1180px',
          backgroundColor: 'rgba(22,24,28,0.96)',
          border: '1px solid #252830',
          borderRadius: '4px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          overflow: 'hidden',
          pointerEvents: 'auto',
        }}
      >
        <div style={{ height: '3px', backgroundColor: '#2B7FFF', width: '100%' }} />

        <div
          className="cookies-layout"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            padding: '18px 22px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '760px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: '#2B7FFF',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              Cookies i prywatność
            </span>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: '#6B7280',
                lineHeight: 1.65,
              }}
            >
              Ta strona używa plików <span style={{ color: '#EAEDF2' }}>cookies</span> do
              analizy ruchu i poprawy jakości usług. Kontynuując przeglądanie, akceptujesz
              ich użycie zgodnie z naszą{' '}
              <a
                href="/polityka-prywatnosci"
                style={{ color: '#2B7FFF', textDecoration: 'underline' }}
              >
                Polityką Prywatności
              </a>
              .
            </p>
          </div>

          <div
            className="cookies-actions"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0,
            }}
          >
            <a
              href="/polityka-prywatnosci"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: '#6B7280',
                textDecoration: 'none',
                border: '1px solid #252830',
                padding: '10px 16px',
                borderRadius: '2px',
                transition: 'color 0.15s ease, border-color 0.15s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = '#EAEDF2'
                event.currentTarget.style.borderColor = '#2B7FFF'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = '#6B7280'
                event.currentTarget.style.borderColor = '#252830'
              }}
            >
              Więcej informacji
            </a>

            <button
              type="button"
              onClick={accept}
              className="btn-primary"
              style={{ padding: '10px 20px', whiteSpace: 'nowrap' }}
            >
              Akceptuję
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cookies-layout {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .cookies-actions {
            width: 100% !important;
            flex-direction: column !important;
            align-items: stretch !important;
          }
        }
      `}</style>
    </div>
  )
}

export default CookiesBanner

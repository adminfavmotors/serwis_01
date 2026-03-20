'use client'

import { motion } from 'framer-motion'
import {
  Droplets,
  Crosshair,
  MonitorCheck,
  RotateCcw,
  Hammer,
  Wind,
} from 'lucide-react'

const services = [
  {
    icon: Droplets,
    name: 'Wymiana oleju i filtrów',
    description:
      'Szybki serwis eksploatacyjny z doborem części i płynów do konkretnego silnika.',
    price: 'od 89 zł',
  },
  {
    icon: Crosshair,
    name: 'Geometria kół',
    description:
      'Precyzyjne ustawienie zbieżności poprawiające prowadzenie i zużycie opon.',
    price: 'od 120 zł',
  },
  {
    icon: MonitorCheck,
    name: 'Diagnostyka komputerowa',
    description:
      'Odczyt błędów, analiza parametrów i wskazanie realnej przyczyny problemu.',
    price: 'od 150 zł',
  },
  {
    icon: RotateCcw,
    name: 'Wymiana i wyważanie opon',
    description:
      'Kompleksowa obsługa sezonowa z kontrolą stanu bieżnika i ciśnienia.',
    price: 'od 40 zł/szt',
  },
  {
    icon: Hammer,
    name: 'Naprawy blacharsko-lakiernicze',
    description:
      'Od drobnych poprawek po większe naprawy po kolizjach i uszkodzeniach.',
    price: 'wycena indywidualna',
  },
  {
    icon: Wind,
    name: 'Serwis klimatyzacji',
    description:
      'Odgrzybianie, szczelność układu i nabijanie czynnika dla komfortu jazdy.',
    price: 'od 199 zł',
  },
]

export default function Services() {
  return (
    <section
      id="uslugi"
      style={{
        backgroundColor: '#0E0F11',
        borderTop: '1px solid #252830',
      }}
      className="section-padding"
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ marginBottom: '56px' }}
        >
          <span className="section-label">Czym się zajmujemy</span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 700,
              color: '#EAEDF2',
              textTransform: 'uppercase',
              lineHeight: 0.92,
              maxWidth: '480px',
            }}
          >
            NASZE
            <br />
            USŁUGI
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1px',
            backgroundColor: '#252830',
            border: '1px solid #252830',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                style={{
                  backgroundColor: '#16181C',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  borderLeft: '3px solid transparent',
                  transition: 'background-color 0.2s ease, border-color 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.backgroundColor = '#1E2026'
                  el.style.borderLeftColor = '#2B7FFF'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.backgroundColor = '#16181C'
                  el.style.borderLeftColor = 'transparent'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: 'rgba(43,127,255,0.1)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color="#2B7FFF" strokeWidth={1.5} />
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: '#2B7FFF',
                      backgroundColor: 'rgba(43,127,255,0.08)',
                      padding: '4px 10px',
                      borderRadius: '2px',
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {service.price}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#EAEDF2',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    lineHeight: 1.1,
                  }}
                >
                  {service.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: '#6B7280',
                    lineHeight: 1.6,
                    marginTop: 'auto',
                  }}
                >
                  {service.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '8px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: '#3A4150',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      transition: 'color 0.15s ease',
                    }}
                  >
                    Dowiedz się więcej
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3A4150"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          style={{
            marginTop: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '32px',
            borderTop: '1px solid #252830',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: '#6B7280',
            }}
          >
            Nie widzisz swojej usługi?{' '}
            <span style={{ color: '#EAEDF2' }}>
              Zadzwoń — wycenimy każdą naprawę.
            </span>
          </p>
          <a href="#kontakt" className="btn-secondary" style={{ flexShrink: 0 }}>
            Umów wizytę
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export { Services }

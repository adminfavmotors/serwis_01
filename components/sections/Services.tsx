'use client'

import { motion } from 'framer-motion'
import { Crosshair, Droplets, Hammer, MonitorCheck, RotateCcw, Wind } from 'lucide-react'

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

function Services() {
  return (
    <section
      id="uslugi"
      style={{ backgroundColor: '#0E0F11', borderTop: '1px solid #252830' }}
      className="section-padding"
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '56px' }}
        >
          <span className="section-label">Czym się zajmujemy</span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(34px, 4.6vw, 56px)',
              fontWeight: 700,
              color: '#EAEDF2',
              textTransform: 'uppercase',
              lineHeight: 0.96,
              maxWidth: 'fit-content',
            }}
          >
            NASZE USŁUGI
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
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundColor: '#16181C',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  borderLeft: '3px solid transparent',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(event) => {
                  const element = event.currentTarget as HTMLDivElement
                  element.style.backgroundColor = '#1E2026'
                  element.style.borderLeftColor = '#2B7FFF'
                }}
                onMouseLeave={(event) => {
                  const element = event.currentTarget as HTMLDivElement
                  element.style.backgroundColor = '#16181C'
                  element.style.borderLeftColor = 'transparent'
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
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: '#6B7280' }}>
            Nie widzisz swojej usługi?{' '}
            <span style={{ color: '#EAEDF2' }}>Zadzwoń, wycenimy każdą naprawę.</span>
          </p>
          <a href="#kontakt" className="btn-secondary" style={{ flexShrink: 0 }}>
            Umów wizytę
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
export { Services }

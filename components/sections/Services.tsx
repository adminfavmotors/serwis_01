'use client'

import { motion } from 'framer-motion'
import { Snowflake } from 'lucide-react'

type ServiceIconProps = {
  size?: number
  color?: string
  strokeWidth?: number
}

function OilCanIcon({ size = 22, color = '#2B7FFF', strokeWidth = 1.6 }: ServiceIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 4H15L18 7V20H6V6C6 4.9 6.9 4 8 4Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M15 4V8H18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11.5C11.2 10.2 12.8 10.2 14 11.5C15.2 12.8 15.2 14.7 14 16C12.8 17.3 11.2 17.3 10 16C8.8 14.7 8.8 12.8 10 11.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M18 9.5H20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

function SuspensionIcon({
  size = 22,
  color = '#2B7FFF',
  strokeWidth = 1.6,
}: ServiceIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6" cy="17" r="2.5" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="18" cy="17" r="2.5" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="6" cy="7" r="2.5" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="18" cy="7" r="2.5" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M8.5 7H15.5M8.5 17H15.5M6 9.5V14.5M18 9.5V14.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8 8.5L10 10.5M16 8.5L14 10.5M8 15.5L10 13.5M16 15.5L14 13.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}

function LaptopIcon({ size = 22, color = '#2B7FFF', strokeWidth = 1.6 }: ServiceIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="5"
        y="5"
        width="14"
        height="10"
        rx="1.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M3.5 18H20.5L19 20H5L3.5 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M9 10H15M12 7.5V12.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}

function WheelIcon({ size = 22, color = '#2B7FFF', strokeWidth = 1.6 }: ServiceIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="1" fill={color} />
      <path
        d="M12 8V4M16 12H20M12 16V20M8 12H4M14.8 9.2L17.2 6.8M14.8 14.8L17.2 17.2M9.2 14.8L6.8 17.2M9.2 9.2L6.8 6.8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}

function CarDoorIcon({ size = 22, color = '#2B7FFF', strokeWidth = 1.6 }: ServiceIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 5.5H16C17.1 5.5 18 6.4 18 7.5V18.5H9C7.9 18.5 7 17.6 7 16.5V5.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M9.5 8L14.5 7.2C15.1 7.1 15.6 7.6 15.6 8.2V18.5H9.5V8Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M13.2 12H14.3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

const services = [
  {
    icon: OilCanIcon,
    name: 'Wymiana oleju i filtrów',
    description:
      'Szybki serwis eksploatacyjny z doborem części i płynów do konkretnego silnika.',
    price: 'od 89 zł',
  },
  {
    icon: SuspensionIcon,
    name: 'Geometria kół',
    description:
      'Precyzyjne ustawienie zbieżności poprawiające prowadzenie i zużycie opon.',
    price: 'od 120 zł',
  },
  {
    icon: LaptopIcon,
    name: 'Diagnostyka komputerowa',
    description:
      'Odczyt błędów, analiza parametrów i wskazanie realnej przyczyny problemu.',
    price: 'od 150 zł',
  },
  {
    icon: WheelIcon,
    name: 'Wymiana i wyważanie opon',
    description:
      'Kompleksowa obsługa sezonowa z kontrolą stanu bieżnika i ciśnienia.',
    price: 'od 40 zł/szt',
  },
  {
    icon: CarDoorIcon,
    name: 'Naprawy blacharsko-lakiernicze',
    description:
      'Od drobnych poprawek po większe naprawy po kolizjach i uszkodzeniach.',
    price: 'wycena indywidualna',
  },
  {
    icon: Snowflake,
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
          style={{ marginBottom: '40px' }}
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
                    <Icon size={22} color="#2B7FFF" strokeWidth={1.6} />
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
            marginTop: '24px',
            padding: '28px 30px',
            border: '1px solid rgba(43,127,255,0.16)',
            borderRadius: '4px',
            background:
              'linear-gradient(90deg, rgba(22,24,28,0.98) 0%, rgba(26,95,204,0.16) 54%, rgba(22,24,28,0.94) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '18px',
            boxShadow: '0 16px 40px rgba(0,0,0,0.18)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: '#2B7FFF',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Indywidualna wycena
            </span>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: '#D7DCE6',
                lineHeight: 1.7,
                maxWidth: '56ch',
              }}
            >
              Nie widzisz swojej usługi?{' '}
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>
                Zadzwoń, wycenimy każdą naprawę.
              </span>
            </p>
          </div>

          <a href="#kontakt" className="btn-primary" style={{ flexShrink: 0 }}>
            Umów wizytę
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
export { Services }

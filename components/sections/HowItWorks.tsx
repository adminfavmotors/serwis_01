'use client'

import { motion } from 'framer-motion'
import { Phone, ClipboardCheck, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Zadzwoń lub napisz',
    description:
      'Opisz objawy, podaj model auta i wybierz wygodny termin przyjęcia do serwisu. Odpiszemy w ciągu 15 minut.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Diagnoza i wycena',
    description:
      'Sprawdzamy auto, przedstawiamy zakres prac i potwierdzamy koszt przed naprawą. Bez niespodzianek.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Naprawiamy, oddajemy',
    description:
      'Realizujemy usługę, informujemy o postępach i wydajemy gotowy samochód w umówionym terminie.',
  },
]

export default function HowItWorks() {
  return (
    <section
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
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '64px',
          }}
        >
          <div>
            <span className="section-label">Proces</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 700,
                color: '#EAEDF2',
                textTransform: 'uppercase',
                lineHeight: 0.92,
              }}
            >
              JAK TO
              <br />
              <span style={{ color: '#2B7FFF' }}>DZIAŁA</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: '#6B7280',
              maxWidth: '360px',
              lineHeight: 1.7,
            }}
          >
            Prosty proces, dzięki któremu od pierwszego kontaktu wiesz, co dzieje
            się z Twoim autem.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            position: 'relative',
          }}
          className="steps-grid"
        >
          <div
            className="steps-connector"
            style={{
              position: 'absolute',
              top: '52px',
              left: 'calc(33.33% - 0px)',
              right: 'calc(33.33% - 0px)',
              height: '1px',
              borderTop: '2px dashed rgba(43,127,255,0.25)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '0 40px 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      border: '1px solid #252830',
                      backgroundColor: '#16181C',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <Icon size={22} color="#2B7FFF" strokeWidth={1.5} />
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '64px',
                      fontWeight: 700,
                      color: 'transparent',
                      WebkitTextStroke: '1px rgba(43,127,255,0.2)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#EAEDF2',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      lineHeight: 1.1,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: '#6B7280',
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {index === 0 && (
                  <div
                    style={{
                      width: '32px',
                      height: '2px',
                      backgroundColor: '#2B7FFF',
                      marginTop: '4px',
                    }}
                  />
                )}
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
            marginTop: '64px',
            padding: '28px 32px',
            backgroundColor: '#16181C',
            border: '1px solid #252830',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span className="glow-dot" />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: '#EAEDF2',
              }}
            >
              Gotowy żeby umówić wizytę?{' '}
              <span style={{ color: '#6B7280' }}>
                Oddzwonimy w ciągu 15 minut.
              </span>
            </span>
          </div>
          <a href="#kontakt" className="btn-primary" style={{ flexShrink: 0 }}>
            Umów wizytę
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      <style>{`
        .steps-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        .steps-connector {
          display: block !important;
        }
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .steps-connector {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export { HowItWorks }

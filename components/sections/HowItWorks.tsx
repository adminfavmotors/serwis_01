'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ClipboardCheck, Phone } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Zadzwoń lub napisz',
    description: 'Opisz objawy, podaj model auta i wybierz wygodny termin. Odpowiemy możliwie szybko i konkretnie.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Diagnoza i wycena',
    description: 'Sprawdzamy auto, pokazujemy zakres prac i potwierdzamy koszt przed rozpoczęciem naprawy.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Naprawiamy i oddajemy',
    description: 'Realizujemy usługę, informujemy o postępach i wydajemy gotowy samochód w ustalonym terminie.',
  },
]

function HowItWorks() {
  return (
    <section style={{ backgroundColor: '#121418', borderTop: '1px solid #2D3340' }} className="section-padding">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '44px',
          }}
        >
          <div>
            <span className="section-label">Proces</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 700,
                color: '#F2F5F8',
                textTransform: 'uppercase',
                lineHeight: 0.92,
              }}
            >
              JAK TO
              <br />
              <span style={{ color: '#2B7FFF' }}>DZIAŁA</span>
            </h2>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: '#A7B1C1', maxWidth: '380px', lineHeight: 1.75 }}>
            Prosty proces, dzięki któremu od pierwszego kontaktu dokładnie wiesz, co dzieje się z Twoim autem.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gap: '0', position: 'relative' }} className="steps-grid">
          <div
            className="steps-line"
            style={{
              position: 'absolute',
              top: '52px',
              left: 'calc(33.33% + 26px)',
              right: 'calc(33.33% + 26px)',
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
                transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
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
                      border: '1px solid #2D3340',
                      backgroundColor: '#1A1D22',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
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
                      WebkitTextStroke: '1px rgba(43,127,255,0.24)',
                      lineHeight: 1,
                      userSelect: 'none',
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
                      color: '#F2F5F8',
                      textTransform: 'uppercase',
                      lineHeight: 1.1,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      color: '#A7B1C1',
                      lineHeight: 1.75,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
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
            marginTop: '44px',
            padding: '28px 32px',
            backgroundColor: '#1A1D22',
            border: '1px solid #2D3340',
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
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: '#F2F5F8' }}>
              Gotowy, żeby umówić wizytę? <span style={{ color: '#A7B1C1' }}>Oddzwonimy możliwie szybko i ustalimy dogodny termin.</span>
            </span>
          </div>

          <a href="#kontakt" className="btn-primary" style={{ flexShrink: 0 }}>
            Umów wizytę
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      <style>{`
        .steps-grid { grid-template-columns: repeat(3, 1fr) !important; }
        .steps-line { display: block !important; }

        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .steps-line { display: none !important; }
        }
      `}</style>
    </section>
  )
}

export default HowItWorks
export { HowItWorks }

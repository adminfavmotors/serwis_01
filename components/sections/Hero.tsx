'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
})

function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#0E0F11',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(14,15,17,0.94) 0%, rgba(14,15,17,0.88) 56%, rgba(14,15,17,0.74) 72%, rgba(14,15,17,0.96) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="grid-texture"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.42,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(120deg, rgba(43,127,255,0.08) 0%, transparent 24%, transparent 72%, rgba(43,127,255,0.05) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-8%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(43,127,255,0.11) 0%, transparent 72%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '-4%',
          top: '14%',
          width: '36%',
          height: '70%',
          border: '1px solid rgba(43,127,255,0.16)',
          background:
            'linear-gradient(180deg, rgba(22,24,28,0.76) 0%, rgba(14,15,17,0.28) 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '8%',
          top: '18%',
          width: '22%',
          height: '56%',
          borderLeft: '1px solid rgba(43,127,255,0.18)',
          borderTop: '1px solid rgba(43,127,255,0.18)',
          opacity: 0.8,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '10%',
          bottom: '18%',
          width: '18%',
          height: '22%',
          border: '1px solid rgba(58,65,80,0.6)',
          background:
            'linear-gradient(135deg, rgba(43,127,255,0.08) 0%, rgba(22,24,28,0.14) 38%, rgba(14,15,17,0.04) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '12%',
          top: '26%',
          width: '16%',
          height: '2px',
          backgroundColor: 'rgba(43,127,255,0.48)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '12%',
          top: '32%',
          width: '10%',
          height: '2px',
          backgroundColor: 'rgba(43,127,255,0.24)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '12%',
          bottom: '24%',
          width: '22%',
          height: '1px',
          background:
            'linear-gradient(90deg, rgba(43,127,255,0.02) 0%, rgba(43,127,255,0.35) 42%, rgba(43,127,255,0.02) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-site"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          paddingTop: '136px',
          paddingBottom: '56px',
        }}
      >
        <div
          className="hero-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr',
            alignItems: 'end',
            gap: '28px',
          }}
        >
          <div style={{ maxWidth: '100%' }}>
            <motion.div {...fadeUp(0.08)} style={{ marginBottom: '22px' }}>
              <span className="section-label">Warsztat samochodowy • Kraków</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.16)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 5.4vw, 68px)',
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: '-0.016em',
                textTransform: 'none',
                color: '#EAEDF2',
                maxWidth: '12ch',
              }}
            >
              Twój samochód
              <br />
              <span style={{ color: '#2B7FFF' }}>w dobrych rękach</span>
            </motion.h1>

            <motion.div
              {...fadeUp(0.24)}
              style={{
                width: '56px',
                height: '3px',
                backgroundColor: '#2B7FFF',
                margin: '26px 0 24px',
              }}
            />

            <motion.p
              {...fadeUp(0.3)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(17px, 1.8vw, 20px)',
                color: '#A9B2C3',
                lineHeight: 1.78,
                maxWidth: '64ch',
                marginBottom: '40px',
              }}
            >
              Profesjonalny serwis samochodowy w Krakowie. Szybka diagnostyka, uczciwa
              wycena i naprawy, po których wracasz na drogę bez stresu.
            </motion.p>

            <motion.div
              {...fadeUp(0.38)}
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '54px',
              }}
            >
              <a href="#kontakt" className="btn-primary">
                Umów wizytę
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#uslugi" className="btn-secondary">
                Zobacz usługi
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.46)}
              className="hero-stats"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                gap: '18px',
              }}
            >
              {[
                { value: '15+', label: 'lat doświadczenia' },
                { value: '3 000+', label: 'napraw' },
                { value: '98%', label: 'pozytywnych opinii' },
                { value: '24H', label: 'czas realizacji' },
              ].map((badge) => (
                <div
                  key={badge.value}
                  style={{
                    backgroundColor: 'rgba(22,24,28,0.88)',
                    border: '1px solid #252830',
                    borderRadius: '4px',
                    padding: '18px 18px 16px',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '20px',
                      fontWeight: 500,
                      color: '#EAEDF2',
                      lineHeight: 1.1,
                      marginBottom: '8px',
                    }}
                  >
                    {badge.value}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      color: '#6B7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      lineHeight: 1.5,
                    }}
                  >
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.28)}
            style={{
              alignSelf: 'stretch',
              minHeight: '420px',
              position: 'relative',
            }}
            className="hero-side-panel"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 0.96, scale: 1 }}
              transition={{ duration: 1.15, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  "linear-gradient(180deg, rgba(14,15,17,0.18) 0%, rgba(14,15,17,0.12) 32%, rgba(14,15,17,0.34) 100%), url('/hero-f1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                filter: 'saturate(0.9) contrast(1.02) brightness(0.84)',
                transformOrigin: 'center center',
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: '0 0 0 auto',
                width: '100%',
                border: '1px solid rgba(43,127,255,0.18)',
                background:
                  'linear-gradient(180deg, rgba(14,15,17,0.16) 0%, rgba(14,15,17,0.06) 100%)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg, rgba(14,15,17,0.16) 0%, rgba(14,15,17,0.04) 35%, rgba(14,15,17,0.18) 100%)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '18px',
                left: '18px',
                right: '18px',
                bottom: '18px',
                border: '1px solid rgba(58,65,80,0.45)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '22%',
                left: '18px',
                right: '18px',
                height: '1px',
                backgroundColor: 'rgba(43,127,255,0.22)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '22%',
                bottom: '18px',
                left: '42%',
                width: '1px',
                backgroundColor: 'rgba(43,127,255,0.16)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                width: '44%',
                height: '28%',
                border: '1px solid rgba(43,127,255,0.14)',
                background:
                  'linear-gradient(135deg, rgba(43,127,255,0.10) 0%, rgba(14,15,17,0.16) 100%)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                right: '18px',
                top: '28%',
                width: '28%',
                height: '20%',
                borderTop: '2px solid rgba(43,127,255,0.34)',
                borderRight: '2px solid rgba(43,127,255,0.34)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                left: '18px',
                top: '14%',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#2B7FFF',
              }}
            >
              Premium service system
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-layout {
            grid-template-columns: 1fr !important;
          }

          .hero-side-panel {
            min-height: 240px !important;
          }

          .hero-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 520px) {
          .hero-stats {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
export { Hero }

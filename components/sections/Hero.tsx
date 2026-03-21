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
        backgroundColor: '#121418',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(18,20,24,0.9) 0%, rgba(18,20,24,0.82) 55%, rgba(18,20,24,0.72) 72%, rgba(18,20,24,0.94) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="grid-texture" style={{ position: 'absolute', inset: 0, opacity: 0.36, pointerEvents: 'none' }} />

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
                color: '#F2F5F8',
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
                color: '#C1CAD7',
                lineHeight: 1.78,
                maxWidth: '64ch',
                marginBottom: '40px',
              }}
            >
              Profesjonalny serwis samochodowy w Krakowie. Szybka diagnostyka, uczciwa wycena i naprawy, po których wracasz na drogę bez stresu.
            </motion.p>

            <motion.div
              {...fadeUp(0.38)}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '54px' }}
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
                    backgroundColor: 'rgba(26,29,34,0.92)',
                    border: '1px solid #2D3340',
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
                      color: '#F2F5F8',
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
                      fontSize: '12px',
                      color: '#A7B1C1',
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
            style={{ alignSelf: 'stretch', minHeight: '420px', position: 'relative' }}
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
                  "linear-gradient(180deg, rgba(18,20,24,0.14) 0%, rgba(18,20,24,0.1) 32%, rgba(18,20,24,0.3) 100%), url('/hero-f1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                filter: 'saturate(0.9) contrast(1.02) brightness(0.9)',
                transformOrigin: 'center center',
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                border: '1px solid rgba(43,127,255,0.18)',
                background:
                  'linear-gradient(180deg, rgba(18,20,24,0.12) 0%, rgba(18,20,24,0.04) 100%)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg, rgba(18,20,24,0.18) 0%, rgba(18,20,24,0.02) 35%, rgba(18,20,24,0.18) 100%)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '18px',
                left: '18px',
                right: '18px',
                bottom: '18px',
                border: '1px solid rgba(116,128,148,0.42)',
              }}
            />

            <motion.div
              style={{
                position: 'absolute',
                top: '17%',
                right: '18px',
                width: '36%',
                height: '2px',
                background:
                  'linear-gradient(90deg, rgba(43,127,255,0.02) 0%, rgba(43,127,255,0.4) 38%, rgba(43,127,255,0.02) 100%)',
                transformOrigin: 'right center',
                willChange: 'transform, opacity',
              }}
              animate={{ opacity: [0.38, 0.92, 0.38], scaleX: [0.94, 1.04, 0.94] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              style={{
                position: 'absolute',
                top: '17%',
                right: '34%',
                width: '1px',
                height: '12%',
                backgroundColor: 'rgba(43,127,255,0.24)',
                willChange: 'transform, opacity',
              }}
              animate={{ opacity: [0.26, 0.72, 0.26], scaleY: [0.94, 1.06, 0.94] }}
              transition={{ duration: 3.8, delay: 0.18, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              style={{
                position: 'absolute',
                top: '31%',
                left: '18px',
                width: '28%',
                height: '2px',
                background:
                  'linear-gradient(90deg, rgba(43,127,255,0.34) 0%, rgba(43,127,255,0.04) 100%)',
                transformOrigin: 'left center',
                willChange: 'transform, opacity',
              }}
              animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.92, 1.05, 0.92] }}
              transition={{ duration: 4.2, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              style={{
                position: 'absolute',
                top: '31%',
                left: '28%',
                width: '1px',
                height: '16%',
                backgroundColor: 'rgba(43,127,255,0.18)',
                willChange: 'transform, opacity',
              }}
              animate={{ opacity: [0.22, 0.64, 0.22], scaleY: [0.95, 1.08, 0.95] }}
              transition={{ duration: 4.2, delay: 0.55, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              style={{
                position: 'absolute',
                bottom: '26%',
                right: '18px',
                width: '34%',
                height: '2px',
                background:
                  'linear-gradient(90deg, rgba(43,127,255,0.04) 0%, rgba(43,127,255,0.38) 58%, rgba(43,127,255,0.02) 100%)',
                transformOrigin: 'right center',
                willChange: 'transform, opacity',
              }}
              animate={{ opacity: [0.34, 0.88, 0.34], scaleX: [0.95, 1.03, 0.95] }}
              transition={{ duration: 4.6, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              style={{
                position: 'absolute',
                bottom: '26%',
                right: '23%',
                width: '1px',
                height: '14%',
                backgroundColor: 'rgba(43,127,255,0.2)',
                willChange: 'transform, opacity',
              }}
              animate={{ opacity: [0.24, 0.68, 0.24], scaleY: [0.95, 1.06, 0.95] }}
              transition={{ duration: 4.6, delay: 0.96, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div
              style={{
                position: 'absolute',
                bottom: '14%',
                left: '20px',
                width: '44%',
                height: '22%',
                border: '1px solid rgba(43,127,255,0.14)',
                background:
                  'linear-gradient(135deg, rgba(43,127,255,0.08) 0%, rgba(18,20,24,0.14) 100%)',
              }}
            />

            <motion.div
              style={{
                position: 'absolute',
                top: '26%',
                right: '20px',
                width: '18%',
                height: '12%',
                borderTop: '3px solid rgba(43,127,255,0.32)',
                borderRight: '3px solid rgba(43,127,255,0.32)',
                willChange: 'transform, opacity',
              }}
              animate={{ opacity: [0.35, 0.9, 0.35], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 5.2, delay: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              style={{
                position: 'absolute',
                bottom: '18%',
                right: '20px',
                width: '13px',
                height: '13px',
                borderRadius: '50%',
                backgroundColor: '#2B7FFF',
                boxShadow: '0 0 0 6px rgba(43,127,255,0.12)',
                willChange: 'transform, opacity',
              }}
              animate={{ opacity: [0.55, 1, 0.55], scale: [0.95, 1.12, 0.95] }}
              transition={{ duration: 3.2, delay: 0.7, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              style={{
                position: 'absolute',
                top: '28%',
                left: '22%',
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                backgroundColor: 'rgba(43,127,255,0.86)',
                boxShadow: '0 0 0 5px rgba(43,127,255,0.1)',
                willChange: 'transform, opacity',
              }}
              animate={{ opacity: [0.48, 0.92, 0.48], scale: [0.94, 1.12, 0.94] }}
              transition={{ duration: 3.6, delay: 0.24, repeat: Infinity, ease: 'easeInOut' }}
            />
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

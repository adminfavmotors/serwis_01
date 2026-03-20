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
        className="grid-texture"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.45,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '-12%',
          left: '-8%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(43,127,255,0.09) 0%, transparent 72%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '-24%',
          right: '-12%',
          width: '720px',
          height: '720px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(43,127,255,0.05) 0%, transparent 72%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-site"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          paddingTop: '132px',
          paddingBottom: '92px',
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          <motion.div {...fadeUp(0.08)} style={{ marginBottom: '22px' }}>
            <span className="section-label">Warsztat samochodowy • Kraków</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.16)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(42px, 6.6vw, 74px)',
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: '-0.018em',
              textTransform: 'uppercase',
              color: '#EAEDF2',
              maxWidth: '11ch',
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
              fontSize: 'clamp(17px, 2vw, 20px)',
              color: '#A9B2C3',
              lineHeight: 1.75,
              maxWidth: '58ch',
              marginBottom: '38px',
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
              marginBottom: '52px',
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
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '18px',
            }}
            className="hero-stats"
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
                  backgroundColor: '#16181C',
                  border: '1px solid #252830',
                  borderRadius: '4px',
                  padding: '18px 18px 16px',
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
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: '#3A4150',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '30px',
            backgroundColor: '#2B7FFF',
            opacity: 0.4,
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
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

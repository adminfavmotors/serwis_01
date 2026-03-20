'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
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
          opacity: 0.6,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(43,127,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(43,127,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-site"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '64px',
          paddingTop: '120px',
          paddingBottom: '80px',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '720px' }}>
          <motion.div {...fadeUp(0.1)} style={{ marginBottom: '24px' }}>
            <span className="section-label">Warsztat samochodowy • Kraków</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(56px, 8vw, 108px)',
              fontWeight: 700,
              lineHeight: 0.88,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              color: '#EAEDF2',
              marginBottom: '8px',
            }}
          >
            TWÓJ
            <br />
            SAMOCHÓD
            <br />
            <span style={{ color: '#2B7FFF' }}>W DOBRYCH</span>
            <br />
            RĘKACH
          </motion.h1>

          <motion.div
            {...fadeUp(0.3)}
            style={{
              width: '48px',
              height: '3px',
              backgroundColor: '#2B7FFF',
              margin: '28px 0',
            }}
          />

          <motion.p
            {...fadeUp(0.35)}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: '#6B7280',
              lineHeight: 1.7,
              maxWidth: '480px',
              marginBottom: '40px',
            }}
          >
            Profesjonalny serwis samochodowy w Krakowie. Szybka diagnostyka,
            uczciwa wycena i naprawy, po których wracasz na drogę bez stresu.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '56px',
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
            {...fadeUp(0.5)}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              paddingTop: '32px',
              borderTop: '1px solid #252830',
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
                style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '22px',
                    fontWeight: 500,
                    color: '#EAEDF2',
                    letterSpacing: '0.02em',
                  }}
                >
                  {badge.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    color: '#6B7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div
          style={{
            display: 'none',
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '52%',
            opacity: 0.9,
          }}
          className="hero-car"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              viewBox="0 0 700 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <ellipse
                cx="350"
                cy="270"
                rx="280"
                ry="30"
                fill="rgba(43,127,255,0.06)"
              />

              <path
                d="M80 220 L80 175 Q90 155 130 148 L230 142 L240 115 Q260 88 330 72 Q390 60 450 68 L530 88 Q570 100 600 130 L640 175 L640 220 Z"
                stroke="#2B7FFF"
                strokeWidth="1.5"
                fill="rgba(43,127,255,0.04)"
              />

              <path
                d="M240 115 Q268 72 330 58 Q395 46 450 68 L530 88"
                stroke="#2B7FFF"
                strokeWidth="1.5"
                fill="none"
              />

              <path
                d="M248 113 Q270 80 330 66 L330 113 Z"
                stroke="#2B7FFF"
                strokeWidth="1"
                fill="rgba(43,127,255,0.07)"
              />

              <path
                d="M335 113 L335 64 Q395 52 445 70 L445 113 Z"
                stroke="#2B7FFF"
                strokeWidth="1"
                fill="rgba(43,127,255,0.07)"
              />

              <path
                d="M450 113 L450 70 L530 90 L530 113 Z"
                stroke="#2B7FFF"
                strokeWidth="1"
                fill="rgba(43,127,255,0.07)"
              />

              <line
                x1="330"
                y1="113"
                x2="330"
                y2="220"
                stroke="#2B7FFF"
                strokeWidth="0.8"
                opacity="0.5"
              />
              <line
                x1="450"
                y1="113"
                x2="450"
                y2="220"
                stroke="#2B7FFF"
                strokeWidth="0.8"
                opacity="0.5"
              />

              <path
                d="M640 175 L660 180 L665 195 L650 205 L640 200"
                stroke="#2B7FFF"
                strokeWidth="1"
                fill="rgba(43,127,255,0.05)"
              />

              <ellipse
                cx="652"
                cy="185"
                rx="8"
                ry="5"
                fill="#2B7FFF"
                opacity="0.6"
              />
              <ellipse
                cx="652"
                cy="185"
                rx="4"
                ry="2.5"
                fill="#2B7FFF"
                opacity="0.9"
              />

              <path
                d="M660 183 L700 170 M660 186 L700 182 M660 189 L700 196"
                stroke="#2B7FFF"
                strokeWidth="0.8"
                opacity="0.2"
              />

              <rect
                x="78"
                y="178"
                width="6"
                height="14"
                rx="1"
                fill="#2B7FFF"
                opacity="0.5"
              />

              <circle
                cx="190"
                cy="222"
                r="44"
                stroke="#3A4150"
                strokeWidth="2"
                fill="rgba(22,24,28,0.8)"
              />
              <circle
                cx="190"
                cy="222"
                r="44"
                stroke="#2B7FFF"
                strokeWidth="1"
                fill="none"
                opacity="0.4"
              />
              <circle
                cx="190"
                cy="222"
                r="28"
                stroke="#2B7FFF"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
              />
              <circle cx="190" cy="222" r="8" fill="#2B7FFF" opacity="0.6" />
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180
                return (
                  <line
                    key={i}
                    x1={190 + 8 * Math.cos(rad)}
                    y1={222 + 8 * Math.sin(rad)}
                    x2={190 + 28 * Math.cos(rad)}
                    y2={222 + 28 * Math.sin(rad)}
                    stroke="#2B7FFF"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                )
              })}

              <circle
                cx="530"
                cy="222"
                r="44"
                stroke="#3A4150"
                strokeWidth="2"
                fill="rgba(22,24,28,0.8)"
              />
              <circle
                cx="530"
                cy="222"
                r="44"
                stroke="#2B7FFF"
                strokeWidth="1"
                fill="none"
                opacity="0.4"
              />
              <circle
                cx="530"
                cy="222"
                r="28"
                stroke="#2B7FFF"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
              />
              <circle cx="530" cy="222" r="8" fill="#2B7FFF" opacity="0.6" />
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180
                return (
                  <line
                    key={i}
                    x1={530 + 8 * Math.cos(rad)}
                    y1={222 + 8 * Math.sin(rad)}
                    x2={530 + 28 * Math.cos(rad)}
                    y2={222 + 28 * Math.sin(rad)}
                    stroke="#2B7FFF"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                )
              })}

              <line
                x1="60"
                y1="266"
                x2="680"
                y2="266"
                stroke="#2B7FFF"
                strokeWidth="1"
                strokeDasharray="6 4"
                opacity="0.2"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '32px',
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
            height: '32px',
            backgroundColor: '#2B7FFF',
            opacity: 0.4,
          }}
        />
      </motion.div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-car {
            display: block !important;
          }
        }
      `}</style>
    </section>
  )
}

export { Hero }

'use client'

import { motion } from 'framer-motion'
import { Car } from 'lucide-react'

const testimonials = [
  {
    text: 'Wszystko jasno wyjaśnione, termin dotrzymany i auto odebrane jeszcze tego samego dnia. Wrócę bez wahania.',
    author: 'Marek K.',
    car: 'VW Golf VII',
    rating: 5,
  },
  {
    text: 'Bardzo sprawna diagnostyka i uczciwa wycena. Czuć, że zespół naprawdę zna się na swojej pracy.',
    author: 'Anna W.',
    car: 'Toyota Corolla',
    rating: 5,
  },
  {
    text: 'Wreszcie warsztat, który nie mówi zagadkami. Dostałem konkrety, zdjęcia i sensowny kosztorys.',
    author: 'Piotr S.',
    car: 'BMW E46',
    rating: 5,
  },
  {
    text: 'Świetny kontakt, szybka wymiana opon i dodatkowo sprawdzenie kilku rzeczy, o które nawet nie prosiłam.',
    author: 'Karolina M.',
    car: 'Ford Focus',
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? '#2B7FFF' : 'none'}
          stroke={i < count ? '#2B7FFF' : '#3A4150'}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="opinie"
      style={{
        backgroundColor: '#16181C',
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
            marginBottom: '56px',
          }}
        >
          <div>
            <span className="section-label">Opinie klientów</span>
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
              CO MÓWIĄ
              <br />
              <span style={{ color: '#2B7FFF' }}>KIEROWCY</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            style={{
              backgroundColor: '#1E2026',
              border: '1px solid #252830',
              borderRadius: '4px',
              padding: '20px 28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '40px',
                color: '#EAEDF2',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              4.9
            </span>
            <StarRating count={5} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                color: '#6B7280',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginTop: '2px',
              }}
            >
              127 opinii
            </span>
          </motion.div>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              style={{
                backgroundColor: '#1E2026',
                border: '1px solid #252830',
                borderRadius: '4px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = '#2B7FFF'
                el.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = '#252830'
                el.style.transform = 'translateY(0)'
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '16px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '120px',
                  lineHeight: 1,
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(43,127,255,0.12)',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                &ldquo;
              </span>

              <StarRating count={t.rating} />

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: '#C4C9D4',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  position: 'relative',
                  zIndex: 1,
                  flexGrow: 1,
                }}
              >
                {t.text}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid #252830',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#EAEDF2',
                    }}
                  >
                    {t.author}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(43,127,255,0.08)',
                    border: '1px solid rgba(43,127,255,0.15)',
                    borderRadius: '2px',
                    padding: '4px 10px',
                  }}
                >
                  <Car size={12} color="#2B7FFF" strokeWidth={1.5} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: '#2B7FFF',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {t.car}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            marginTop: '40px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: '#3A4150',
            }}
          >
            Opinie pochodzą od prawdziwych klientów serwisu MotoFix •{' '}
            <span style={{ color: '#6B7280' }}>Kraków, ul. Przemysłowa 12</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export { Testimonials }

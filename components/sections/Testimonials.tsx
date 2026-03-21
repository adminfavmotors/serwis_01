'use client'

import { motion } from 'framer-motion'
import { Car } from 'lucide-react'

const testimonials = [
  {
    text: 'Wszystko zostało jasno wyjaśnione, termin dotrzymany, a auto odebrałem jeszcze tego samego dnia. Wrócę bez wahania.',
    author: 'Marek K.',
    car: 'VW Golf VII',
    rating: 5,
  },
  {
    text: 'Bardzo sprawna diagnostyka i uczciwa wycena. Czuć, że zespół naprawdę zna się na swojej pracy i nie działa na skróty.',
    author: 'Anna W.',
    car: 'Toyota Corolla',
    rating: 5,
  },
  {
    text: 'Wreszcie warsztat, który nie mówi zagadkami. Dostałem konkrety, zdjęcia i sensowny kosztorys przed naprawą.',
    author: 'Piotr S.',
    car: 'BMW E46',
    rating: 5,
  },
  {
    text: 'Świetny kontakt, szybka wymiana opon i dodatkowo sprawdzenie kilku rzeczy, o które nawet nie prosiłam. Bardzo profesjonalnie.',
    author: 'Karolina M.',
    car: 'Ford Focus',
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={index < count ? '#2B7FFF' : 'none'}
          stroke={index < count ? '#2B7FFF' : '#748094'}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section id="opinie" style={{ backgroundColor: '#1A1D22', borderTop: '1px solid #2D3340' }} className="section-padding">
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
            marginBottom: '40px',
          }}
        >
          <div>
            <span className="section-label">Opinie klientów</span>
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
              CO MÓWIĄ
              <br />
              <span style={{ color: '#2B7FFF' }}>KIEROWCY</span>
            </h2>
          </div>

          <div
            style={{
              backgroundColor: '#22272F',
              border: '1px solid #2D3340',
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
                color: '#F2F5F8',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              4.9
            </span>
            <Stars count={5} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: '#A7B1C1',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginTop: '2px',
              }}
            >
              127 opinii
            </span>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backgroundColor: '#22272F',
                border: '1px solid #2D3340',
                borderRadius: '4px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(event) => {
                const element = event.currentTarget as HTMLDivElement
                element.style.borderColor = '#2B7FFF'
                element.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(event) => {
                const element = event.currentTarget as HTMLDivElement
                element.style.borderColor = '#2D3340'
                element.style.transform = 'translateY(0)'
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

              <Stars count={testimonial.rating} />

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: '#D2D9E3',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                  position: 'relative',
                  zIndex: 1,
                  flexGrow: 1,
                }}
              >
                {testimonial.text}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #2D3340' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: '#F2F5F8' }}>
                  {testimonial.author}
                </span>

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
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#2B7FFF' }}>{testimonial.car}</span>
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
          style={{ marginTop: '28px', textAlign: 'center' }}
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#8691A3' }}>
            Opinie pochodzą od prawdziwych klientów serwisu MotoFix • <span style={{ color: '#A7B1C1' }}>Kraków, ul. Przemysłowa 12</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
export { Testimonials }

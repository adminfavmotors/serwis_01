'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Car } from 'lucide-react'
import { useEffect, useState } from 'react'

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

function Stars({ count, size = 14 }: { count: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width={size}
          height={size}
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
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [])

  const activeTestimonial = testimonials[activeIndex]

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

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
            marginBottom: '36px',
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
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}
          >
            <div
              style={{
                backgroundColor: '#22272F',
                border: '1px solid #2D3340',
                borderRadius: '4px',
                padding: '18px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '36px',
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
                }}
              >
                127 opinii
              </span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { label: 'Poprzednia opinia', onClick: goPrev, icon: ArrowLeft },
                { label: 'Następna opinia', onClick: goNext, icon: ArrowRight },
              ].map((control) => {
                const Icon = control.icon

                return (
                  <button
                    key={control.label}
                    type="button"
                    aria-label={control.label}
                    onClick={control.onClick}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      border: '1px solid #2D3340',
                      backgroundColor: '#22272F',
                      color: '#F2F5F8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'border-color 0.15s ease, color 0.15s ease, transform 0.15s ease',
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.borderColor = '#2B7FFF'
                      event.currentTarget.style.color = '#2B7FFF'
                      event.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.borderColor = '#2D3340'
                      event.currentTarget.style.color = '#F2F5F8'
                      event.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <Icon size={18} />
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            background:
              'linear-gradient(135deg, rgba(34,39,47,1) 0%, rgba(28,33,40,1) 52%, rgba(24,28,34,1) 100%)',
            border: '1px solid #2D3340',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 22px 48px rgba(0,0,0,0.16)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(43,127,255,0.08) 0%, transparent 32%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '18px',
              right: '26px',
              fontFamily: 'var(--font-display)',
              fontSize: '140px',
              lineHeight: 1,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(43,127,255,0.12)',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.author}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.55fr) minmax(240px, 0.75fr)',
                gap: '0',
              }}
              className="testimonial-carousel"
            >
              <div style={{ padding: '40px 40px 34px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <Stars count={activeTestimonial.rating} size={16} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: '#2B7FFF',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Opinia klienta
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    color: '#E3E8EF',
                    lineHeight: 1.75,
                    fontStyle: 'italic',
                    maxWidth: '40ch',
                  }}
                >
                  {activeTestimonial.text}
                </p>
              </div>

              <div
                style={{
                  padding: '40px 34px 34px',
                  borderLeft: '1px solid #2D3340',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '24px',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: '#98A2B3',
                      textTransform: 'uppercase',
                      letterSpacing: '0.16em',
                    }}
                  >
                    Poleca nas
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '28px',
                      color: '#F2F5F8',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {activeTestimonial.author}
                  </span>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: 'fit-content',
                    backgroundColor: 'rgba(43,127,255,0.08)',
                    border: '1px solid rgba(43,127,255,0.16)',
                    borderRadius: '2px',
                    padding: '8px 12px',
                  }}
                >
                  <Car size={14} color="#2B7FFF" strokeWidth={1.5} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: '#2B7FFF',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {activeTestimonial.car}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#2D3340' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: '#A7B1C1',
                      lineHeight: 1.7,
                    }}
                  >
                    Każda opinia pochodzi od realnego klienta serwisu MotoFix i dotyczy wykonanej usługi.
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              padding: '18px 28px 22px',
              borderTop: '1px solid #2D3340',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', gap: '10px' }}>
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.author}
                  type="button"
                  aria-label={`Przejdź do opinii ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    width: index === activeIndex ? '34px' : '10px',
                    height: '10px',
                    borderRadius: '999px',
                    border: 'none',
                    backgroundColor: index === activeIndex ? '#2B7FFF' : '#536074',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                />
              ))}
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#8691A3' }}>
              Opinie pochodzą od prawdziwych klientów serwisu MotoFix • <span style={{ color: '#A7B1C1' }}>Kraków, ul. Przemysłowa 12</span>
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .testimonial-carousel {
            grid-template-columns: 1fr !important;
          }

          .testimonial-carousel > div:last-child {
            border-left: none !important;
            border-top: 1px solid #2D3340 !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Testimonials
export { Testimonials }

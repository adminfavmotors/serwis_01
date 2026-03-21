'use client'

import { motion } from 'framer-motion'
import { Clock, ShieldCheck, ThumbsUp, Wrench } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = Date.now()

          const tick = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))

            if (progress < 1) {
              requestAnimationFrame(tick)
            } else {
              setCount(target)
            }
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )

    const element = ref.current
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [duration, target])

  return { count, ref }
}

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Jasne zasady napraw',
    description: 'Najpierw diagnozujemy i wyceniamy usługę, więc przy odbiorze auta nie ma nieprzyjemnych niespodzianek.',
  },
  {
    icon: Wrench,
    title: 'Nowoczesne zaplecze',
    description: 'Pracujemy na sprawdzonym sprzęcie diagnostycznym i dobrych częściach, które dają pewny efekt.',
  },
  {
    icon: ThumbsUp,
    title: 'Zespół z doświadczeniem',
    description: 'Mechanicy i doradcy potrafią nie tylko naprawić problem, ale też wytłumaczyć go prostym językiem.',
  },
  {
    icon: Clock,
    title: 'Szybkie terminy',
    description: 'Dbamy o sprawny proces obsługi, dlatego większość standardowych prac zamykamy nawet w 24 godziny.',
  },
]

function StatCount({
  target,
  suffix,
  label,
  index,
}: {
  target: number
  suffix: string
  label: string
  index: number
}) {
  const { count, ref } = useCountUp(target, 2200)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '32px 0', flex: 1, minWidth: '140px' }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(48px, 6vw, 72px)',
            fontWeight: 500,
            color: '#F2F5F8',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          {count.toLocaleString('pl-PL')}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(24px, 3vw, 36px)',
            color: '#2B7FFF',
            lineHeight: 1,
          }}
        >
          {suffix}
        </span>
      </div>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          color: '#A7B1C1',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
        }}
      >
        {label}
      </span>
    </motion.div>
  )
}

function WhyUs() {
  return (
    <section
      id="o-nas"
      style={{
        backgroundColor: '#1A1D22',
        borderTop: '1px solid #2D3340',
        borderBottom: '1px solid #2D3340',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="section-padding"
    >
      <div className="grid-texture" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.28 }} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(43,127,255,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '16px' }}
        >
          <span className="section-label">Dlaczego my</span>
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
            LICZBY MÓWIĄ
            <br />
            <span style={{ color: '#2B7FFF' }}>ZA SIEBIE</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '40px', borderBottom: '1px solid #2D3340' }}>
          <StatCount target={15} suffix="+" label="Lat na rynku" index={0} />
          <div style={{ width: '1px', backgroundColor: '#2D3340', margin: '32px 40px' }} className="stat-div" />
          <StatCount target={3000} suffix="+" label="Zadowolonych klientów" index={1} />
          <div style={{ width: '1px', backgroundColor: '#2D3340', margin: '32px 40px' }} className="stat-div" />
          <StatCount target={98} suffix="%" label="Pozytywnych opinii" index={2} />
          <div style={{ width: '1px', backgroundColor: '#2D3340', margin: '32px 40px' }} className="stat-div" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '32px 0', flex: 1, minWidth: '140px' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(48px, 6vw, 72px)',
                fontWeight: 500,
                color: '#F2F5F8',
                lineHeight: 1,
              }}
            >
              24<span style={{ color: '#2B7FFF' }}>H</span>
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: '#A7B1C1',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
              }}
            >
              Czas realizacji
            </span>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
          {trustPoints.map((point, index) => {
            const Icon = point.icon

            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
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
                  gap: '14px',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(event) => {
                  ;(event.currentTarget as HTMLDivElement).style.borderColor = '#2B7FFF'
                }}
                onMouseLeave={(event) => {
                  ;(event.currentTarget as HTMLDivElement).style.borderColor = '#2D3340'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'rgba(43,127,255,0.1)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={20} color="#2B7FFF" strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#F2F5F8',
                    textTransform: 'uppercase',
                    lineHeight: 1.1,
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: '#A7B1C1',
                    lineHeight: 1.7,
                  }}
                >
                  {point.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stat-div {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default WhyUs
export { WhyUs }

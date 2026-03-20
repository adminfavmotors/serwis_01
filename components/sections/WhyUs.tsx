'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Wrench, ThumbsUp } from 'lucide-react'

function useCountUp(target: number, duration: number = 2000) {
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
            if (progress < 1) requestAnimationFrame(tick)
            else setCount(target)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [target, duration])

  return { count, ref }
}

function StatCounter({
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
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        padding: '32px 0',
        flex: 1,
        minWidth: '140px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(48px, 6vw, 72px)',
            fontWeight: 500,
            color: '#EAEDF2',
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
          color: '#6B7280',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
        }}
      >
        {label}
      </span>
    </motion.div>
  )
}

function StatStatic({
  value,
  label,
  index,
}: {
  value: string
  label: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        padding: '32px 0',
        flex: 1,
        minWidth: '140px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(48px, 6vw, 72px)',
          fontWeight: 500,
          color: '#EAEDF2',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        {value}
        <span style={{ color: '#2B7FFF', fontSize: '0.5em' }}></span>
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          color: '#6B7280',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
        }}
      >
        {label}
      </span>
    </motion.div>
  )
}

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Jasne zasady napraw',
    description:
      'Najpierw diagnozujemy i wyceniamy. Bez niespodzianek przy odbiorze auta.',
  },
  {
    icon: Wrench,
    title: 'Nowoczesne zaplecze',
    description:
      'Pracujemy na sprawdzonym sprzęcie diagnostycznym i dobrych częściach.',
  },
  {
    icon: ThumbsUp,
    title: 'Zespół z doświadczeniem',
    description:
      'Mechanicy i doradcy, którzy potrafią wytłumaczyć problem prostym językiem.',
  },
  {
    icon: Clock,
    title: 'Szybkie terminy',
    description:
      'Dbamy o sprawny proces, dlatego większość prac zamykamy nawet w 24 godziny.',
  },
]

export default function WhyUs() {
  return (
    <section
      id="o-nas"
      style={{
        backgroundColor: '#16181C',
        borderTop: '1px solid #252830',
        borderBottom: '1px solid #252830',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="section-padding"
    >
      <div
        className="grid-texture"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.4,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(43,127,255,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ marginBottom: '16px' }}
        >
          <span className="section-label">Dlaczego my</span>
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
            LICZBY MÓWIĄ
            <br />
            <span style={{ color: '#2B7FFF' }}>ZA SIEBIE</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0',
            marginBottom: '64px',
            borderBottom: '1px solid #252830',
          }}
        >
          <StatCounter target={15} suffix="+" label="Lat na rynku" index={0} />
          <div
            style={{
              width: '1px',
              backgroundColor: '#252830',
              margin: '32px 40px 32px 40px',
              flexShrink: 0,
            }}
            className="stat-divider"
          />
          <StatCounter
            target={3000}
            suffix="+"
            label="Zadowolonych klientów"
            index={1}
          />
          <div
            style={{
              width: '1px',
              backgroundColor: '#252830',
              margin: '32px 40px 32px 40px',
              flexShrink: 0,
            }}
            className="stat-divider"
          />
          <StatCounter
            target={98}
            suffix="%"
            label="Pozytywnych opinii"
            index={2}
          />
          <div
            style={{
              width: '1px',
              backgroundColor: '#252830',
              margin: '32px 40px 32px 40px',
              flexShrink: 0,
            }}
            className="stat-divider"
          />
          <StatStatic value="24H" label="Czas realizacji" index={3} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
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
                  gap: '14px',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = '#2B7FFF'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = '#252830'
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
                    color: '#EAEDF2',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    lineHeight: 1.1,
                  }}
                >
                  {point.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: '#6B7280',
                    lineHeight: 1.6,
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
          .stat-divider { display: none !important; }
        }
      `}</style>
    </section>
  )
}

export { WhyUs }

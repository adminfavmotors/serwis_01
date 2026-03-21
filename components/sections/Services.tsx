'use client'

import { featuredServices } from '@/data/services-catalog'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Snowflake } from 'lucide-react'

const serviceIcons = [
  '/icons/services/oil-can.svg',
  '/icons/services/suspension.svg',
  '/icons/services/laptop.svg',
  '/icons/services/wheel.svg',
  '/icons/services/car-door.svg',
  null,
]

function Services() {
  return (
    <section id="uslugi" style={{ backgroundColor: '#121418', borderTop: '1px solid #2D3340' }} className="section-padding">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '40px' }}
        >
          <span className="section-label">Czym się zajmujemy</span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(34px, 4.6vw, 56px)',
              fontWeight: 700,
              color: '#F2F5F8',
              textTransform: 'uppercase',
              lineHeight: 0.96,
              maxWidth: 'fit-content',
            }}
          >
            NASZE USŁUGI
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1px',
            backgroundColor: '#2D3340',
            border: '1px solid #2D3340',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          {featuredServices.map((service, index) => {
            const iconSrc = serviceIcons[index] ?? null

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundColor: '#1A1D22',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  borderLeft: '3px solid transparent',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(event) => {
                  const element = event.currentTarget as HTMLDivElement
                  element.style.backgroundColor = '#22272F'
                  element.style.borderLeftColor = '#2B7FFF'
                }}
                onMouseLeave={(event) => {
                  const element = event.currentTarget as HTMLDivElement
                  element.style.backgroundColor = '#1A1D22'
                  element.style.borderLeftColor = 'transparent'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      backgroundColor: 'rgba(43,127,255,0.12)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {iconSrc ? (
                      <Image
                        src={iconSrc}
                        alt=""
                        aria-hidden="true"
                        width={22}
                        height={22}
                        unoptimized
                        style={{
                          width: '22px',
                          height: '22px',
                          objectFit: 'contain',
                          filter:
                            'brightness(0) saturate(100%) invert(47%) sepia(87%) saturate(3275%) hue-rotate(202deg) brightness(102%) contrast(101%)',
                        }}
                      />
                    ) : (
                      <Snowflake size={22} color="#2B7FFF" strokeWidth={1.6} />
                    )}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: '#2B7FFF',
                      backgroundColor: 'rgba(43,127,255,0.08)',
                      padding: '4px 10px',
                      borderRadius: '2px',
                    }}
                  >
                    {service.price}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#F2F5F8',
                    textTransform: 'uppercase',
                    lineHeight: 1.1,
                  }}
                >
                  {service.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: '#A7B1C1',
                    lineHeight: 1.7,
                  }}
                >
                  {service.shortDescription}
                </p>
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
            marginTop: '24px',
            padding: '28px 30px',
            border: '1px solid rgba(43,127,255,0.18)',
            borderRadius: '4px',
            background:
              'linear-gradient(90deg, rgba(26,29,34,0.98) 0%, rgba(26,95,204,0.18) 54%, rgba(26,29,34,0.95) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '18px',
            boxShadow: '0 16px 40px rgba(0,0,0,0.16)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: '#2B7FFF',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Pełny katalog usług
            </span>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: '#DCE2EA',
                lineHeight: 1.7,
                maxWidth: '58ch',
              }}
            >
              To tylko część oferty. <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Zobacz pełną listę usług i orientacyjne ceny.</span>
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="/uslugi" className="btn-secondary">
              Zobacz więcej
            </a>
            <a href="#kontakt" className="btn-primary" style={{ flexShrink: 0 }}>
              Umów wizytę
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
export { Services }
